
---
name: github-deployment
description: Deploy individual Marp presentations, Markdown documents, or static HTML labs from a repository to GitHub Pages. Configure GitHub Actions, preserve the existing folder structure, and validate the published output. Use when the user requests hosting, publishing, or deployment automation.
---

# GitHub Deployment Skill

## Purpose

Deploy individual labs from a repository containing multiple projects.

Supported lab types:
- Marp presentations written in Markdown.
- Ordinary Markdown documents.
- Static HTML websites using `index.html`, CSS, JavaScript, and assets.

Use GitHub Pages and GitHub Actions. Preserve the existing project structure.

## 1. Analyze the Repository

Before making changes:

1. Inspect the repository structure.
2. Identify the lab the user wants to deploy.
3. Determine whether it is a Marp presentation, ordinary Markdown document, or HTML website.
4. Inspect existing `.github/workflows/` files.
5. Check the target lab's files and required assets.
6. Ask which lab to deploy if the target is ambiguous.

Never assume the repository root is the target.

## 2. Deployment Strategy

Prefer GitHub Actions for labs inside subfolders.

Create or update a workflow in:

`.github/workflows/deploy-pages.yml`

The workflow must publish only the selected lab, not the entire repository.

Preserve all original lab folders and filenames. Use a temporary output directory for generated deployment files.

Configure deployment to run:
- When changes are pushed to the configured branch.
- Manually through `workflow_dispatch`, when appropriate.

Avoid duplicate workflows and inspect existing configuration before modifying it.

## 3. Handle Each Lab Type

### A. Marp Presentation

Identify a Marp presentation using its front matter and Marp directives, such as `marp: true`.

1. Locate the intended Markdown presentation.
2. Install or invoke the Marp CLI through the workflow.
3. Convert the presentation to HTML.
4. Include the required presentation assets and themes.
5. Publish the generated HTML as the website entry point.

Use the official Marp CLI and follow its supported command-line options.

If a lab contains several presentations, ask which one to publish.

Do not publish the Markdown source as a substitute for the rendered presentation.

### B. Ordinary Markdown Document

For a Markdown document that is not a Marp presentation:

1. Convert the Markdown into HTML.
2. Include a simple, readable HTML document structure.
3. Preserve headings, lists, links, code blocks, tables, and other supported Markdown formatting.
4. Include basic styling for readability.
5. Publish the resulting HTML as `index.html`.

Use a reliable Markdown-to-HTML converter, such as Marked, and escape or sanitize untrusted HTML appropriately.

Do not treat every `.md` file as a Marp presentation.

If several Markdown files exist, identify the intended document rather than choosing arbitrarily.

### C. HTML Website

For a lab containing `index.html`:

1. Copy the target website's deployable files to the output directory.
2. Preserve the relative paths of CSS, JavaScript, images, fonts, and other required assets.
3. Include only the files needed to run the website.
4. Exclude unrelated labs, `.git/`, `.agent/`, and development-only files.
5. Verify that `index.html` exists at the root of the deployment output.

Do not rebuild or convert an existing HTML website unnecessarily.

## 4. GitHub Pages Compatibility

The deployed site must work at a GitHub Pages project URL, which commonly has the form:

`https://<owner>.github.io/<repository>/`

Check for:
- Absolute paths that break under the repository subpath.
- Broken relative links and asset references.
- Links between lab pages that point to unpublished content.
- Missing images, stylesheets, scripts, or generated files.
- Routes that depend on a server.

Do not assume the repository root is the website root.

## 5. Workflow Requirements

The GitHub Actions workflow must:

1. Check out the repository.
2. Set up any required runtime.
3. Install or invoke the tools needed for the selected lab type.
4. Generate the deployment output in a temporary directory.
5. Validate the generated output.
6. Upload the output using `actions/upload-pages-artifact`.
7. Deploy it using `actions/deploy-pages`.

Use stable versions of the official GitHub Pages actions and follow their documentation.

Apply least-privilege permissions, including the permissions required for Pages deployment and OIDC authentication.

Configure the `github-pages` environment and appropriate deployment concurrency.

Do not invent build commands or modify unrelated project files.

## 6. GitHub Pages Setup

Explain the required GitHub settings:

1. Open the repository on GitHub.
2. Navigate to Settings → Pages.
3. Set the publishing source to GitHub Actions.
4. Push the workflow to the configured branch.
5. Open the Actions tab and inspect the workflow run.
6. Verify the deployment and open the published URL.

Do not claim the site is published until its deployment status or URL has been verified.

## 7. Validation and Troubleshooting

Check:
- The selected lab exists.
- The correct file is selected.
- Marp presentations render to HTML.
- Ordinary Markdown documents convert to readable HTML.
- HTML websites retain their required assets.
- `index.html` exists at the deployment output root.
- The workflow YAML is valid.
- The workflow deploys only the selected lab.
- Relative links work under the GitHub Pages URL.
- No secrets or unrelated files are published.

When deployment fails, inspect the actual error and fix the smallest confirmed cause.

Clearly distinguish local checks from a successful remote deployment.

## 8. Working Rules

- Keep solutions simple and suitable for a student learning web development.
- Preserve the existing repository and lab structure.
- Explain each file created or modified.
- Avoid unnecessary dependencies and configuration.
- Never delete or relocate unrelated labs.
- Never overwrite an existing workflow without inspecting it.
- Never commit secrets or credentials.
- Ask before destructive changes or significant side effects.
- Do not claim to have pushed code, changed GitHub settings, or deployed a site without actually doing so.

## 9. Final Response

After completing the configuration, report:

1. Which lab was selected.
2. Its detected type.
3. The deployment method.
4. The files created or modified.
5. The required GitHub settings.
6. The expected or verified deployment URL.
7. Validation results and any remaining limitations.
