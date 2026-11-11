# lab-poo

## 1. Technical Project Need

- The brief identifies a learning gap: PHP OOP concepts not yet covered in the tutorials.
- **Problem addressed:** learners need to understand and practice six core OOP concepts before applying them in a technical project. This is a learning need from the brief, not a confirmed production incident.
- **Proposed response:** short, runnable exercises with explanations and a consistent fictional catalog example.
- The Laravel project requires PHP 8.3 or later. These exercises use PHP CLI and do not modify or require booting the Laravel application.

**Quick Start** — from the `lab-poo` directory:

```powershell
php --version
php hello-world.php
php abstract-class\exemple.php
```

Run the other exercises with the same pattern, for example `php interfaces\exemple.php`.

## 2. Concepts and Techniques to Learn

- **Abstract classes:** define a base template that cannot be instantiated directly (`abstract class CatalogItem`). [Example](./abstract-class/exemple.php) · [tutorial](./abstract-class/tutoriel.md).
- **Interfaces:** define a contract a class must implement (`implements Identifiable`). [Example](./interfaces/exemple.php) · [tutorial](./interfaces/tutoriel.md).
- **Inheritance:** reuse or specialize a parent class (`ProductRecord extends CatalogRecord`). [Example](./inheritance/exemple.php) · [tutorial](./inheritance/tutoriel.md).
- **Polymorphism:** call the same method on different implementations (`$method->fee()`). [Example](./polymorphism/exemple.php) · [tutorial](./polymorphism/tutoriel.md).
- **Encapsulation:** protect state and expose controlled operations (`private int $quantity`). [Example](./encapsulation/exemple.php) · [tutorial](./encapsulation/tutoriel.md).
- **Static members:** share a class-level value or method (`CatalogCode::next()`). [Example](./static-members/exemple.php) · [tutorial](./static-members/tutoriel.md).

## 3. Expected Implementation

> **Prompt for an AI:**
>
> You are a PHP instructor. Create six progressive, executable PHP 8.3+ exercises about abstract classes, interfaces, inheritance, polymorphism, encapsulation, and static properties/methods. Use a small fictional product catalog as a consistent learning scenario, and clearly state that its data and behavior are invented for the exercises, not taken from a real incident. For every concept, provide a short `exemple.php` and a `tutoriel.md` that explains the code in execution order, gives the command to run from `lab-poo`, states the exact expected output, relates the concept to the existing Laravel application without claiming the exercise is integrated, and proposes one limitation or follow-up challenge. Keep the examples dependency-free and compatible with the project's PHP requirement. Add a Quick Start and an executable Hello World. Do not invent a personal problem or solution; use only the learning gap described in the brief, and validate every PHP file with `php -l`.
