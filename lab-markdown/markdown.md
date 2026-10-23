---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: Inter, "Segoe UI", sans-serif;
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

# Lab Markdown

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

Markdown is a lightweight syntax for writing structured text.

- Organize documents with headings and lists.
- Add links, emphasis, quotations, and code.
- Create tables, task lists, and images.
- Preview documents in their target platform.

---

<!-- _class: light -->

## Problems Encountered

No specific blocking incident is reported.

The lab covers common pitfalls: confusing heading levels, missing spacing, broken paths, mismatched code fences, and renderer differences.

---

## Solutions Implemented

- Keep heading levels in a logical order.
- Separate Markdown blocks with blank lines.
- Verify links, image paths, and matching code fences.
- Preview the document in its target renderer.

---

<!-- _class: light -->

## Headings and paragraphs

Use additional `#` characters for lower heading levels.

```markdown
# Page title
## Section
### Subsection

First paragraph.

Second paragraph.
```

Blank lines separate paragraphs and improve source readability.

---

## Lists

Use hyphens for bullets and numbers for ordered steps.

```markdown
- Collect requirements
- Write the content
  - Review examples

1. Create a file.
2. Add sections.
3. Preview the result.
```

Indent nested items consistently.

---

<!-- _class: light -->

## Emphasis, code, and links

```markdown
**Bold** and _italic_

Use `inline code` for short commands or filenames.

[Markdown Guide](https://www.markdownguide.org/)
```

Choose link text that describes its destination.

---

## Quotes and code blocks

Start a block quote with `>`. Fence multi-line examples with backticks and a language.

```markdown
> A short quotation.
```

```javascript
const greeting = "Hello, Markdown!";
console.log(greeting);
```

---

<!-- _class: light -->

## Tables and task lists

```markdown
| Topic | Status |
| :--- | :---: |
| Links | Checked |
| Preview | Pending |

- [x] Create the document
- [ ] Check the rendered preview
```

Task-list rendering depends on the Markdown platform.

---

## Images and HTML

Provide descriptive alternative text and a valid image path:

```markdown
![A descriptive caption](images/example.png)
```

Some renderers support HTML for features such as collapsible details.

---

<!-- _class: light -->

## Separators depend on context

In Marp, a line containing three hyphens starts a new slide:

```markdown
## First slide

---

## Next slide
```

In ordinary Markdown, the same line may render as a horizontal rule.

---

## Practice checklist

- Create a Markdown file with headings and paragraphs.
- Add a list, link, code example, table, and task list.
- Check image and link destinations.
- Preview the document in its target platform.
