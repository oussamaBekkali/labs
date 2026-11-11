# Exercise: Inheritance

## Goal

Reuse a parent's property and method in a more specific child class. The product and SKU are fictional learning data.

## File and execution

- File: `inheritance/exemple.php`
- From the `lab-poo` directory, run: `php inheritance\exemple.php`

## Walkthrough

1. `CatalogRecord` is the parent class. Its constructor stores the name in a protected property.
2. `label()` returns that property and is available to child classes.
3. `ProductRecord extends CatalogRecord`, so it inherits the constructor behavior and `label()` method.
4. `parent::__construct($name)` initializes the part of the object defined by the parent class.
5. The final lines create a product and display the inherited label with its own SKU.

## Expected output

```text
Notebook (SKU: NB-101)
```

## Relation to the Laravel project

The existing [`Category` model](../../Laravel/app/Models/Category.php) extends Laravel's Eloquent `Model`. This small example demonstrates the PHP inheritance mechanism without modifying or booting the Laravel application.

## Limitation or challenge

Inheritance creates a close relationship between parent and child. Add a second child class and identify which state and behavior genuinely belong in the parent.
