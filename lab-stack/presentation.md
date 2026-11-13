---
marp: true
theme: default
paginate: true
size: 16:9
header: "LAB · STACK TECHNIQUE"
footer: "Discover the Labs and the Project Stack"
style: |
  section {
    background: #101827;
    color: #edf2f7;
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 24px;
    padding: 42px 56px;
  }
  h1, h2 { color: #f5b942; }
  h3, strong { color: #84d9c5; }
  section.cover {
    background: #f8fafc;
    color: #101827;
    text-align: center;
  }
  section.cover h1, section.cover h2 { color: #075985; }
  section.cover img {
    max-height: 72px;
    width: auto;
    vertical-align: middle;
  }
  section.light {
    background: #f8fafc;
    color: #172033;
  }
  section.light h1, section.light h2 { color: #075985; }
  section table {
    border-collapse: collapse;
    width: 100%;
    font-size: 0.8em;
  }
  section th {
    background: #173c46;
    color: #fff;
    text-align: left;
  }
  section td {
    background: #e2e8f0;
    color: #172033;
    border-bottom: 1px solid #94a3b8;
  }
  section th, section td { padding: 7px 9px; }
  section.labs { padding: 28px 34px; }
  section.labs table {
    font-size: 0.68em;
    line-height: 1.3;
    table-layout: fixed;
  }
  section.labs th, section.labs td {
    padding: 7px;
    vertical-align: top;
  }
  section pre { font-size: 0.74em; }
---

<!-- _class: cover -->

![OFPPT](./ofppt.png) ![Solicode](./solicode.png)

# Lab Stack

## Discover the Labs and the Project Stack

**Student:** Bekkali oussama · **Supervisor:** essarraj fouad

### Presentation outline

Project → Stack → Understanding Labs → Lab list

---

## Technical project

### Project management and task tracking

- A multi-stage prototype for managing software project work.
- It began as a **PHP/MySQL task manager** and evolved toward a **JSON-based task-status manager** with a frontend interface.
- Developers are assigned tasks with titles, descriptions, priorities, deadlines, and statuses.
- The interface supports adding and listing task statuses.

---

<!-- _class: light -->

## Technical stack

### Stack from the original presentation

| Area              | Technologies and purpose                                    |
| :---------------- | :---------------------------------------------------------- |
| Interface         | Alpine.js for interactions; Tailwind CSS and Preline for UI |
| Backend           | Native PHP and Laravel                                      |
| Data              | MySQL                                                       |
| Android / backend | Kotlin                                                      |

**Development tools:** Git, GitHub, Agents, Markdown, OpenCode, Marp, OmniRoute, Antigravity, and GitHub Copilot.

The README describes a later JSON-based task-status prototype. It does not specify that version's framework or technology versions.

---

## Understanding Labs

### What is a Lab?

A small, guided exercise to learn a technology by trying it.

### Why do Labs?

- Explore a tool or concept.
- Test an idea with a small example.
- Apply what works to the technical project.

### Problem and proposed solution

- **Problem provided:** understand the stack being studied and used in the project.
- **Proposed solution:** learn the stack needed and apply it to the technical project.
- Each Lab connects one concept to a practical part of the task manager.

---

<!-- _class: labs light -->

## Lab list

| Phase 1 · Foundations and tools                                                                                              | Phase 2 · Methods and collaboration                                                                  | Phase 3 · Development and languages                                                                                                                               | Phase 4 · Project and production                                                                               |
| :--------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| 1. What is a Lab?<br>2. Markdown<br>3. GitHub Pages<br>4. Antigravity<br>5. Marp<br>6. OpenCode<br>7. Pandoc<br>8. OmniRoute | 11. 2TUP<br>12. Design Thinking<br>13. GitHub Issues<br>14. Scrum<br>15. GitHub Copilot<br>16. ASCII | 9. Tailwind CSS<br>10. Preline<br>17. OOP<br>18. Native PHP<br>19. Laravel<br>20. Kotlin<br>21. ES7 JavaScript<br>22. JavaScript Errors<br>23. Prompt-Agent-Skill | 24. AI Communication<br>25. Tech Watch<br>26. Starter<br>27. Planning<br>28. Git<br>29. Lab Stack<br>30. Agent |
