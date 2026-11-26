# OCP: Add a task exporter without rewriting the service

## Objective

Export the same simulated task records as JSON or CSV by supplying a compatible exporter.

## Problem

Repeating or modifying task-report logic whenever a new output format appears risks regressions in stable behavior.

## Files and structure

- `exemple.php` defines `TaskExporter`, `JsonTaskExporter`, `CsvTaskExporter`, and `TaskReportService`.
- `TaskExporter` is the extension contract.
- `TaskReportService` delegates formatting without naming a concrete exporter in its method logic.

## Execution flow

1. One simulated task record is created.
2. The service receives `JsonTaskExporter` and prints JSON.
3. The service receives `CsvTaskExporter` and prints CSV.
4. The service remains unchanged while the behavior is extended through implementations.

This follows OCP because stable report orchestration is open to new exporter implementations and does not need to be modified for JSON or CSV. The data is illustrative, not integrated application data.

## Command

From `lab-solid`:

```powershell
php .\OCP\exemple.php
```

## Expected output

```text
JSON export:
[
    {
        "id": 101,
        "title": "Plan sprint",
        "status": "todo"
    }
]
CSV export:
id,title,status
101,"Plan sprint",todo
```

## Verification

Compare the ID, title, and status in both output formats. Both exports should describe the same task.

## Limitation / follow-up

The script chooses exporters directly. A real project could add a format-selection boundary while keeping `TaskReportService` independent of concrete formats.
