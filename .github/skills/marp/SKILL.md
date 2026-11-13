---
name: marp
description: "Write, structure, and fix Marp presentations in Markdown with readable slides and valid front matter."
---

# Marp presentations

Use this skill to create or modify a Marp presentation file (`.md`).

## Structure

- Start with valid YAML front matter with `marp: true`, a theme, pagination, and the `16:9` format.
- Separate each slide with `---`.
- For a lab, follow this order:
  1. Lab title and identification of the student and supervisor.
  2. Presentation outline.
  3. Introduction and technical stack.
  4. Definitions of key concepts.
  5. Real problem provided by the student.
  6. Solution and demonstrations; add practical slides if needed.
- For a lab plan, use the sections: Introduction & Technical Stack, Definitions, Problem, Solution.
- Do not add a conclusion or thank-you message; end with the solution or deliverable.

## Accuracy and content

- Write in English and adapt the content to the lab sources.
- Do not invent the student’s problem or solution. Ask for this information before drafting the corresponding slides; otherwise, leave explicit placeholders to complete.
- For a technical lab, include a Quick Start and a functional Hello World. Declare the language for each code block and verify that the commands and examples match the real environment.
- Clearly explain technical terms; do not assume the audience already knows them.

## Readability

- Maintain a consistent visual hierarchy, sufficient contrast, and an appropriate amount of text on each slide.
- Alternate dark and light slides when the theme allows it; use `<!-- _class: light -->` for a light slide.
- Declare the language for code blocks (`bash`, `php`, `html`, etc.) and align Markdown table columns explicitly.