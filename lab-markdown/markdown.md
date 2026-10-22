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
    font-size: 25px;
  }
  section.light {
    background: #f5f8fc;
    color: #202b3c;
  }
  h1, h2, h3 {
    font-family: "Segoe UI", Arial, sans-serif;
    color: #56c2d6;
  }
  section.light h1,
  section.light h2,
  section.light h3 {
    color: #1769aa;
  }
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 1.3em;
  }
  strong {
    color: #73d6bd;
  }
  section.light strong {
    color: #1769aa;
  }
  code {
    background: #26354a;
    color: #a9e5f0;
    padding: 2px 6px;
    border-radius: 4px;
  }
  section.light code {
    background: #e5edf6;
    color: #143b5d;
  }
  pre {
    border: 1px solid #34455c;
    border-radius: 8px;
    font-size: 0.72em;
  }
  section.light pre {
    border-color: #d2deeb;
  }
  a {
    color: #73d6bd;
  }
  section.light a {
    color: #1769aa;
  }
  table {
    font-size: 0.78em;
  }
  th {
    background: #26354a;
  }
  section.light th {
    background: #e5edf6;
  }
  blockquote {
    border-left: 5px solid #56c2d6;
    padding-left: 1em;
  }
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

Markdown is a lightweight markup language for writing structured, readable text. It is commonly used for project documentation, notes, issues, and learning materials.

In this lab, you will practice how to:

- Organize content with headings and lists.
- Add emphasis, links, quotes, and code.
- Create tables, task lists, and images.
- Use HTML when a Markdown feature is not enough.

---

<!-- _class: light -->

## Problems Encountered

| Common pitfall | What can go wrong |
| :--- | :--- |
| Skipping heading levels | The document outline becomes confusing. |
| Forgetting blank lines | Some renderers may combine nearby blocks unexpectedly. |
| Using the wrong link or image path | The destination or image cannot be found. |
| Mismatching code fences | Markdown inside the example is rendered instead of displayed. |
| Assuming every renderer supports the same features | Task lists or embedded HTML may look different. |

---

## Solutions Implemented

| Pitfall | Reliable practice |
| :--- | :--- |
| Unclear heading hierarchy | Start with `#` and add heading levels in order. |
| Blocks run together | Leave a blank line between paragraphs, lists, and other blocks. |
| Broken destinations | Use a descriptive label and verify the relative path or URL. |
| Code example renders as content | Wrap examples in matching triple-backtick fences and name the language. |
| Renderer differences | Preview the file in its target platform and check its Markdown support. |

---

## Headings and Paragraphs

Use `#` characters to create headings. More `#` characters mean a lower-level heading. Leave a blank line between separate paragraphs.

```markdown
# Page title
## Section
### Subsection

This is the first paragraph.

This is a second paragraph.
```

Use headings in order to make the content easier to scan and navigate.

---

<!-- _class: light -->

## Lists

Use `-`, `*`, or `+` for unordered lists. Numbered lists use a number followed by a period.

```markdown
- Collect the requirements
- Write the content
  - Review the examples

1. Create a file named `README.md`.
2. Add headings and content.
3. Preview the rendered result.
```

Indent nested items consistently so their relationship stays clear.

---

## Emphasis, Inline Code, and Links

```markdown
**Bold text**
_Italic text_
**_Bold and italic text_**

Use `inline code` for a command, file name, or short value.

[Markdown Guide](https://www.markdownguide.org/)
```

Use link text that explains where the link goes instead of labels such as “click here.”

---

<!-- _class: light -->

## Quotes and Code Blocks

Start a quote with `>`. Use triple backticks for a multi-line code block, and specify its language for clearer presentation.

> Markdown keeps the source readable while adding useful structure.

```javascript
const greeting = "Hello, Markdown!";
console.log(greeting);
```

Use inline code for short snippets and fenced blocks for examples that span multiple lines.

---

## Tables and Task Lists

```markdown
| Topic | Status |
| :--- | :---: |
| Headings | Done |
| Links | In progress |

- [x] Create the document
- [ ] Check the rendered preview
```

The `x` marks a completed task. Task-list rendering depends on the Markdown platform.

---

<!-- _class: light -->

## Images, HTML, and Separators

Add an image with alternative text and a path to the image:

```markdown
![A descriptive caption](images/example.png)
```

Some Markdown renderers allow HTML for features such as collapsible details:

```html
<details>
  <summary>Show more</summary>
  Additional information goes here.
</details>
```

In Marp, a line containing three hyphens (`---`) separates slides. In ordinary Markdown documents, it can render as a horizontal rule.

---

## Practice Checklist

- [ ] Create a Markdown file.
- [ ] Add a title, sections, and paragraphs.
- [ ] Include a list, a link, and a code example.
- [ ] Add a table and a task list.
- [ ] Preview the file and correct any broken paths or formatting.

Markdown features can vary by platform, so always check the rendered document where it will be published.
