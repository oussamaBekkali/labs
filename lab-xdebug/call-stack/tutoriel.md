# Exercise: Inspect Function Calls and the Call Stack

**Author:** by oussama bekkali

## Goal

See how a function call leads to another function and use the VS Code **Call Stack** view to trace the path back to the script entry point.

## Files and commands

- File: `call-stack/exemple.php`
- From `labs/lab-xdebug`, run: `php call-stack\exemple.php`
- To debug in VS Code, set a breakpoint on `$subtotal` and launch the current PHP file.

## Walkthrough in execution order

1. `formatReceipt()` multiplies its typed inputs and stores the result in `$subtotal`.
2. The return statement formats the subtotal and returns a string to its caller.
3. `calculateOrder()` calls `formatReceipt()` and returns that function's result unchanged.
4. The top-level code calls `calculateOrder()` and stores the returned string in `$receipt`.
5. The final statement prints the receipt.

At the breakpoint, inspect `$unitPrice`, `$quantity`, and `$subtotal` in **Variables**. In **Call Stack**, the active `formatReceipt()` frame is reached through `calculateOrder()` and the top-level script. Step out to return to the caller.

## Expected terminal output

```text
Subtotal: 36.00
```

## Relation to the workspace setup

This standalone script can be debugged from any folder in the workspace with the shared root launch configuration. It does not change or call an application service.

## Limitation or challenge

The calculation does not validate quantity. Add a check for non-positive quantities and follow the call stack when the check rejects the input.
