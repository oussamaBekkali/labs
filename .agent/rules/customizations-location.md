---
name: customizations-location
description: Enforce that all rules and skills must reside exclusively in the .agent/ directory.
trigger: always_on
---

# Rule: Customizations Location

## Directive
- All workspace rules and skills must strictly be placed and managed inside the `.agent/` directory at the workspace root.
- Permitted paths:
  - Rules: `.agent/rules/<rule-name>.md`
  - Skills: `.agent/skills/<skill-name>/skill.md`
- Never create rules or skills in standalone `AGENTS.md`, `GEMINI.md`, `.agents/`, or any other directory outside `.agent/`.
