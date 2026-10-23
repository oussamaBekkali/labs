---
name: github-deployment
description: "Configure or update GitHub Pages deployment for Marp labs. Discover every lab Markdown file with valid YAML front matter containing marp: true, render all eligible presentations, and generate a homepage from the root README."
---

# GitHub Deployment Skill

## Purpose

Build and publish a GitHub Pages site containing the root README homepage and every valid Marp presentation in the repository's lab directories. Do not deploy ordinary Markdown documents or standalone HTML lab websites.

## 1. Inspect Before Changing

1. Inspect the repository structure, current branch, worktree, root `README.md`, and every file in `.github/workflows/`.
2. Identify top-level lab directories (currently named `lab-*`) and inspect their Markdown front matter.
3. Treat a Markdown file as eligible only when it has valid YAML front matter with the Boolean value `marp: true`.
4. Exclude ordinary Markdown, malformed or non-Marp front matter, HTML-only labs, `.agent/`, `.git/`, and development-only files.
5. Include every eligible presentation. If a lab contains multiple presentations, publish all of them and group them clearly on the homepage.
6. Preserve existing unrelated workflows and source files.

## 2. Build the Site

Use `.github/workflows/deploy-pages.yml` and `.github/scripts/build-pages.cjs` for the GitHub Actions build.

- Trigger deployment on pushes to the configured branch when the README, lab content, or build configuration changes, and support manual `workflow_dispatch`.
- Scan each top-level `lab-*` directory on every build; do not hard-code presentation filenames.
- Render every eligible presentation to HTML with the official Marp CLI.
- Generate `dist/index.html` from the root `README.md` without modifying the README. Retain local links only when their target is included in the published site; link to all eligible presentations using repository-relative URLs.
- Preserve local assets required by presentations and keep each presentation and its assets in a predictable, separate output path.
- Publish only `dist/`: the generated homepage, rendered presentation HTML, and required presentation assets. Do not copy ordinary Markdown, source `index.html` websites, `.agent/`, `.git/`, or unrelated files.
- Keep all generated and temporary files separate from source files. Fail the build if no valid presentations are found or an eligible presentation fails to render.

## 3. GitHub Pages Workflow

The workflow must:

1. Check out the repository and set up the required runtime.
2. Install pinned Marp CLI and Markdown/front-matter parsing tools.
3. Detect, render, and validate eligible presentations.
4. Upload only the generated output with `actions/upload-pages-artifact`.
5. Deploy with `actions/deploy-pages`.

Use least-privilege permissions (`contents: read`, `pages: write`, and `id-token: write`), the `github-pages` environment, and deployment concurrency. Keep the existing configured branch unless the user requests a change.

## 4. GitHub Pages Compatibility

- Use relative links so the site works at `https://<owner>.github.io/<repository>/`.
- Verify homepage links point only to generated presentations or the homepage; external links may remain.
- Resolve presentation asset paths relative to the rendered page and copy only required assets.
- Never publish original Markdown as a substitute for rendered slides.

## 5. Validation and Reporting

Before reporting success:

- Confirm each included source has valid YAML front matter with `marp: true` and has a non-empty rendered HTML output.
- Confirm ordinary Markdown files and HTML-only labs are excluded.
- Confirm `dist/index.html` is generated from the root README and lists only eligible labs/presentations.
- Confirm output contains no source Markdown, unrelated HTML websites, `.agent/`, `.git/`, or development-only files.
- Report included labs and their presentations, excluded labs with reasons, changed files, workflow triggers, and local validation results.
- Distinguish a successful local build from a completed remote deployment. Do not claim deployment until the GitHub Actions run or published URL has been verified.

## 6. Working Rules

- Preserve original lab files and repository structure.
- Inspect existing workflows before updating them; do not overwrite unrelated configuration.
- Do not push changes, modify remote settings, or claim to have deployed without the user's confirmation and actual verification.
- Ask before destructive changes or significant side effects.
- Explain each created or modified file and disclose remaining limitations.
