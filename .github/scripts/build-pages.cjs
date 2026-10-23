const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { createRequire } = require("node:module");

const root = process.cwd();
const outputRoot = path.join(root, "dist");
const toolsDir = process.env.PAGES_TOOLS_DIR || path.join(root, "node_modules");
const toolsRequire = createRequire(path.join(toolsDir, "build-pages.cjs"));
const matter = toolsRequire("gray-matter");
const { marked } = toolsRequire("marked");
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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

function rewriteHomepageLinks(html, eligibleSources) {
  const links = new Map();
  for (const [source, presentation] of eligibleSources) {
    links.set(source.replace(/\\/g, "/"), presentation.outputRelative);
  }

  return html.replace(/<a\b[^>]*href=(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi, (anchor, _quote, href, body) => {
    if (isExternalUrl(href)) {
      return anchor;
    }

    const cleanHref = href.replace(/&amp;/g, "&");
    const localPath = cleanHref.split(/[?#]/, 1)[0];
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(localPath);
    } catch {
      return body;
    }

    const target = path.resolve(root, decodedPath);
    if (!isInside(root, target)) {
      return body;
    }

    const sourceRelative = relativePath(target);
    const publishedPage = links.get(sourceRelative);
    if (publishedPage) {
      const suffix = cleanHref.slice(localPath.length);
      return `<a href="${escapeHtml(`./${urlPath(publishedPage)}${suffix}`)}">${body}</a>`;
    }

    if (sourceRelative.toLowerCase() === "readme.md") {
      return `<a href="./index.html${escapeHtml(cleanHref.slice(localPath.length))}">${body}</a>`;
    }

    return body;
  });
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

function buildHomepage() {
  const readmePath = path.join(root, "README.md");
  if (!fs.existsSync(readmePath)) {
    throw new Error("Root README.md is required to generate the homepage.");
  }

  const readmeHtml = marked.parse(fs.readFileSync(readmePath, "utf8"));
  const rewrittenReadme = rewriteHomepageLinks(readmeHtml, presentationsBySource);
  const eligibleLabs = labs.filter((lab) => lab.presentations.length > 0);
  const presentationList = eligibleLabs.map((lab) => {
    const items = lab.presentations.map((presentation) => {
      const title = path.basename(presentation.sourcePath, path.extname(presentation.sourcePath));
      return `<li><a href="./${urlPath(presentation.outputRelative)}">${escapeHtml(title)}</a></li>`;
    }).join("\n");
    return `<li><strong>${escapeHtml(lab.name)}</strong><ul>${items}</ul></li>`;
  }).join("\n");

  const homepage = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Labs</title>
  <style>
    body { max-width: 72rem; margin: 2rem auto; padding: 0 1rem; font: 1rem/1.6 system-ui, sans-serif; color: #1f2937; }
    img { max-width: 100%; height: auto; }
    pre { overflow-x: auto; padding: 1rem; background: #f3f4f6; }
    table { border-collapse: collapse; display: block; overflow-x: auto; }
    th, td { border: 1px solid #d1d5db; padding: .5rem; text-align: left; }
  </style>
</head>
<body>
${rewrittenReadme}
<section aria-labelledby="presentations-heading">
  <h2 id="presentations-heading">Available Marp presentations</h2>
  <ul>${presentationList}</ul>
</section>
</body>
</html>
`;

  fs.writeFileSync(path.join(outputRoot, "index.html"), homepage, "utf8");
}

function validateBuild() {
  const homepagePath = path.join(outputRoot, "index.html");
  if (!fs.existsSync(homepagePath)) {
    throw new Error("Generated homepage is missing.");
  }

  const homepage = fs.readFileSync(homepagePath, "utf8");
  for (const [source, presentation] of presentationsBySource) {
    const outputPath = path.join(outputRoot, presentation.outputRelative);
    if (!fs.existsSync(outputPath)) {
      throw new Error(`Eligible presentation was not published: ${source}`);
    }
    if (!homepage.includes(`./${urlPath(presentation.outputRelative)}`)) {
      throw new Error(`Homepage is missing eligible presentation: ${source}`);
    }
  }

  for (const lab of labs) {
    if (lab.presentations.length > 0) {
      console.log(`Included ${lab.name}: ${lab.presentations.map((item) => path.basename(item.sourcePath)).join(", ")}`);
    } else {
      console.log(`Excluded ${lab.name}: no valid Markdown file with YAML front matter marp: true.`);
    }
  }
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
  buildHomepage();
  validateBuild();
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
