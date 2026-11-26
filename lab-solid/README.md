# Découvrir les principes SOLID

## 1. Need for the technical project

- Software Project Management uses `Developer`, `Task`, and `TaskStatus` concepts.
- Tightly coupled responsibilities make code harder to change, test, and extend as the project grows.
- This lab provides five standalone PHP demonstrations for recognizing and applying SOLID principles.
- The domain objects and data are educational simulations, not integrated application code.
- Run with PHP 8.5.10 and no additional dependencies.
- Prepared by oussama bekkali.

**Quick Start** — from `lab-solid`:

```powershell
php --version
php hello-world.php
php .\SRP\exemple.php
php .\OCP\exemple.php
php .\LSP\exemple.php
php .\ISP\exemple.php
php .\DIP\exemple.php
```

## 2. Concepts and techniques to learn

- **SRP — Single Responsibility Principle:** count task statuses separately from formatting the report (a counting class and a presenter have separate reasons to change). [Example](./SRP/exemple.php) · [Tutorial](./SRP/tutoriel.md)
- **OCP — Open/Closed Principle:** add a CSV task exporter without rewriting the task-report service (extend behavior through `TaskExporter`). [Example](./OCP/exemple.php) · [Tutorial](./OCP/tutoriel.md)
- **LSP — Liskov Substitution Principle:** replace one task collection implementation with another without surprising the caller (both honor `TaskCollection`). [Example](./LSP/exemple.php) · [Tutorial](./LSP/tutoriel.md)
- **ISP — Interface Segregation Principle:** let a read-only dashboard depend only on reading tasks, not editing or deleting them. [Example](./ISP/exemple.php) · [Tutorial](./ISP/tutoriel.md)
- **DIP — Dependency Inversion Principle:** make a task-status report depend on `TaskReader`, not a concrete array or JSON source. [Example](./DIP/exemple.php) · [Tutorial](./DIP/tutoriel.md)
- SOLID is practical guidance; it does not require abstractions everywhere.

## 3. Expected outcome

> **Prompt for an AI:**
>
> You are a PHP instructor preparing a lab titled “Découvrir les principes SOLID” for a software project management context involving `Developer`, `Task`, and `TaskStatus`. Create five independent, dependency-free PHP 8.5.10 examples in `lab-solid/SRP`, `lab-solid/OCP`, `lab-solid/LSP`, `lab-solid/ISP`, and `lab-solid/DIP`. In each folder, provide `exemple.php` and `tutoriel.md`. Use short, typed, executable code and realistic task-management scenarios. Each tutorial must explain its objective, problem, files and structure, execution flow, why the code follows the principle, the command to run from `lab-solid`, exact expected output, verification steps, its project-context connection, and one limitation or follow-up. Include `README.md`, `hello-world.php`, and an English `presentation.md` with valid Marp front matter, a compact slide sequence for title/identification, outline, technical stack, definitions, need, solution, and demonstrations, and visual placeholders. End the presentation with implementation or demonstration, not a conclusion. Clearly label all domain objects and records as educational simulations rather than application code. Do not claim removed examples remain or report tests that were not run. Validate every PHP file with `php -l`, execute every example, compare actual output with tutorial expectations, and report corrections and limitations accurately.
