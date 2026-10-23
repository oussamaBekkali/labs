---
name: github-deployment
description: "Configure GitHub Pages to discover and publish every valid Marp presentation in lab directories. Render only Marp Markdown to HTML with Marp CLI and include only the presentations and their required assets."
---

# GitHub Deployment Skill

## Purpose

Build and publish only rendered Marp presentations and their required local assets to GitHub Pages. The deployed site must not include a homepage, an index page, source Markdown, ordinary lab documents, or standalone HTML websites.

## 1. Inspect Before Changing

1. Inspect the repository structure, current branch, worktree, and every file in `.github/workflows/`.
2. Identify lab directories and scan their Markdown files.
3. A file is eligible only if it has valid YAML front matter with the Boolean value `marp: true`.
4. Exclude ordinary Markdown, malformed or non-Marp front matter, `.agent/`, `.git/`, development-only files, and HTML-only labs.
5. Include every eligible presentation, including multiple presentations in one lab.
6. Preserve unrelated workflows and all original repository files.

## 2. Build the Deployment Output

Use `.github/workflows/deploy-pages.yml` and `.github/scripts/build-pages.cjs` for this repository's build.

- Scan lab directories on every build; do not hard-code presentation filenames.
- Render each eligible presentation with the official Marp CLI.
- Preserve the source directory structure in the output so a presentation at `lab-name/deck.md` is published at `lab-name/deck.html`.
- Include only rendered presentation HTML and the local assets actually required by those presentations.
- Do not publish the root README, lab README files, ordinary Markdown, source `index.html` sites, or any generated README-based homepage or lab index.
- Generate all files in a separate build directory. Never rewrite, move, or delete original lab files.
- Fail the build if no valid Marp presentations are found or any eligible presentation fails to render.
- Upload only the generated output directory as the Pages artifact.

## 3. GitHub Actions

Configure `.github/workflows/deploy-pages.yml` to:

1. Run automatically on pushes to the configured branch when lab content or deployment configuration changes.
2. Support manual runs with `workflow_dispatch`.
3. Check out the repository, install pinned Marp CLI and front-matter parsing tools, discover and render eligible presentations, and validate the output.
4. Upload with `actions/upload-pages-artifact` and deploy with `actions/deploy-pages`.

Use least-privilege permissions (`contents: read`, `pages: write`, and `id-token: write`), the `github-pages` environment, and deployment concurrency. Keep the existing configured branch unless the user requests otherwise.

## 4. Validation and Reporting

Before reporting success:

- Verify each published HTML file corresponds to a valid source presentation with `marp: true`.
- Verify all required local assets are present and the artifact has no source Markdown, README, unrelated HTML, `.agent/`, `.git/`, homepage, or lab index.
- Report every included presentation and excluded lab with the reason for exclusion.
- Give the URL structure as `https://<owner>.github.io/<repository>/<lab-directory>/<presentation-name>.html`.
- Distinguish successful local validation from remote deployment. Never claim publication without verifying the GitHub Actions run or live URL.

## 5. Working Rules

- Inspect existing workflows before changing them; do not overwrite unrelated configuration.
- Preserve original files and repository structure.
- Do not push changes or modify remote settings without the user's confirmation.
- Explain changed files, validation results, and remaining limitations.
