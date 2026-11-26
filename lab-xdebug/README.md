# lab-xdebug

## 1. Need for the technical project

- The `soli-27` workspace contains multiple PHP projects and labs, including `blog-des-laureats`, `lab_team`, and `labs`.
- A shared VS Code debugger setup lets learners debug PHP CLI scripts from different project folders without maintaining a separate listener for each one.
- This lab documents the existing Windows setup and teaches how to inspect a running PHP program; it does not change the PHP installation or workspace debugger configuration.
- Environment used: PHP 8.5.10 (64-bit, Thread Safe), Xdebug 3.5.3, and the VS Code PHP Debug extension (`xdebug.php`) 1.40.2.
- The existing CLI configuration and shared launch file were checked, and the original setup was reported to stop at an actual VS Code breakpoint.

## 2. Concepts and techniques to learn

- **Xdebug and the IDE listener:** connect a PHP process to VS Code at `127.0.0.1:9003`.
- **Breakpoints and execution flow:** pause before a statement and step through a function one line at a time ([example](./execution-flow/exemple.php), [tutorial](./execution-flow/tutoriel.md)).
- **Variables:** inspect local values while execution is paused (for example, `$subtotal`; [example](./debug-console/exemple.php), [tutorial](./debug-console/tutoriel.md)).
- **Call stack:** follow the functions that led to the current line (`formatReceipt()` called by `calculateOrder()`; [example](./call-stack/exemple.php), [tutorial](./call-stack/tutoriel.md)).
- **Exception debugging:** pause at a `throw` or handler and inspect the exception object ([example](./exception/exemple.php), [tutorial](./exception/tutoriel.md)).
- **Debug Console:** evaluate an expression in the paused program's current scope ([example](./debug-console/exemple.php), [tutorial](./debug-console/tutoriel.md)).
- **Shared workspace configuration:** use the root `Listen for Xdebug` or `Launch current PHP file` configuration from different project folders.

## 3. Expected outcome

> **Prompt for an AI:**
>
> Create a small, progressive PHP 8.5.10 and Xdebug 3.5.3 debugging lab for Windows and VS Code. Provide standalone educational examples for (1) variables and execution flow, (2) function calls and the call stack, (3) a caught exception, and (4) inspecting expressions in the VS Code Debug Console. Put each example in its own folder with an executable `exemple.php` and a `tutoriel.md`. In each tutorial, explain the code in execution order, give the PowerShell command to run from the lab folder, state the expected terminal output, identify useful breakpoint locations and expected debugger behavior, and include a small follow-up challenge. Keep all examples dependency-free and clearly separate them from the already configured shared `soli-27/.vscode/launch.json`; do not modify PHP, Xdebug, VS Code configuration, or application source code. Include a Quick Start and a working Hello World in the first example. Do not claim an example breakpoint was tested unless it was actually observed.

The examples are standalone learning exercises, not changes integrated into the workspace applications.

**Quick Start** — from `labs/lab-xdebug`:

```powershell
php --version
php --ri xdebug
php execution-flow\exemple.php
```

In VS Code, open the `soli-27` workspace, set a breakpoint in a PHP example, choose **Launch current PHP file**, and press **F5**. To debug a script started from a terminal instead, start **Listen for Xdebug** before running the script.

The shared root launch file and local Xdebug settings are existing workspace configuration. These example files are standalone and do not install or configure Xdebug.

**Author:** by oussama bekkali
