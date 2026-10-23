---
name: lab-adaptation
description: Adapt lab deliverables into structured, professional Marp presentations while preserving technical accuracy, the required slide structure, and practical implementation details.
---

# Lab Adaptation Skill — Standard Marp Presentation Structure

## Purpose

Adapt and realize any lab deliverable into a consistent, modern Marp presentation while strictly preserving the required structural flow and technical accuracy.

## Mandatory Slide Structure

Every lab presentation must be in Marp format (`marp: true`) and follow this sequential slide structure.

### Slide 1: Title (Lab Name Only)

- **Content:** The title or name of the lab only.
- **Rule:** Never include author or presenter names, student IDs, organization names, or extra subheadings unless explicitly requested.

### Slide 2: Lab Plan

- **Content:** The agenda must follow this exact structure:

  ```markdown
  <!-- _class: light -->

  ## Lab Plan

  1. Introduction
  2. Problems Encountered
  3. Solutions Implemented
  ```

### Slide 3: Introduction

- Briefly explain the purpose, scope, and objectives of the lab based on its topic.
- List the key concepts, tools, technologies, or syntax practiced during the lab.
- Keep the content concise and relevant to the lab requirements.

### Slide 4: Problems Encountered

- Include concrete technical issues, obstacles, syntax pitfalls, or configuration challenges relevant to the lab.
- Use actual problems encountered during the lab whenever that information is available.
- Never invent problems or claim that an issue occurred without supporting information.
- If no incidents occurred or no problems were reported, explicitly state that no blocking technical problems were encountered or reported.

### Slide 5: Solutions Implemented

- Document the concrete solutions, fixes, and best practices applied to resolve problems or satisfy the lab requirements.
- Connect each solution to its corresponding problem whenever applicable.
- Ensure that the solutions are technically accurate and consistent with the implementation.

### Subsequent Slides: Practical Examples and Implementation

- Include practical code blocks, commands, syntax demonstrations, diagrams, or tables directly inside the Marp presentation.
- Keep explanations concise and make examples easy to understand.
- Use the actual technologies, commands, and code relevant to the lab.
- Do not create separate exercise or companion Markdown files.
- Integrate all practical deliverables and implementation examples into the designated lab presentation file.
- Organize the slides in a logical sequence that follows the actual lab workflow.
- Add slides as needed to explain the implementation without overcrowding individual slides.

## Marp Presentation and Design Standards

### 1. Always Use Marp

Every lab presentation must be a valid Marp Markdown file with YAML frontmatter.

Use this structure as a starting point:

```yaml
---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: Inter, system-ui, sans-serif;
  }

  h1, h2, h3 {
    font-family: Anton, Impact, sans-serif;
  }

  section.light {
    background: #ffffff;
    color: #222222;
  }
---
```

- Preserve the required `marp: true` setting.
- Use the default Marp theme unless another theme is explicitly requested.
- Enable slide numbers with `paginate: true`.
- Use the 16:9 aspect ratio.
- Keep custom CSS valid and compatible with Marp.
- Avoid unnecessary styling that reduces readability.

### 2. Slide Separators

- Use `---` between every slide.
- Ensure each slide has a clear purpose and heading where appropriate.
- Do not confuse Marp slide separators with YAML frontmatter delimiters.

### 3. Alternating Visual Rhythm

- Alternate between dark-background sections and light-background sections to maintain visual variety and readability.
- Use `<!-- _class: light -->` for slides that should use the light style.
- Apply the light class immediately after the slide separator and before the slide content.
- Keep text and backgrounds high contrast.
- Use consistent spacing, alignment, and visual hierarchy throughout the presentation.

### 4. Typography and Code

- Use clear headings with `Anton`, `Impact`, or a sans-serif fallback.
- Use `Inter`, `system-ui`, or a suitable sans-serif font for body text.
- Use readable font sizes and avoid overcrowding slides.
- Always declare the programming language in fenced code blocks.

Examples:

```html
<h1>Hello World</h1>
```

```javascript
console.log("Hello World");
```

```bash
php artisan serve
```

```php
<?php

echo "Hello World";
```

- Use proper Markdown table alignment when tables are necessary.

Example:

```markdown
| Feature | Description         | Status |
| :------ | :------------------ | :----: |
| Route   | Handles the request |  Done  |
| View    | Displays the page   |  Done  |
```

- Keep code examples short enough to fit on slides.
- If a code example is too long, divide it into logical parts across multiple slides without removing essential implementation details.

### 5. Visual Quality

- Maintain a professional, consistent presentation design.
- Use concise text instead of long paragraphs.
- Prefer lists, diagrams, tables, and code examples when they improve understanding.
- Use visual elements only when they support the lab's content.
- Avoid unnecessary decorative elements, excessive colors, and inconsistent formatting.
- Ensure that each slide remains readable when presented on a screen.

## Operational Guidelines

### 1. No Presenter Names

Keep the cover slide focused strictly on the lab topic.

Do not add student names, presenter names, student IDs, or organization names unless explicitly requested.

### 2. Single Deliverable File

- Keep all documentation, explanations, commands, and practical examples inside the designated lab presentation file.
- Use a filename such as `lab-<topic>.md`.
- Do not generate separate Markdown files for exercises or implementation examples.
- Modify the existing lab file when one is already designated.

### 3. Preserve Technical Accuracy

- Follow the supplied lab instructions and actual implementation.
- Do not invent completed steps, test results, errors, or solutions.
- Preserve the correct commands, syntax, filenames, and technology choices.
- If required information is missing, avoid presenting assumptions as facts.
- Do not replace the requested technology with another technology without permission.

### 4. Follow the Lab Workflow

- Organize content according to the actual sequence of work.
- Explain what each important command, file, or code block does.
- Keep explanations appropriate for the lab's learning objectives.
- Include only content that supports the lab requirements or helps explain the implementation.

### 5. Git Operations

- Do not ask unnecessary questions about Git when the task is already clear.
- When explicitly asked to commit and push, inspect only what is necessary to perform the requested operation safely.
- Avoid redundant inspection loops.
- Never claim that changes were committed or pushed unless the operation actually succeeded.
- Do not commit or push unless requested.

## Final Validation Checklist

Before finishing a lab presentation, verify the following:

- [ ] The file uses valid Marp Markdown and contains `marp: true`.
- [ ] Slide 1 contains only the lab name.
- [ ] Slide 2 contains the required Lab Plan.
- [ ] Slide 3 introduces the lab and its objectives.
- [ ] Slide 4 describes reported problems accurately.
- [ ] Slide 5 explains the solutions implemented.
- [ ] Subsequent slides contain practical examples and implementation details.
- [ ] All practical deliverables are included in the designated presentation file.
- [ ] Slide separators and code fences are correctly formatted.
- [ ] Code blocks specify their programming languages.
- [ ] The presentation follows the required visual and typography standards.
- [ ] The content is technically accurate and relevant.
- [ ] Slides are readable and not overcrowded.
- [ ] No unrequested presenter information or unrelated content has been added.
