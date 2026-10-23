const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { createRequire } = require("node:module");

const root = process.cwd();
const outputRoot = path.join(root, "dist");
const toolsDir = process.env.PAGES_TOOLS_DIR || path.join(root, "node_modules");
const toolsRequire = createRequire(path.join(toolsDir, "build-pages.cjs"));
const matter = toolsRequire("gray-matter");
const marpPackagePath = path.join(
  toolsDir,
  "node_modules",
  "@marp-team",
  "marp-cli",
  "package.json",
);
const marpPackage = JSON.parse(fs.readFileSync(marpPackagePath, "utf8"));
const marpBin = typeof marpPackage.bin === "string" ? marpPackage.bin : marpPackage.bin.marp;
const marpScript = path.resolve(path.dirname(marpPackagePath), marpBin);
const temporarySourceRoot = path.join(outputRoot, ".build-src");

const ignoredDirectories = new Set([".git", ".agent", "node_modules"]);
const presentationsBySource = new Map();
const labs = [];
const presentationAssets = new Set();

function walkMarkdown(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || ignoredDirectories.has(entry.name)) {
      continue;
    }

    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdown(absolutePath));
    } else if (entry.isFile() && /\.md$/i.test(entry.name)) {
      files.push(absolutePath);
    }
  }

  return files;
}

function relativePath(absolutePath) {
  return path.relative(root, absolutePath).split(path.sep).join("/");
}

function urlPath(relative) {
  return relative.split("/").map(encodeURIComponent).join("/");
}

function isInside(directory, target) {
  const relative = path.relative(directory, target);
  return relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative));
}

function outputLink(fromHtml, toHtml) {
  let link = path.relative(path.dirname(fromHtml), toHtml).split(path.sep).join("/");
  if (!link.startsWith(".")) {
    link = `./${link}`;
  }
  return urlPath(link);
}

function isExternalUrl(href) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href);
}

function resolveLocalTarget(sourcePath, href) {
  const pathPart = href.split(/[?#]/, 1)[0];
  if (!pathPart) {
    return null;
  }

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathPart);
  } catch {
    return null;
  }

  const target = path.resolve(path.dirname(sourcePath), decodedPath);
  return target;
}

function copyPresentationAsset(labRoot, target) {
  if (!isInside(labRoot, target) || !fs.existsSync(target) || !fs.statSync(target).isFile()) {
    return false;
  }

  const assetRelative = path.relative(root, target);
  const outputAsset = path.join(outputRoot, assetRelative);
  const temporaryAsset = path.join(temporarySourceRoot, assetRelative);
  fs.mkdirSync(path.dirname(outputAsset), { recursive: true });
  fs.mkdirSync(path.dirname(temporaryAsset), { recursive: true });
  fs.copyFileSync(target, outputAsset);
  fs.copyFileSync(target, temporaryAsset);
  presentationAssets.add(assetRelative.split(path.sep).join("/"));
  return true;
}

