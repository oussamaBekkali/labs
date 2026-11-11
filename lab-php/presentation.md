---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 28px;
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

# PHP Concepts Lab

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

In the previous technical project, we struggled to read and understand error messages.

This lab explores PHP and Laravel concepts to help us understand failures and organize code:

- Error and exception handling
- Namespaces
- Traits

---

<!-- _class: light -->

## Problems Encountered

During the previous technical project, we struggled to read and understand errors.

- Error messages were difficult to interpret.
- Identifying what failed was challenging.
- This made choosing an appropriate response harder.

---

## Solutions Implemented

This lab studies techniques that address these difficulties:

- Read exception details to locate the failure.
- Use namespaces to identify classes and their dependencies.
- Use traits to share reusable behavior.

These are learning objectives, not claims of changes to the project.

---

<!-- _class: light -->

## Errors and Exceptions

An exception signals an unexpected condition during execution.

- `throw` raises an exception.
- `try` wraps code that may fail.
- `catch` handles a matching exception type.
- `Throwable` is PHP’s common interface for errors and exceptions.

---

## Reading an Error Message

Use the available details to investigate the failure.

1. Identify the error or exception type.
2. Read the message for context.
3. Check the reported file and line.
4. Follow the stack trace to the calling code.

Do not hide an error before understanding its cause.

---

<!-- _class: light -->

## Category Lookup in Laravel

The project’s category model can look up a record by ID.

```php
$category = Category::findOrFail($id);
```

If no category matches, Laravel raises a model-not-found exception and returns a 404 response by default.

---

## When to Catch an Exception

Catch an exception when the application can handle it meaningfully.

- Match the specific exception type.
- Provide a clear, appropriate response.
- Avoid swallowing unexpected failures.
- Laravel already handles `findOrFail` with a 404 response.

---

<!-- _class: light -->

## Namespace: Organize Classes

A namespace gives a class a unique, structured name.

- It groups related classes.
- It prevents collisions between identical short names.
- `use` imports a class for convenient reference.

---

## Namespace in the Category Controller

The project controller declares its namespace and imports its dependencies.

```php
namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Contracts\View\View;
```

The imports make the model and return type explicit.

---

<!-- _class: light -->

## Composer Maps Namespaces

Composer’s PSR-4 configuration connects namespaces to project folders.

```json
{
    "App\\": "app/",
    "Tests\\": "tests/"
}
```

`App\Models\Category` maps to `app/Models/Category.php`.

---

## Trait: Reuse Behavior

A trait lets classes share methods without a shared parent class.

- Declare a trait with `trait`.
- Include it in a class with `use`.
- A class can use multiple traits.

---

<!-- _class: light -->

## Traits in the User Model

The Laravel user model uses traits for reusable features.

```php
use HasFactory, Notifiable;
```

`HasFactory` supports model factories; `Notifiable` provides notification behavior.

---

## Trait in the Category Tests

The category feature tests use `RefreshDatabase`.

```php
class CategoryTest extends TestCase
{
    use RefreshDatabase;
}
```

The trait helps prepare a clean database for the tests.

---

<!-- _class: light -->

## Run the Category Tests

The existing tests cover the category list and empty state.

```bash
cd Laravel
php artisan test --filter=CategoryTest
```

Run them to check the behavior while exploring the project.

---

## Key Takeaways

- Read error details before deciding how to respond.
- Namespaces make class organization and dependencies clearer.
- Traits share behavior between otherwise separate classes.
- Laravel uses all three concepts in the project.
