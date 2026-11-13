---
name: lab-creator
description: "Create or adapt lab deliverables from a README and a generic plan. Use this to prepare the content of a lab and its presentation plan."
---

# Lab creation

This skill orchestrates the preparation of lab deliverables. For presentation formatting, also apply the `marp` skill. To create a file structure or a skill, apply the `skill-creator` skill.

## Rules

- Keep the existing lab title/slug unchanged, in `lab-*` format. Do not replace it with a reformulated title.
- **Role on the README:** Do not generate or invent the `README.md` from scratch. The user provides the raw content (notes, objectives, context). The AI reads it, synthesizes it, and restructures it without distorting its intentions.
- **Required structure of `README.md` (3 parts):**
  1. `## 1. Need for the technical project`: the concrete problem to solve, why this lab is necessary, and what it adds to the project.
  2. `## 2. Concepts and techniques to learn`: key concepts explained simply with mini concrete examples in parentheses.
  3. `## 3. Expected outcome`: write the precise prompt intended for the AI to generate the practical examples for the lab (format, expected content, storyline, and constraints), instead of listing files already created.
- **README writing style:**
  - **Compact:** direct, concise bullet lists with no long, verbose blocks of text.
  - **Easy to understand:** clear, accessible, simplified language that avoids heavy academic jargon for immediate comprehension.
- Read the lab README and the generic plan available. If a `template-plan.md` file is missing, search for the generic plan in the workspace and use it without pretending it has another name.
- Put the Marp presentation plan in `presentation.md`; do not duplicate or propose it in the README.
- Write in English and adapt this presentation order to the objectives and concepts in the lab:
  1. Title and student/supervisor identification.
  2. Presentation outline.
  3. Introduction and technical stack, including each tool's purpose.
  4. Definitions of the key concepts.
  5. Problem and need.
  6. Solution and implementation, with relevant examples or demonstrations.
- For a general learning need, derive the problem and solution only from the provided lab objectives and project context. Never present these as the student's personal experience or chosen solution. If a personal problem or solution is expected but missing, ask “What concrete problem are you facing?” and “What solution do you propose?”; otherwise leave explicit placeholders.
- For a technical lab, include a Quick Start and an executable Hello World; verify that the commands and versions match the project.
- Use a valid Marp front matter with `marp: true`, a theme, pagination, and `size: 16:9`. Separate slides with `---`; alternate readable dark and light slides when appropriate and declare code-block languages.
- Do not add a conclusion or thank-you slide; end with the solution, implementation, or practical deliverable.
- Do not run Git commands if the user forbids it.


