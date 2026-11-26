# DIP: Make reporting depend on a task-reader contract

## Objective

Let high-level task-status reporting work with alternative data sources without depending on a concrete reader.

## Problem

If `TaskStatusReport` directly creates or reads a file or array, changing storage or testing setup requires changing the report logic.

## Files and structure

- `exemple.php` defines `TaskReader`, `ArrayTaskReader`, `JsonStringTaskReader`, and `TaskStatusReport`.
- `TaskStatusReport` is injected with `TaskReader` and uses only `all()`.
- `JsonStringTaskReader` uses an in-memory JSON string, not a real file or database.

## Execution flow

1. Two simulated task objects are created.
2. Their statuses are represented as array objects and as JSON text.
3. `TaskStatusReport` receives an array reader and counts statuses.
4. The report receives a JSON-string reader and counts the same statuses.
5. Both source labels and counts are printed.

This follows DIP because the high-level report depends on the `TaskReader` abstraction while each low-level source implements that abstraction. The example is standalone and is not integrated application code.

## Command

From `lab-solid`:

```powershell
php .\DIP\exemple.php
```

## Expected output

```text
Array source:
todo: 1
in_progress: 1
JSON-string source:
todo: 1
in_progress: 1
```

## Verification

Confirm both readers produce identical counts while `TaskStatusReport` remains unchanged.

## Limitation / follow-up

The JSON-string reader validates JSON syntax but not every task record shape. A follow-up could add a file-backed reader and reject incomplete records at the adapter boundary.
