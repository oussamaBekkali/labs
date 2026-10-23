---
name: lab-adaptation
description: Create professional Marp presentations from lab deliverables. Prioritize readable slides, concise content, short code examples, and automatic content splitting to prevent overcrowding and text overflow.
---

# Lab Adaptation Skill

## Purpose

Transform lab instructions, exercises, and implementation details into clear, professional Marp presentations.

The priority is **readability, visual clarity, and technical accuracy**, not fitting as much information as possible onto each slide.

Never create overcrowded slides. Use additional slides whenever necessary.

## 1. Mandatory Slide Structure

Every presentation must follow this order.

### Slide 1: Title

- Display only the lab name.
- Do not include author names, student IDs, organization names, or extra subtitles unless explicitly requested.

### Slide 2: Lab Plan

Use this exact agenda:

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

### Slide 3: Introduction

- Explain the purpose of the lab.
- State its main objective.
- Introduce the essential technologies or concepts.
- Keep the content short and relevant.

### Slide 4: Problems Encountered

- Describe actual technical problems reported or supported by the available lab material.
- Explain each problem briefly.
- Never invent errors or claim that a problem occurred without evidence.
- If no problems were reported, state that no blocking problems were reported.

### Slide 5: Solutions Implemented

- Present the actual solutions and fixes.
- Connect solutions to their corresponding problems when applicable.
- Keep explanations concise.
- Do not invent implementation details.

### Subsequent Slides: Practical Implementation

- Explain the implementation in a logical sequence.
- Include commands, code, diagrams, tables, or screenshots when useful.
- Give each slide one main idea or closely related group of ideas.
- Split long implementations across multiple slides.
- Preserve essential technical details without overcrowding the presentation.

## 2. Strict Slide-Density Rules

These rules are mandatory and take priority over fitting content onto fewer slides.

### Rule 1: One Main Idea Per Slide

Each slide must communicate one main idea.

Do not combine unrelated concepts, multiple implementation steps, or several large code examples on the same slide.

If a topic contains multiple steps, give each step its own slide when necessary.

### Rule 2: Never Allow Text Overflow

All text and code must fit comfortably within the slide boundaries.

- Never allow text to extend beyond the slide.
- Never allow code blocks to be cut off.
- Never allow headings, tables, lists, or diagrams to overflow.
- Leave sufficient space around all content.
- Do not place content too close to the bottom or edges.
- Account for the space occupied by headings, footers, and slide numbers.

If content does not fit, split it into additional slides immediately.

### Rule 3: Use Concise Text

- Prefer short sentences and bullet points.
- Explain only what is necessary to understand the current slide.
- Remove repetition and unnecessary introductions.
- Avoid long paragraphs.
- Do not copy entire sections of documentation onto slides.
- Preserve important facts, commands, implementation steps, and technical explanations.

As a general guideline, aim for **3–5 concise bullet points per slide**, with approximately 6–12 words per bullet.

These are guidelines, not limits that justify removing essential information. Use fewer bullets when the content is complex.

### Rule 4: Control the Amount of Content

Use these starting guidelines for a 16:9 presentation:

- **Title slides:** One title only.
- **Text slides:** Approximately 20–40 words.
- **Explanation slides:** Approximately 30–50 words when the layout allows.
- **Code slides:** One short, focused example.
- **Table slides:** Only the rows and columns needed to explain the concept.

These are approximate targets, not mandatory word counts.

Never force content to fit these limits if a different layout is needed. Instead, split complex material into additional slides.

### Rule 5: Never Shrink Text to Force Content to Fit

Do not solve overcrowding by:

- Reducing font sizes excessively.
- Compressing line spacing.
- Removing necessary margins.
- Using extremely narrow content areas.
- Filling every available part of the slide.
- Hiding or clipping content.

Use a readable font size appropriate for presentation viewing. As a starting point, use approximately 28–36 pt for body text and 36–48 pt for headings.

If the content does not fit at a readable size, create another slide.

### Rule 6: Split Long Code Examples

Code must remain readable and understandable.

- Include only the lines necessary to explain the current concept.
- Never squeeze a complete large file onto one slide.
- Divide long code into logical sections across multiple slides.
- Keep related code together.
- Include the filename when it helps identify the file being explained.
- Explain the purpose of each code section briefly.
- Preserve correct syntax and the essential implementation.

For example, a Laravel lab may use separate slides for:

1. Creating a route.
2. Creating a controller.
3. Passing data to a view.
4. Displaying the data in Blade.

