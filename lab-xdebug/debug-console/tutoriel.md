# Exercise: Evaluate Expressions in the Debug Console

**Author:** by oussama bekkali

## Goal

Pause a PHP script and evaluate expressions using the current local variables in the VS Code **Debug Console**.

## Files and commands

- File: `debug-console/exemple.php`
- From `labs/lab-xdebug`, run: `php debug-console\exemple.php`
- To debug in VS Code, set a breakpoint on `$total = ...` and launch the current PHP file.

## Walkthrough in execution order

1. The script assigns `$unitPrice` and `$quantity`.
2. `$subtotal` is calculated from those values.
3. `$taxRate` is assigned.
4. The breakpoint on the `$total` assignment pauses before the total is calculated.
5. In **Debug Console**, evaluate `$subtotal` and `$subtotal * (1 + $taxRate)` to inspect the values available in the paused scope.
6. Step over the `$total` assignment, then inspect `$total` in **Variables** or the Debug Console.
7. The final statement formats and prints the total.

Evaluate only the expressions needed for this exercise. Debug Console expressions run in the program's context and can have side effects if they modify state or call functions that do so.

## Expected terminal output

```text
Total with tax: 71.82
```

## Relation to the workspace setup

This is a dependency-free CLI exercise. It uses the existing shared VS Code debugger configuration and does not modify workspace or application files.

## Limitation or challenge

The tax rate is fixed. Change it, rerun the script, and inspect how the subtotal and total differ while paused.
