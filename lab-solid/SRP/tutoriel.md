# SRP: Separate task counting from presentation

## Objective

Count the statuses of simulated tasks and display the result without mixing business rules with terminal formatting.

## Problem

A class that counts statuses and formats text has two main responsibilities. Changing either behavior can require changing the same class.

## Files and structure

- `exemple.php` contains an educational `Task`, `TaskStatusSummary`, and `TaskSummaryPresenter`.
- `TaskStatusSummary` owns status counting.
- `TaskSummaryPresenter` owns report formatting.

## Execution flow

1. Three simulated tasks are created.
2. `countByStatus()` loops over the tasks and builds an associative count array.
3. `render()` converts those counts into text lines.
4. `echo` writes the result to the terminal.

This follows SRP because counting and presentation have separate reasons to change. It illustrates how project task data might be summarized, but it is not application code.

## Command

From `lab-solid`:

```powershell
php .\SRP\exemple.php
```

## Expected output

```text
Task summary
todo: 2
in_progress: 1
```

## Verification

Check that the two `todo` tasks and the one `in_progress` task produce the displayed counts.

## Limitation / follow-up

Plain status strings allow typos. A follow-up could introduce a validated status type without moving formatting into the counting class.
