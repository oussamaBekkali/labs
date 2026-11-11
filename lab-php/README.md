# lab-php

## 1. Technical Project Need

- This lab provides practical exercises for handling errors, organizing classes, and sharing behavior in PHP.
- **Real problem encountered:** To be completed by the student (context and observed consequences). No real-life problem has been confirmed.
- **Proposed solution:** To be completed by the student. The lab's exercise format is not a solution to a personal problem.
- The Laravel project in this repository requires PHP 8.3 or later. The exception and trait examples are standalone; the namespace example uses the existing Laravel model and Composer autoloader. No application files are modified.

**Quick Start** — from the `lab-php` directory:

```powershell
php --version
php hello-world.php
php exceptions\exemple.php
php namespaces\exemple.php
php traits\exemple.php
```

The Hello World script prints `Hello, PHP!`; each exercise prints its result in the terminal.

## 2. Concepts and Techniques to Learn

- **Exceptions:** signal and handle invalid input (`throw new InvalidQuantityException(...)`, then `catch`). Exercise: [example](./exceptions/exemple.php) · [tutorial](./exceptions/tutoriel.md).
- **Namespaces:** name and import classes according to the project's autoloader (`App\Models\Category`, `use App\Models\Category;`). Exercise: [example](./namespaces/exemple.php) · [tutorial](./namespaces/tutoriel.md).
- **Traits:** share behavior between classes without inheritance (`use Timestampable;`). Exercise: [example](./traits/exemple.php) · [tutorial](./traits/tutoriel.md).

## 3. Expected Implementation

> **Prompt for an AI:**
>
> You are a PHP instructor. Prepare three progressive exercises on exceptions, namespaces, and traits using PHP 8.3 or later. For each concept, provide an executable `exemple.php` and a `tutoriel.md` that explains the code in order, gives the command to run from `lab-php`, states the expected output, relates the example to the project, and suggests a limitation or follow-up challenge. For namespaces, follow the project's actual PSR-4 autoload mapping (`App\\` to `Laravel/app/`) and reuse an existing class without modifying the application. The other examples may be standalone. Clearly label any fictional data and never present it as the student's real-life problem. Include a Quick Start and a working Hello World. Do not propose a personal solution without the student's confirmation, and validate the PHP files with `php -l`.
