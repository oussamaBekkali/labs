# PHP OOP Lab

This lab introduces and tests object-oriented programming concepts in PHP that are not yet covered in the tutorials.

## Objectives

For each concept, explain its purpose and study a practical example:

- **Abstract class**: create a shared model that cannot be instantiated directly.
- **Interface**: define the methods a class must provide.
- **Inheritance**: reuse and specialize another class's properties and methods.
- **Polymorphism**: call the same method on objects with different behaviors.
- **Encapsulation**: control access to an object's data.
- **Static members**: associate a property or method with a class rather than an instance.

## Requirements and Tools

- PHP command-line interface, version 8.0 or later for these examples.
- A text editor and a terminal.

The PHP version available in the workspace when this lab was prepared is PHP 8.5.10. The technical project for these examples was not specified, so the examples use a standalone mini-catalog and should be adapted to the relevant project.

## Quick Start

From the `lab-poo` directory, check PHP and run the examples:

```powershell
php -v
php .\hello.php
php .\oop_example.php
```

The first script is an executable Hello World. The second demonstrates all six concepts in a catalog example.

## Hello World

The `hello.php` file contains the smallest executable example in this lab:

```php
<?php

echo "Hello, OOP in PHP!" . PHP_EOL;
```

Run `php .\hello.php`. It should print `Hello, OOP in PHP!`.

## Practical Example: Mini-Catalog

The `oop_example.php` file uses different types of catalog items to demonstrate:

- the `Describable` contract and the abstract `CatalogItem` model;
- the `Book` and `Course` classes, which inherit from `CatalogItem`;
- calling `description()` the same way on different item types;
- private properties and controlled access to the item name;
- a static counter for created catalog items.

This mini-catalog is a learning example, not a description of the student's technical project. Adapt its classes and examples to the actual project domain.

## Problems Encountered

The stated need is to learn PHP concepts that are not yet covered in the tutorials. Other concrete problems encountered: [To be completed by the student].

## Proposed Solution

[To be completed by the student: describe the solution actually proposed.]
