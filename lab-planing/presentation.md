---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 26px;
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
  code { font-size: 0.75em; }
---

# lab-planing

**Student:** To be completed
**Supervisor:** To be completed

A simple structure for technical lab presentations.

---

<!-- _class: light -->

## Presentation outline

1. Title and identification
2. Technical stack
3. Definitions
4. Problem and need
5. Solution and implementation
6. Practical example

---

## Introduction & Technical Stack

- Goal: create a common format for all labs in this project.
- Tools: Markdown + Marp for readable slide decks.
- Export: HTML output for sharing and review.
- Why it matters: a consistent structure improves understanding and evaluation.

---

## Definitions

- **Outline:** the ordered structure of the presentation.
- **Technical stack:** the tools and technologies used in the lab.
- **Problem:** the reason the lab exists or the issue it addresses.
- **Solution:** the method or approach used to solve the problem.

---

## Problem

A lab without a clear structure is harder to follow:

- content feels scattered;
- sections are less predictable;
- learners struggle to compare different labs.

This is a general teaching need for the project, not a personal story.

---

<!-- _class: light -->

## Solution

Use one reusable template for each lab:

- title slide;
- outline;
- technical stack;
- definitions;
- problem;
- solution;
- practical example.

This keeps the presentation professional and easy to repeat.

---

## Hello, Marp!

```markdown
# Hello, Marp!
## lab-planing
```

Render the deck with:

```bash
npx @marp-team/marp-cli@4.2.3 presentation.md --html -o presentation.html
```

This confirms the presentation file is valid and ready to review.
