---
marp: true
theme: gaia
paginate: true
size: 16:9
author: oussama bekkali
---

<!-- _class: lead -->

# Découvrir les principes SOLID

**Student:** [Name]  
**Supervisor:** [Name]

---

<!-- _class: light -->

## Presentation outline

1. Technical stack
2. SOLID definitions
3. Project need
4. Five demonstrations
5. Implementation and demo

---

## Introduction & technical stack

- **PHP 8.5.10 CLI** — executes standalone examples.
- **Markdown** — documents tutorials and slides.
- **Marp** — renders the presentation.
- **No dependencies** — runs without Composer packages.

> Domain objects are educational simulations, not application code.

---

<!-- _class: light -->

## Definitions

| Principle | Core idea                                   |
| :-------- | :------------------------------------------ |
| SRP       | One main responsibility                     |
| OCP       | Extend behavior, avoid stable-code rewrites |
| LSP       | Safe implementation substitution            |
| ISP       | Small, focused interfaces                   |
| DIP       | Depend on abstractions                      |

SOLID is guidance, not an abstraction mandate.

---

## Problem and need

- Coupled task logic becomes harder to change and test.
- Storage changes should not affect request handling or task rules.
- New task exports should not require rewriting stable reporting.
- Project context: `Developer`, `Task`, `TaskStatus`.

<!-- Placeholder: architecture diagram for HTTP -> business rules -> persistence -->

---

<!-- _class: light -->

## SRP — Separate responsibilities

```php
$counts = $summary->countByStatus($tasks);
echo $presenter->render($counts);
```

- Status counting and report formatting are separate.

<!-- Placeholder: screenshot of SRP output -->

---

## OCP — Extend with exporters

```php
interface TaskExporter
{
    public function export(array $tasks): string;
}
```

- JSON and CSV implement the same contract.
- Add CSV behavior without rewriting `TaskReportService`.

<!-- Placeholder: exporter diagram -->

---

<!-- _class: light -->

## LSP — Substitute collections

- Array and JSON collections implement `TaskCollection`.
- `TaskListPrinter` uses either implementation.
- Both return the same task shape and behavior.

<!-- Placeholder: code or diagram for collection substitution -->

---

## ISP — Keep interfaces focused

```php
interface TaskReader
{
    public function findById(int $id): ?Task;
}
```

- Reading is separate from saving and deleting.
- A read-only dashboard depends only on `TaskReader`.

---

<!-- _class: light -->

## DIP — Inject the task abstraction

- `TaskStatusReport` depends on `TaskReader`.
- Array and JSON-string adapters implement the contract.
- Report logic remains unchanged when sources vary.

<!-- Placeholder: diagram of report -> TaskReader <- adapters -->

---

## Quick Start

```powershell
php --version
php hello-world.php
php .\SRP\exemple.php
php .\OCP\exemple.php
php .\LSP\exemple.php
php .\ISP\exemple.php
php .\DIP\exemple.php
```

Validate with `php -l` for each PHP file.

---

<!-- _class: light -->

## Implementation / demo

1. Run SRP and verify status counts.
2. Run OCP and compare JSON and CSV output.
3. Run LSP and compare both collections.
4. Run ISP and confirm read-only access.
5. Run DIP and compare array and JSON reports.

<!-- Placeholder: live terminal screenshot -->
