# Lab Stack

## 1. Need for the technical project

- The project is a multi-stage prototype for software project management and task tracking.
- It evolved from a PHP/MySQL task manager toward a lighter JSON-based task-status manager with a frontend interface.
- It manages tasks assigned to developers, including titles, descriptions, priorities, deadlines, and statuses.
- The stated need is to understand the stack being studied and used in the project; the proposed approach is to learn the required stack and apply it to the project.

## 2. Concepts and techniques to learn

- **Technical stack:** the technologies used together (PHP and MySQL in the earlier version; JSON-based task-status data in the later prototype).
- **Task workflow:** a task moves through statuses such as `pending`, `in_progress`, and `completed`.
- **Task assignment:** connect a task to a developer and track its details (for example, assign a deadline and priority).
- **JSON:** a text format for structured data (for example, `{"status":"in_progress"}`).
- **Frontend interface:** the part users interact with (for example, a simple screen to add and list task statuses).
- The README does not specify framework, frontend technology, or version numbers; examples must not assume them.

## 3. Expected outcome

> **Prompt for the AI:** Create concise, progressive practical examples for this project-management and task-tracking prototype. Follow the project history in this README: first explain the PHP/MySQL task-manager stage, then show the later JSON-based task-status prototype as a distinct iteration. Use the actual task fields (title, description, priority, deadline, status) and developer assignment, and explain the `pending`, `in_progress`, and `completed` workflow. Begin with a Quick Start and an executable PHP Hello World; inspect the provided source and manifests before choosing commands or versions. If the project source is unavailable, state that limitation and use only a clearly labeled standalone PHP example. Do not invent a framework, frontend technology, version, database configuration, or project file. For each example, show its purpose, code, execution steps, expected result, and how it relates to the project.
