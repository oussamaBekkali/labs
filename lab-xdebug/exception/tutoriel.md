# Exercise: Debug a Caught Exception

**Author:** by oussama bekkali

## Goal

Follow an exception from the line that throws it to the `catch` block, then inspect the exception message and call stack.

## Files and commands

- File: `exception/exemple.php`
- From `labs/lab-xdebug`, run: `php exception\exemple.php`
- To debug in VS Code, set a breakpoint on the `throw` statement or inside the `catch` block, then launch the current PHP file.

## Walkthrough in execution order

1. `divide()` receives the dividend and divisor.
2. The `if` detects the zero divisor and throws an `InvalidArgumentException`.
3. The `throw` exits the normal calculation path and transfers control to the nearest matching handler.
4. The `catch` block receives the exception as `$exception` and prints its message.
5. The division and normal result output are skipped for this input.

At the `throw` breakpoint, inspect `$dividend` and `$divisor`. At the `catch` breakpoint, inspect `$exception` and its message. You can also enable exception breakpoints in VS Code to stop when exceptions are thrown.

## Expected terminal output

```text
Caught exception: The divisor must not be zero.
```

## Relation to the workspace setup

The example is a standalone demonstration of PHP's built-in exception handling. It is not an application fix or a change to the shared Xdebug configuration.

## Limitation or challenge

Only a zero divisor is handled. Try calling `divide()` with a valid divisor and observe the normal return path.
