---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 28px;
    padding: 48px 64px;
    background: #101827;
    color: #e8eef7;
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

# Git & GitHub

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

Git records changes to files; GitHub hosts Git repositories and supports collaboration.

- Learn the working tree, staging area, and commits.
- Practice common Git commands and branches.
- Understand how local work connects to a remote repository.

---

<!-- _class: light -->

## Problems Encountered

A specific technical incident is not reported in this presentation.

The lab focuses on learning how to track changes, restore history, and collaborate using Git and GitHub.

---

## Solutions Implemented

- Use commits to record project snapshots.
- Use branches to isolate feature work.
- Use GitHub remotes to share and synchronize commits.

---

<!-- _class: light -->

## Git project states

- **Working directory:** files being edited.
- **Staging area:** changes selected for the next commit.
- **Repository:** committed history and project data.

---

## Configure Git identity

Check Git, then set the name and email used in commits:

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list
```

Use the email associated with your Git hosting account if needed.

---

<!-- _class: light -->

## Record a change

```bash
git status
git add README.md
git commit -m "docs: update README"
```

Stage specific files when possible; inspect `git status` before committing.

---

## Inspect history and changes

```bash
git diff
git log
```

- `git diff` shows unstaged changes.
- `git log` displays commit history.
- `git status` summarizes repository state.

---

<!-- _class: light -->

## Create a feature branch

```bash
git switch -c feature/navbar
```

Work and commit on the feature branch before merging it into the target branch.

---

## Merge a branch

After switching to the branch that should receive the work:

```bash
git switch main
git merge feature/navbar
```

Resolve any reported conflicts before continuing.

---

<!-- _class: light -->

## Connect to GitHub

- `git clone <url>` copies a remote repository locally.
- `git remote -v` lists configured remotes.
- `git push` publishes local commits.
- `git pull` fetches and integrates remote changes.

---

## À retenir

- Git tracks project history on your computer.
- GitHub hosts repositories and supports collaboration.
- Small commits and focused branches make changes easier to review.
