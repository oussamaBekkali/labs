---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    background: #101827;
    color: #e8eef7;
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 28px;
    padding: 48px 64px;
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

# PHP OOP Lab

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

Explore six object-oriented programming concepts in PHP.

- Understand the role of each concept.
- Test executable PHP code.
- Adapt the examples to the actual technical project.

---

<!-- _class: light -->

## Problems Encountered

The stated need is to study PHP concepts that are not yet covered in the tutorials.

Other concrete difficulties: **[To be completed by the student]**.

---

## Solutions Implemented

Proposed solution: **[To be completed by the student]**.

The lab examples are learning materials; they do not describe a solution already integrated into the technical project.

---

<!-- _class: light -->

## Quick Start: Run PHP

Check that PHP is available in the terminal:

```powershell
php -v
php .\hello.php
```

The script prints `Hello, OOP in PHP!`.

---

## Abstract Class: The CatalogItem Model

An abstract class provides a shared base and cannot be instantiated directly.

```php
abstract class CatalogItem
{
    abstract protected function details(): string;
}
```

Concrete classes specialize the model.

---

<!-- _class: light -->

## Interface: The Describable Contract

An interface declares a method that implementing classes must provide.

```php
interface Describable
{
    public function description(): string;
}
```

In this example, `CatalogItem` implements this contract.

---

## Inheritance: Specialize the Model

`Book` inherits the shared model and provides its own details.

```php
class Book extends CatalogItem
{
    public function __construct(
        string $name,
        private string $author
    ) {
        parent::__construct($name);
    }
}
```

---

<!-- _class: light -->

## Polymorphism: Same Call, Different Details

`Book` and `Course` each provide their own implementation of `details()`.

```php
foreach ($items as $item) {
    echo $item->description();
}
```

The same method call produces a description suited to each article type.

---

## Encapsulation: Protect the Name

The property is private; outside code accesses it through a public method.

```php
class CatalogItem
{
    private string $name;

    public function name(): string
    {
        return $this->name;
    }
}
```

---

<!-- _class: light -->

## Static Members: Count Articles

The counter belongs to the class, not to a particular object.

```php
private static int $createdCount = 0;

public static function createdCount(): int
{
    return self::$createdCount;
}
```

Call it with `CatalogItem::createdCount()`.

---

## Run the Complete Example

Run the standalone PHP mini-catalog:

```powershell
php .\oop_example.php
```

Review the descriptions and article count, then adapt the domain to the technical project.
