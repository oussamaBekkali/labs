---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 26px;
    padding: 48px 64px;
    background: #101827;
    color: #e8eef7;
  }
  section.light {
    background: #f5f8fc;
    color: #202b3c;
  }
  h1, h2 { color: #56c2d6; }
  section.light h1, section.light h2 { color: #1769aa; }
  strong { color: #73d6bd; }
  section.light strong { color: #1769aa; }
  pre { font-size: 0.72em; }
---

# lab-xdebug

## PHP Debugging with Xdebug and VS Code

**Student:** oussama bekkali  
**Supervisor:** [Name to complete]  
**Author:** by oussama bekkali

---

<!-- _class: light -->

## Presentation Outline

1. Introduction and technical stack
2. Key concepts
3. Workspace need
4. Existing solution
5. Practical debugging

---

## Introduction & Technical Stack

| Tool | Purpose |
| --- | --- |
| PHP 8.5.10 CLI | Runs PHP scripts |
| Xdebug 3.5.3 | Connects a PHP process to the debugger |
| VS Code PHP Debug 1.40.2 | Breakpoints, variables, stack, console |
| Root `launch.json` | Launches a file or listens for Xdebug |

---

<!-- _class: light -->

## How the Debug Connection Works

```text
PHP script ──starts──> Xdebug
                           │
                           │ TCP 127.0.0.1:9003
                           ▼
                    VS Code listener
                           │
                           ▼
                 Pause → inspect → step
```

The IDE listens; Xdebug connects to it.

---

## Key Concepts

- **Breakpoint:** pause before a selected line runs.
- **Step over / into / out:** move across lines and function calls.
- **Variables:** inspect values in the current scope.
- **Call stack:** see the active function path.
- **Debug Console:** evaluate expressions while execution is paused.

---

<!-- _class: light -->

## Workspace Need

- `soli-27` contains multiple PHP projects and labs.
- A single root debugger configuration avoids repeating listener setup in each project.
- Examples in this lab are standalone exercises, not changes to those applications.

---

## Existing Xdebug Setup

```ini
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.client_host=127.0.0.1
xdebug.client_port=9003
```

The root `soli-27/.vscode/launch.json` provides:

- **Listen for Xdebug** — accepts a connection from a PHP process.
- **Launch current PHP file** — starts the open PHP file under the debugger.

The shared setup was previously verified with an actual breakpoint. This lab does not change it.

---

<!-- _class: light -->

## Two Ways to Start a Debug Session

**From the VS Code editor**

```text
Open PHP file → set breakpoint → F5: Launch current PHP file
```

**From a terminal**

```text
Start Listen for Xdebug → run `php path\to\exemple.php`
```

For terminal runs, start the listener before running the script.

---

## Quick Start

From `labs/lab-xdebug`:

```powershell
php --version
php --ri xdebug
```

To debug a terminal-launched script:

1. In VS Code, choose **Listen for Xdebug** and start debugging.
2. Run `php call-stack\exemple.php` in PowerShell.
3. Set a breakpoint in `call-stack\exemple.php` and inspect the paused session.

---

<!-- _class: light -->

## If No Listener Is Running

```text
PHP starts
   ↓
Xdebug tries 127.0.0.1:9003
   ↓
Connection times out
   ↓
PHP continues, but VS Code cannot stop at a breakpoint
```

The script may still print its output. The timeout means the IDE did not accept the debug connection.

---

## Hello World + Execution Flow

```php
echo "Hello, Xdebug lab!\n";

$unitPrice = 80.00;
$discountRate = 0.10;
$finalPrice = applyDiscount($unitPrice, $discountRate);
```

From `execution-flow/exemple.php`, step into `applyDiscount()` and inspect the calculation:

```text
80.00 × 0.10 = 8.00 discount
80.00 − 8.00 = 72.00 final price
```

---

<!-- _class: light -->

## Breakpoint and Variable Inspection

At `$discountAmount = $price * $rate;`, pause before the line executes:

| Variable | Value |
| --- | ---: |
| `$price` | `80.00` |
| `$rate` | `0.10` |

Step over the statement; `$discountAmount` becomes `8.00`. Step again to see `$finalPrice` become `72.00`.

---

## Function Calls and the Call Stack

```text
Top-level script
  └─ calculateOrder()
       └─ formatReceipt()  ← current frame
```

In `call-stack/exemple.php`, pause on `$subtotal`. Step out of `formatReceipt()` to return to `calculateOrder()`.

---

<!-- _class: light -->

## Debug an Exception

```text
divide(12, 0)
    ↓
throw InvalidArgumentException
    ↓
catch ($exception)
```

In `exception/exemple.php`, pause at `throw` or inside `catch`. Inspect the divisor, exception message, and active call stack.

---

## Use the Debug Console

Pause before `$total` is assigned in `debug-console/exemple.php`.

```text
Evaluate: $subtotal
Evaluate: $subtotal * (1 + $taxRate)
Step over the assignment
Inspect: $total
```

Expressions run in the paused program context and may have side effects if they modify state or call functions that do so.

---

<!-- _class: light -->

## Practical Demonstration

1. Open a PHP example from any project folder in the `soli-27` workspace.
2. Choose **Launch current PHP file** and press **F5**, or start **Listen for Xdebug** before running the script from PowerShell.
3. Stop at a breakpoint; inspect **Variables** and the **Call Stack**.
4. Evaluate an expression in **Debug Console**, then step through to the output.

**Deliverable:** a reusable, shared PHP CLI debugging workflow for the workspace.
