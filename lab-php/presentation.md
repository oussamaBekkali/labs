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

# lab-php

**Student:** bekkali oussama
**Instructor:** essarraj fouad

Practical exercises on exceptions, namespaces, and traits.

---

<!-- _class: light -->

## Presentation Plan

1. Introduction & Technical Stack
2. Definitions
3. Problem
4. Solution

---

## Introduction & Technical Stack

- Three PHP concepts: exceptions, namespaces, and traits.
- Laravel project in this repository: PHP 8.3 minimum.
- Exceptions and traits: PHP CLI, no dependencies.
- Namespaces: the project's Composer autoloader and existing Laravel model.
- Example data is fictional and for learning only.

### Quick Start

From the `lab-php` directory:

```powershell
php --version
php hello-world.php
```

---

<!-- _class: light -->

## Hello World

The first script verifies that PHP CLI can run a file.

```php
<?php

declare(strict_types=1);

echo "Hello, PHP!\n";
```

Command: `php hello-world.php`

---

## Definitions — Exceptions and Namespaces

- **Exception:** an object that signals an abnormal situation. `throw` raises it; `try/catch` handles it.
- **Namespace:** a context that organizes class names, such as `App\Models\Category`.
- **Import:** `use App\Models\Category;` makes the class available by its short name.
- A namespace organizes names; it does not load a PHP file by itself.

---

<!-- _class: light -->

## Definition — Trait

- A **trait** is a block of methods that can be reused by multiple classes.
- `use Timestampable;` adds this behavior to a class.
- Unlike inheritance, a trait does not define an "is a" relationship between classes.
- Use it only for behavior that is genuinely shared.

---

## Problem

PHP code can become harder to maintain when:

- invalid input is not handled through a clear exception path;
- classes are difficult to organize or their names conflict;
- multiple classes duplicate behavior that should be shared.

This is the general technical problem addressed by the lab, not a claim about the student's own project.

---

<!-- _class: light -->

## Solution

- **Exceptions:** detect invalid situations and handle them with `try/catch`.
- **Namespaces:** organize classes and avoid name conflicts, using the project's Composer autoload.
- **Traits:** share behavior across classes without forcing an inheritance relationship.

These are the techniques practiced in this lab; they are not presented as changes already implemented in the application.

---

## Demonstration — Exception

```php
try {
    $subtotal = calculateSubtotal(15.0, 0);
} catch (InvalidQuantityException $exception) {
    echo $exception->getMessage();
}
```

- A zero quantity raises a named exception.
- The `catch` block handles it and prints an explicit message.
- The complete example is in `exceptions/exemple.php`.

---

<!-- _class: light -->

## Demonstration — Namespace

```php
use App\Models\Category;

require_once __DIR__ . '/../../Laravel/vendor/autoload.php';

$category = new Category(['name' => 'Accessories']);
echo $category::class . PHP_EOL;
```

- Composer maps `App\` to `Laravel/app/`.
- `use` imports the existing `App\Models\Category` model.
- The example prints its class name without using the database.
- See `namespaces/exemple.php`.

---

## Demonstration — Trait

```php
final class Product
{
    use Timestampable;
}
```

- `Product` reuses methods from the `Timestampable` trait.
- `CatalogCategory` uses the same behavior in the complete example.
- The standalone example is in `traits/exemple.php`.

---

<!-- _class: light -->

## Practical Exercises

From `lab-php`, run:

```powershell
php exceptions\exemple.php
php namespaces\exemple.php
php traits\exemple.php
```

Each example prints a verifiable result and can be modified to test a variation.
