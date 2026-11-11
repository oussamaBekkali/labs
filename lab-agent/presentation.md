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

# Create and Test Skills with AI Agents

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

**Objective:** create reusable skills that guide AI agents on a specific task.

- Define a clear scope and deliverable.
- Structure instructions into verifiable steps.
- Compare the same skill in Antigravity and GitHub Copilot for VS Code.

---

<!-- _class: light -->

## Problems Encountered

- No blocking technical issue is reported.
- Trials with Antigravity and Copilot are not documented.
- Their activation and results therefore remain to be verified.

---

## Solutions Implemented

The lab method defines how to design and evaluate a skill:

- Specify the trigger, scope, and expected output.
- Break the work into steps and verifiable criteria.
- Test the same task in both environments.
- Document differences before drawing conclusions.

**Status:** the tests remain to be performed.

---

<!-- _class: light -->

## Anatomy of a Skill

A skill groups reusable instructions for a targeted task.

- **Metadata:** identify the skill.
- **Objective:** describe the task to be completed.
- **Rules and workflow:** guide execution.
- **Validation:** verify the produced result.

---

## Examples in the repository

- `.agent/skills/lab-creator/skill.md`
  - Example skill for creating labs.
- `.github/skills/lab-adaptation/SKILL.md`
  - Example skill for adapting presentations.

These two files show the appropriate locations for each agent.

---

<!-- _class: light -->

## Declare the metadata

The front matter identifies the skill and summarizes its role.

```yaml
---
name: lab-creator
description: Creates organized educational labs.
---
```

The content must respect the format expected by the agent.

---

## Organize the instructions

Separate sections make the skill easier to follow.

```markdown
# Lab Creator Skill

## Purpose
## Rules
## Workflow
## Validation
```

Each section answers a different need.

---

<!-- _class: light -->

## Define the task and deliverable

- Choose a recurring task and target audience.
- Specify the files, format, language, and level.
- Write precise and verifiable rules.

---

## Describe a reliable execution

- Order the steps according to the real workflow.
- Define how to validate the deliverable.
- Flag missing information instead of assuming it.
- Save the skill in the appropriate location.

---

<!-- _class: light -->

## Compare the two environments

1. Use the same repository and task.
2. Run the test in Antigravity.
3. Reproduce the request in GitHub Copilot for VS Code.
4. Review both deliverables against the same criteria.

---

## Verify the results

| Criterion | Antigravity | Copilot |
| :-- | :--: | :--: |
| Skill activated for the task | To test | To test |
| Steps and rules followed | To verify | To verify |
| Deliverable matches the format | To verify | To verify |
| Clear reusable instructions | To evaluate | To evaluate |

---

<!-- _class: light -->

## Document and improve

For each test, record:

- The task and environment used.
- The result and observed differences.
- The changes made to the skill.

Repeat the tests after any major modification.

---

## Expected result

The skill should guide the creation of a compliant and verifiable deliverable in both environments.

- Make limitations and missing information visible.
- Revise the instructions when the tests reveal differences.

**Lab status:** method and checklist defined; tests still to be documented.