function rewriteOutsideCode(content, rewrite) {
  const codeSegments = [];
  let safeContent = content.replace(/^ {0,3}(`{3,}|~{3,})[^\r\n]*\r?\n[\s\S]*?^ {0,3}\1[ \t]*$/gm, (code) => {
    codeSegments.push(code);
    return `\u0000${codeSegments.length - 1}\u0000`;
  });
  safeContent = safeContent.replace(/(`+)[^`\r\n]*?\1/g, (code) => {
    codeSegments.push(code);
    return `\u0000${codeSegments.length - 1}\u0000`;
  });

  return rewrite(safeContent).replace(/\u0000(\d+)\u0000/g, (_placeholder, index) => codeSegments[Number(index)]);
}

function copyReferencedAssets(content, presentation, labRoot) {
  const sourcePath = presentation.sourcePath;
  rewriteOutsideCode(content, (markdown) => {
    const references = [
      ...markdown.matchAll(/\b(?:src|href|poster)\s*=\s*(["'])(.*?)\1/gi),
      ...markdown.matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi),
    ];

    for (const reference of references) {
      const href = reference[2].trim();
      if (!href || isExternalUrl(href) || /\.(?:md|html?)(?:[?#].*)?$/i.test(href)) {
        continue;
      }

      const target = resolveLocalTarget(sourcePath, href);
      if (target) {
        copyPresentationAsset(labRoot, target);
      }
    }
    return markdown;
  });
}

function rewritePresentationLinks(content, presentation) {
  const sourcePath = presentation.sourcePath;
  const labRoot = path.join(root, presentation.labName);

  return rewriteOutsideCode(content, (markdown) => markdown.replace(
    /(!?)\[([^\]]*)\]\(\s*(<[^>]+>|[^)\s]+)([^)]*)\)/g,
    (match, image, label, rawHref, suffix) => {
      const href = rawHref.startsWith("<") && rawHref.endsWith(">")
        ? rawHref.slice(1, -1)
        : rawHref;

      if (isExternalUrl(href)) {
        return match;
      }

      const target = resolveLocalTarget(sourcePath, href);
      const hasPathPrefix = href.startsWith("./") || href.startsWith("../");
      const hasKnownExtension = /\.[a-z\d]{1,8}(?:[?#].*)?$/i.test(href);
      if (!target || (!hasPathPrefix && !hasKnownExtension && !fs.existsSync(target))) {
        return match;
      }

      const targetSource = relativePath(target);
      const targetPresentation = presentationsBySource.get(targetSource);
      if (targetPresentation) {
        const targetLink = outputLink(presentation.outputRelative, targetPresentation.outputRelative);
        return `${image}[${label}](${targetLink}${suffix})`;
      }

      if (/\.(?:md|html?)$/i.test(target)) {
        console.log(`  Excluding local document link from ${relativePath(sourcePath)}: ${href}`);
        return label;
      }

      if (copyPresentationAsset(labRoot, target)) {
        return match;
      }

      if (image || hasKnownExtension || hasPathPrefix) {
        console.warn(`  Missing local asset removed from ${relativePath(sourcePath)}: ${href}`);
        return label;
      }

      return match;
    },
  ));
}

function scanLabs() {
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || !entry.name.startsWith("lab-")) {
      continue;
    }

    const labRoot = path.join(root, entry.name);
    const labPresentations = [];
    const markdownFiles = walkMarkdown(labRoot);

    for (const sourcePath of markdownFiles) {
      let parsed;
      try {
        parsed = matter(fs.readFileSync(sourcePath, "utf8"));
      } catch (error) {
        console.warn(`  Invalid front matter excluded: ${relativePath(sourcePath)} (${error.message})`);
        continue;
      }

      if (parsed.data.marp !== true) {
        continue;
      }

      const sourceRelative = relativePath(sourcePath);
      const outputRelative = sourceRelative.replace(/\.md$/i, ".html");
      const presentation = { sourcePath, sourceRelative, outputRelative, labName: entry.name };
      presentationsBySource.set(sourceRelative, presentation);
      labPresentations.push(presentation);
    }

    labs.push({ name: entry.name, presentations: labPresentations });
  }
}

function renderPresentation(presentation) {
  const original = fs.readFileSync(presentation.sourcePath, "utf8");
  copyReferencedAssets(original, presentation, path.join(root, presentation.labName));
  const rewritten = rewritePresentationLinks(original, presentation);
  const temporaryInput = path.join(temporarySourceRoot, presentation.sourceRelative);
  const outputFile = path.join(outputRoot, presentation.outputRelative);
  fs.mkdirSync(path.dirname(temporaryInput), { recursive: true });
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(temporaryInput, rewritten, "utf8");

  const result = spawnSync(
    process.execPath,
    [marpScript, "--no-stdin", "--html", "--allow-local-files", temporaryInput, "-o", outputFile],
    { cwd: root, encoding: "utf8" },
  );
  if (result.status !== 0) {
    throw new Error(`Marp failed for ${presentation.sourceRelative}:\n${result.stderr || result.stdout}`);
  }
  if (!fs.existsSync(outputFile) || fs.statSync(outputFile).size === 0) {
    throw new Error(`Marp did not produce ${presentation.outputRelative}`);
  }
  console.log(`  Rendered ${presentation.sourceRelative} -> ${presentation.outputRelative}`);
}

function validateBuild() {
  const expectedFiles = new Set([
    ...[...presentationsBySource.values()].map((presentation) => presentation.outputRelative),
    ...presentationAssets,
  ]);
  const actualFiles = new Set();

  function collectFiles(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        collectFiles(absolutePath);
      } else if (entry.isFile()) {
        actualFiles.add(path.relative(outputRoot, absolutePath).split(path.sep).join("/"));
      }
    }
  }

  collectFiles(outputRoot);
  if (actualFiles.size !== expectedFiles.size || [...actualFiles].some((file) => !expectedFiles.has(file))) {
    const unexpected = [...actualFiles].filter((file) => !expectedFiles.has(file));
    const missing = [...expectedFiles].filter((file) => !actualFiles.has(file));
    throw new Error(`Deployment output contains unexpected or missing files. Unexpected: ${unexpected.join(", ") || "none"}. Missing: ${missing.join(", ") || "none"}.`);
  }

  for (const [source, presentation] of presentationsBySource) {
    const outputPath = path.join(outputRoot, presentation.outputRelative);
    if (!fs.existsSync(outputPath) || fs.statSync(outputPath).size === 0) {
      throw new Error(`Eligible presentation was not published: ${source}`);
    }
  }

  for (const lab of labs) {
    if (lab.presentations.length > 0) {
      for (const presentation of lab.presentations) {
        console.log(`Included ${presentation.sourceRelative} -> ${presentation.outputRelative}`);
      }
    } else {
      console.log(`Excluded ${lab.name}: no valid Markdown file with YAML front matter marp: true.`);
    }
  }
  console.log(`Validated ${actualFiles.size} deployment files: ${presentationsBySource.size} presentations and ${presentationAssets.size} required assets.`);
}

function main() {
  fs.rmSync(outputRoot, { recursive: true, force: true });
  fs.mkdirSync(outputRoot, { recursive: true });
  scanLabs();

  const eligibleCount = [...presentationsBySource.values()].length;
  if (eligibleCount === 0) {
    throw new Error("No valid Marp presentations were found; refusing to publish an empty presentation site.");
  }

  for (const presentation of presentationsBySource.values()) {
    renderPresentation(presentation);
  }
  fs.rmSync(temporarySourceRoot, { recursive: true, force: true });
  validateBuild();
}

try {
  main();
} catch (error) {
  console.error(error.stack || error.message);
  process.exitCode = 1;
}
