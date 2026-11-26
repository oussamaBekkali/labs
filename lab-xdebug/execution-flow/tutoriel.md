# Exercise: Follow Variables and Execution Flow

**Author:** by oussama bekkali

## Goal

Pause a PHP CLI script, inspect its variables, and follow execution into and out of a function. The price and rate are fictional learning values.

## Files and commands

- File: `execution-flow/exemple.php`
- From `labs/lab-xdebug`, run: `php execution-flow\exemple.php`
- To debug in VS Code, open the file, set a breakpoint, select **Launch current PHP file**, and press **F5**.

## Walkthrough in execution order

1. `declare(strict_types=1)` enables strict scalar type checks for this file.
2. `applyDiscount()` receives the price and rate. Set a breakpoint on `$discountAmount` to pause before the calculation.
3. Step into the function call to see `$price` and `$rate` in the **Variables** view. Step over the multiplication and subtraction to watch the local values change.
4. `return $finalPrice` sends the calculated value back to the caller.
5. The script first prints the Hello World line, then assigns the input values and calls the function.
6. The final `echo` formats the returned value to two decimal places.

## Expected terminal output

```text
Hello, Xdebug lab!
Final price: 72.00
```

## Relation to the workspace setup

This is a standalone CLI exercise. It uses the shared `soli-27/.vscode/launch.json` configuration and the existing Xdebug installation; it is not part of an application.

## Limitation or challenge

The rate is not validated. Try a rate greater than `1.0`, pause before returning, and inspect how it affects the result.
