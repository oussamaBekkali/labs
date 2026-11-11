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

# Discover Marp

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

Marp turns Markdown files into presentations.

- Structure slides and headings.
- Add code, images, and styles.
- Preview and export the deck.

Tools: Marp Core, Marp CLI, and the Marp extension for VS Code.

---

<!-- _class: light -->

## Problems Encountered

No blocking incident is reported for this lab.

The material highlights common risks: dense content, poorly sized images, misunderstood directives, and weak contrast.

---

## Solutions Implemented

The lab teaches practical safeguards:

- Split ideas across multiple slides.
- Scale images to their purpose.
- Separate global and local directives.
- Check contrast and rendering before sharing.

---

<!-- _class: light -->

## Marp file anatomy

- YAML front matter configures the deck.
- `marp: true` enables rendering.
- `---` separates slides.
- Slide content stays in Markdown.

---

## Configure the front matter

```yaml
---
marp: true
theme: default
paginate: true
size: 16:9
---
```

Add a theme, pagination, and desired formatting.

---

<!-- _class: light -->

## Separate slides

A `---` line starts a new slide:

```markdown
## First idea

Content of the first slide.

---

## Next idea
```

Clear separators also improve source readability.

---

## Structure titles

```markdown
# Main title
## Slide title
### Subsection
```

Keep a consistent hierarchy and one clear idea per slide.

---

<!-- _class: light -->

## Keep lists concise

- Use bullets for related points.
- Use numbered lists for steps.
- Split long lists rather than shrinking text.
- Limit each slide to one main idea.

---

## Add code

Specify the language for syntax highlighting.

```javascript
const message = "Hello";
console.log(message);
```

Show only the lines needed for the explanation.

---

<!-- _class: light -->

## Size images correctly

Marp accepts image sizing attributes:

```markdown
![w:450px](images/schema.png)
![h:300px](images/capture.png)
```

Adjust image size to the available slide space.

---

## Use a background image

```markdown
![bg](images/background.jpg)
```

A background can also occupy part of the slide:

```markdown
![bg right:35%](images/illustration.jpg)
```

Keep text readable over the chosen background.

---

<!-- _class: light -->

## Global and local directives

Global directives set values for following slides:

```markdown
<!-- paginate: true -->
<!-- theme: gaia -->
```

A directive prefixed with `_` applies to the current slide:

```markdown
<!-- _class: invert -->
```

---

## Customize a theme

The front matter can include CSS rules.

```yaml
style: |
  section {
    font-family: Arial, sans-serif;
  }
  h1 {
    color: #1769aa;
  }
```

Use a few styles and keep contrast strong.

---

## Key takeaway

Marp works best when the file is simple, structured, and readable.

- Clear headings
- Short lists
- Focused code blocks
- Controlled styling

<!-- _class: light -->

## Preview in VS Code

The **Marp for VS Code** extension lets you edit Markdown and preview slides.

- Check the rendering after changes.
- Detect overflow and overly dense text.
- Verify image paths and relative references.

---

## Export with Marp CLI

Install the tool if needed:

```bash
npm install -g @marp-team/marp-cli
```

Export to HTML, PDF, or PowerPoint:

```bash
marp lab-marp.md --html -o lab-marp.html
marp lab-marp.md --pdf --allow-local-files -o lab-marp.pdf
marp lab-marp.md --pptx -o lab-marp.pptx
```

---

<!-- _class: light -->

## Live preview with reload

Serve the folder and watch for source changes:

```bash
marp -s -w .
```

The CLI refreshes the preview when the source changes.

---

## Key takeaway

- Marp keeps presentations editable in Markdown.
- Focused slides improve readability.
- Previewing helps catch layout issues early.
- Choose an export format that matches your delivery method.
