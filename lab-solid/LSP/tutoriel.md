# LSP: Substitute task collections safely

## Objective

Use two task collection implementations through one contract and observe identical behavior.

## Problem

A caller should not need different logic or special cases when an implementation of a shared contract is replaced.

## Files and structure

- `exemple.php` defines `TaskCollection`, `ArrayTaskCollection`, `JsonTaskCollection`, and `TaskListPrinter`.
- `TaskListPrinter` depends on `TaskCollection` and does not inspect the concrete source.

## Execution flow

1. Two simulated task records are created.
2. The records are passed to `ArrayTaskCollection`.
3. The same records are encoded and passed to `JsonTaskCollection`.
4. The same printer renders both collections.

This follows LSP because each implementation accepts the collection role and returns task records with the expected IDs, titles, statuses, and order. The JSON and array sources are simulations, not application integrations.

## Command

From `lab-solid`:

```powershell
php .\LSP\exemple.php
```

## Expected output

```text
Array collection:
201: Draft backlog (todo)
202: Assign developers (in_progress)
JSON collection:
201: Draft backlog (todo)
202: Assign developers (in_progress)
```

## Verification

Verify that both sections contain the same tasks in the same order.

## Limitation / follow-up

PHPDoc documents the record shape, but this example has no runtime shape validation. A follow-up could test malformed JSON and invalid records at the adapter boundary.
