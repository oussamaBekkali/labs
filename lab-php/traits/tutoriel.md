# Exercise: Share Behavior with a Trait

## Goal

Reuse the same timestamp behavior in two classes that do not need to inherit from each other. The names and objects in this example are fictional.

## File and execution

- File: `traits/exemple.php`
- From the `lab-php` directory, run: `php traits\exemple.php`

## Walkthrough

1. `Timestampable` declares a private property and two shared methods: record the creation time and check whether it exists.
2. `DateTimeImmutable` represents a date that cannot be changed after it is created.
3. `Product` and `CatalogCategory` each use `Timestampable` with `use Timestampable;`. They gain its methods without sharing a parent class.
4. The script creates both objects and calls `markCreated()` on each.
5. The final lines print whether a timestamp was recorded for each object.

## Expected output

```text
Keyboard: timestamp recorded
Accessories: timestamp recorded
```

## Relation to a Laravel application

PHP traits can collect behavior genuinely shared by multiple application classes. This script demonstrates the language by itself; it does not add behavior to the Laravel models in this repository.

## Limitation or challenge

A trait can make a class's dependencies less visible. Add a third type that uses the trait, then explain why this behavior is shared and should not instead be provided by a service.
