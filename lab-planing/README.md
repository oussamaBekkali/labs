# lab-planing

## 1. Need for the technical project

- This lab teaches how to create a simple, repeatable structure for presenting technical labs.
- The real problem is inconsistency: without a shared outline, each lab becomes harder to follow and harder to compare.
- The solution is a standard presentation flow that keeps slides organized, clear, and reusable across the project.
- This adds value to the technical project by making the teaching material more professional and easier for learners to understand.

Quick Start — from the `lab-planing` directory:

```powershell
node --version
npx @marp-team/marp-cli@4.2.3 presentation.md --html -o presentation.html
```

This command renders the deck to HTML so the presentation can be reviewed in a browser.

## 2. Concepts and techniques to learn

- **Presentation outline:** define a predictable order of slides so the audience can follow the lab easily. (Title → Outline → Technical Stack → Definitions → Problem → Solution)
- **Technical stack:** explain the tools and technologies used, and why they matter. (Markdown, Marp, HTML export)
- **Definitions:** simplify the key vocabulary for the audience. (What is a technical stack? What is a lab problem?)
- **Problem and solution framing:** separate the issue from the response. (Problem: inconsistent lab explanations; Solution: a standard lab template)
- **Marp formatting:** use front matter, slide separators, and contrast to create readable slides. (`marp: true`, `---`, light and dark sections)

## 3. Expected outcome

> Prompt for an AI:
>
> Create a short Marp presentation for a technical lab planning exercise in English. Use valid YAML front matter (`marp: true`, theme, pagination, `size: 16:9`), a clean layout, and a clear sequence of slides: title, outline, technical stack, definitions, problem, solution, and a short practical example. Keep the wording simple and professional. Mention the lab title `lab-planing`, the student name, and the supervisor name. Include a small “Hello, Marp!” example or slide to confirm the deck renders correctly. Keep the content generic and reusable for all labs in the project, and do not invent an individual student’s personal problem or solution. Validate the presentation with `npx @marp-team/marp-cli@4.2.3 presentation.md --html -o presentation.html`.
