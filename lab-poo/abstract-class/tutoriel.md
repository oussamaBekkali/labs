# Exercise: Abstract Classes

## Goal

Use an abstract class as a shared template for catalog items while requiring each concrete item to calculate its own final price. The item names and discount are fictional.

## File and execution

- File: `abstract-class/exemple.php`
- From the `lab-poo` directory, run: `php abstract-class\exemple.php`

## Walkthrough

1. `declare(strict_types=1)` enables strict scalar type checking.
2. `abstract class CatalogItem` stores a public name and a protected base price. The class cannot be instantiated directly.
3. `finalPrice()` is abstract: each concrete subclass must provide its own calculation.
4. `PhysicalItem` returns the base price. `DigitalItem` applies a fictional 10% discount.
5. The loop treats both objects as catalog items, calls their implemented method, and prints each result.

## Expected output

```text
Notebook: 12.00 EUR
E-book: 9.00 EUR
```

## Relation to the Laravel project

The existing [`Category` model](../../Laravel/app/Models/Category.php) extends Eloquent's `Model`. This standalone example demonstrates a PHP abstract base class; it does not replace or extend the application's model.

## Limitation or challenge

The discount rule is hard-coded for teaching. Add a validation rule for negative base prices and explain where an abstract base class is useful compared with an interface.
