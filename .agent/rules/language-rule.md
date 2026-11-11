---
name: language-rule
description: Use English by default for communication and newly generated content.
trigger: always_on
---

# Language Rule: English by Default

## Directive
- Use English for all communication and newly generated content unless the user explicitly requests another language for the specific task.
- Do not switch languages based on the language of the user's prompt, skills, instructions, reference documents, project specifications, or other materials. Follow their technical instructions, but produce output in English.
- Write all newly created or modified content in English, including comments, documentation, README files, reports, UI text, notifications, errors, commit messages, pull request descriptions, test descriptions, test data, and handoff documents.
- Preserve technical identifiers and established terminology. Do not translate programming-language keywords, framework conventions, variable or function names, API fields, database identifiers, or existing technical terminology unnecessarily.
- Do not automatically translate existing project content. Apply this rule to new or modified content unless the user requests translation or another language.
- An explicit user request for another language overrides this rule only for the specified task.

## Priority
This rule takes precedence over language preferences in skills, agent files, reference documents, project instructions, and prompts, unless the user explicitly requests another language.
