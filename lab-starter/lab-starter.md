---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: Arial, sans-serif;
    background: #101827;
    color: #e8eef7;
    padding: 48px 64px;
    font-size: 28px;
  }
  section.light {
    background: #f5f8fc;
    color: #202b3c;
  }
  h1, h2 { color: #56c2d6; }
  section.light h1, section.light h2 { color: #1769aa; }
  strong { color: #73d6bd; }
  section.light strong { color: #1769aa; }
  pre { font-size: 0.75em; }
---

# Lab-Starter

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

This lab prepares a Windows development workspace for web projects.

- Track project changes with Git.
- Find hidden files and full file extensions.
- Use VS Code extensions for TODOs and HTML previews.

---

<!-- _class: light -->

## Problems Encountered

The lab identifies common setup challenges:

- Git is not tracking project changes yet.
- Hidden files or file extensions are not visible.
- TODO comments and HTML changes are harder to find or preview.

---

## Solutions Implemented

- Initialize Git in the project folder.
- Enable hidden items and file extensions in File Explorer.
- Use Better Todo Tree to browse TODO comments.
- Use Live Server to preview static HTML.

---

<!-- _class: light -->

## Initialize Git

Open the project folder in VS Code, then choose **Source Control → Initialize Repository**.

Or run this in the project directory:

```bash
git init
```

Git tracks changes; commits save project snapshots.

---

## Show hidden files

In File Explorer:

1. Press `Win + E`.
2. Select **View → Show**.
3. Enable **Hidden items**.

This reveals files such as `.gitignore`.

---

<!-- _class: light -->

## Show file extensions

In File Explorer, select **View → Show → File name extensions**.

Check the complete name, for example:

```text
README.md
```

This helps distinguish it from `README.md.txt`.

---

## Find TODO comments

Open Extensions with `Ctrl + Shift + X`, then install **Better Todo Tree** by FanaticPythoner.

Add task markers to source comments:

```js
// TODO: add input validation
// FIXME: correct this error
```

Select an item in the extension view to jump to its line.

---

<!-- _class: light -->

## Preview static HTML

In Extensions (`Ctrl + Shift + X`), install **Live Server** by Ritwick Dey, then:

1. Open the folder containing `index.html`.
2. Select **Go Live** in the VS Code status bar.
3. Save an edit and inspect the browser preview.

Live Server serves static files; it does not execute PHP.
