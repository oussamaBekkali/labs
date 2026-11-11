# Exercise: Static Properties and Methods

## Goal

Use a property and a method that belong to the class itself, not to an individual object. The generated codes are fictional.

## File and execution

- File: `static-members/exemple.php`
- From the `lab-poo` directory, run: `php static-members\exemple.php`

## Walkthrough

1. `private static int $nextNumber` stores one counter shared by the class.
2. `public static function next()` can be called without creating a `CatalogCode` object.
3. `self::$nextNumber` accesses the class-level property.
4. The post-increment returns the current number and advances it for the next call.
5. The final two calls print consecutive codes.

## Expected output

```text
CAT-001
CAT-002
```

## Relation to the Laravel project

Laravel provides static-style APIs, including model query helpers, but this counter is only an in-memory PHP demonstration. The existing [`Category` model](../../Laravel/app/Models/Category.php) is not modified or used by the example.

## Limitation or challenge

The counter resets when the PHP process ends and is not safe for persistent identifiers. Explain why a database-generated key is more appropriate for product records stored by an application.
