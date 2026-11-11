---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 25px;
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

# lab-poo

**Student:** to be completed  
**Instructor:** to be completed

PHP Object-Oriented Programming: six practical concepts

---

<!-- _class: light -->

## Presentation Plan

1. Introduction & Technical Stack
2. Definitions
3. Problem
4. Solution

---

## Introduction & Technical Stack

- PHP CLI for small, executable examples.
- Laravel project in this repository requires PHP 8.3 or later.
- Exercises are standalone and use no additional dependencies.
- A fictional product catalog provides a consistent learning scenario.

### Quick Start

From the `lab-poo` directory:

```powershell
php --version
php hello-world.php
php abstract-class\exemple.php
```

---

<!-- _class: light -->

## Hello World

```php
<?php

declare(strict_types=1);

echo "Hello, PHP!\n";
```

Run it with `php hello-world.php`.

---

## Definitions — Abstract Classes and Interfaces

- **Abstract class:** a base template that cannot be instantiated directly (`abstract class CatalogItem`).
- **Interface:** a contract that lists methods a class must provide (`implements Identifiable`).
- Use an abstract class for shared state or behavior; use an interface for a shared capability.

---

<!-- _class: light -->

## Definitions — Inheritance and Polymorphism

- **Inheritance:** a child class reuses or specializes a parent (`ProductRecord extends CatalogRecord`).
- **Polymorphism:** the same method call can produce different behavior depending on the object (`$method->fee()`).
- A shared parent type or interface lets code work with different implementations.

---

## Definitions — Encapsulation and Static Members

- **Encapsulation:** protect object state and expose controlled operations (`private int $quantity`).
- **Static property:** class-level state shared by the class (`private static int $nextNumber`).
- **Static method:** called on the class rather than an object (`CatalogCode::next()`).

---

<!-- _class: light -->

## Problem

The lab brief identifies a learning gap: these six PHP OOP concepts have not yet been covered in the tutorials.

Learners need to understand each concept and practice using it before applying it to a technical project.

This is an educational need from the brief, not a claim about a production incident or the student's personal experience.

---

## Solution

Practice the six concepts through short, runnable examples:

- Abstract classes provide a reusable template.
- Interfaces define a contract.
- Inheritance reuses parent behavior.
- Polymorphism allows varied behavior through a shared type.
- Encapsulation protects object state.
- Static members belong to the class.

---

<!-- _class: light -->

## Demonstration — Abstract Class

```php
abstract class CatalogItem
{
    abstract public function finalPrice(): float;
}
```

- The base type defines a required method.
- Concrete item classes provide their own price calculation.
- Run `php abstract-class\exemple.php`.

---

## Demonstration — Interface and Inheritance

```php
interface Identifiable
{
    public function identifier(): string;
}

final class ProductRecord extends CatalogRecord
{
    // Inherits shared catalog behavior.
}
```

- An interface states a capability; inheritance reuses a parent class.
- Run `php interfaces\exemple.php` and `php inheritance\exemple.php`.

---

<!-- _class: light -->

## Demonstration — Polymorphism

```php
function printShippingFee(ShippingMethod $method): void
{
    echo $method->name() . ': ' . $method->fee();
}
```

The same function can accept standard shipping or store pickup and call the same methods.

---

## Demonstration — Encapsulation and Static Members

```php
$stock->remove(2);
echo CatalogCode::next();
```

- Encapsulation changes stock through a validating method.
- A static method generates a class-level code without an object.
- Run the `encapsulation` and `static-members` exercises.

---

<!-- _class: light -->

## Practical Exercises

From `lab-poo`, run:

```powershell
php interfaces\exemple.php
php inheritance\exemple.php
php polymorphism\exemple.php
php encapsulation\exemple.php
php static-members\exemple.php
```

Each example has a step-by-step tutorial and a follow-up challenge.
