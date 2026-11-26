# ISP: Give a dashboard a read-only dependency

## Objective

Separate task-reading operations from task-writing operations so a read-only dashboard does not depend on write methods.

## Problem

A dashboard that depends on a large repository interface must declare or implement saving and deleting operations even when it only reads a task.

## Files and structure

- `exemple.php` defines `Task`, `TaskReader`, `TaskWriter`, `InMemoryTaskRepository`, and `TaskDashboard`.
- `TaskReader` contains only `findById()`.
- `TaskWriter` contains `save()` and `delete()`.
- `TaskDashboard` depends only on `TaskReader`.

## Execution flow

1. The repository stores one simulated task.
2. The dashboard constructor receives `TaskReader`.
3. `showTask()` looks up the task and formats it or returns a not-found line.
4. `echo` displays the dashboard output.

This follows ISP because the read-only client receives a focused interface and has no dependency on editing or deleting. It models project behavior, but the repository is in-memory educational code rather than application code.

## Command

From `lab-solid`:

```powershell
php .\ISP\exemple.php
```

## Expected output

```text
Task #301: Estimate release (todo)
```

## Verification

Confirm the dashboard calls only `findById()` and never calls `save()` or `delete()`.

## Limitation / follow-up

The repository loses data when the process ends. A follow-up could add a genuinely read-only repository implementation and inject it into the dashboard.