Do not place all four implementations on one slide merely to reduce the slide count.

### Rule 7: Split Large Lists and Tables

- Divide long lists across multiple slides.
- Split large tables into logical groups.
- Repeat column headings when a table continues on another slide.
- Avoid tiny text in tables.
- Do not remove important rows merely to fit the slide.

### Rule 8: Prefer More Slides Over Overcrowding

There is no fixed maximum number of slides unless the user specifies one.

A presentation with 15 readable slides is preferable to a presentation with 7 overcrowded slides.

Do not sacrifice readability to minimize the slide count.

## 3. Marp Configuration

Every presentation must be a valid Marp Markdown file.

Use this configuration as a starting point:

---

marp: true
theme: default
paginate: true
size: 16:9

---

Use custom CSS only when it improves readability and remains compatible with Marp.

### Slide Separators

- Use `---` between slides.
- Keep the YAML frontmatter at the beginning of the file.
- Do not confuse frontmatter delimiters with slide separators.
- Ensure code fences are properly opened and closed.

### Light and Dark Slides

Alternate between dark and light slides when appropriate.

Use:

<!-- _class: light -->

immediately after a slide separator to apply the light class.

Ensure that the selected theme or custom CSS actually defines the intended light appearance.

Do not alternate backgrounds at the expense of readability or visual consistency.

## 4. Typography and Visual Design

- Use clear, readable headings.
- Use a consistent sans-serif font for body text.
- Maintain strong contrast between text and background.
- Keep spacing and alignment consistent.
- Use diagrams when they explain a process more clearly than text.
- Use tables only when comparing related information.
- Avoid decorative elements that compete with the content.
- Keep layouts simple and professional.
- Ensure slides remain readable on a projector or shared screen.

### Code Formatting

Always specify the language in fenced code blocks.

Examples:

```php
<?php

echo "Hello World";
```

```bash
php artisan serve
```

```javascript
console.log("Hello World");
```

Use syntax highlighting where supported.

## 5. Technical Accuracy

- Follow the provided lab instructions and actual implementation.
- Preserve the specified technologies and workflow.
- Use correct commands, filenames, and syntax.
- Do not invent completed steps, errors, test results, or solutions.
- Do not replace the requested technology without permission.
- If information is missing, avoid presenting assumptions as facts.
- Simplify explanations without changing the technical meaning.

## 6. Single Deliverable File

- Keep the complete presentation in the designated lab Markdown file.
- Use a filename such as `lab-<topic>.md`.
- Integrate practical examples directly into the presentation.
- Do not create separate exercise or companion Markdown files.
- Modify the existing lab presentation when one is already designated.

## 7. Git Operations

- Do not ask unnecessary Git questions when the task is clear.
- Do not perform redundant repository inspections.
- Commit and push only when explicitly requested.
- Never claim that a commit or push succeeded unless it actually did.

## 8. Mandatory Final Review

Before finishing, review every slide individually.

### Structure

- [ ] Slide 1 contains only the lab name.
- [ ] Slide 2 contains the required Lab Plan.
- [ ] Slide 3 introduces the lab and its objectives.
- [ ] Slide 4 describes problems accurately.
- [ ] Slide 5 explains the solutions implemented.
- [ ] Subsequent slides explain the practical implementation in order.

### Readability and Overflow

- [ ] Every slide communicates one main idea.
- [ ] No slide contains excessive text.
- [ ] No slide contains unnecessary repetition.
- [ ] All text fits within the slide boundaries.
- [ ] All code is readable and fully visible.
- [ ] Tables and diagrams fit within their available space.
- [ ] Font sizes remain appropriate for presentation viewing.
- [ ] Content has been split into additional slides wherever necessary.
- [ ] No content has been squeezed onto a slide merely to reduce the slide count.

### Technical Quality

- [ ] The file uses valid Marp Markdown.
- [ ] YAML frontmatter and slide separators are correct.
- [ ] Code blocks specify their languages.
- [ ] Commands and code are technically accurate.
- [ ] Essential implementation details are preserved.
- [ ] No unsupported problems, results, or solutions have been invented.

### Final Requirement

**Never finish a presentation with known slide overflow or unreadable content.**

When a slide is overcrowded, rewrite it more concisely or divide it into multiple slides.

When possible, render the presentation and inspect the resulting slides. Fix any visible overflow, clipping, or readability problems before declaring the presentation complete.
