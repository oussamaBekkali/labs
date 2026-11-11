# Exercise: Interfaces

## Goal

Define a small contract that a class must fulfill. The product and SKU are fictional learning data.

## File and execution

- File: `interfaces/exemple.php`
- From the `lab-poo` directory, run: `php interfaces\exemple.php`

## Walkthrough

1. `interface Identifiable` declares the `identifier()` method signature without implementing it.
2. `CatalogProduct implements Identifiable` promises to provide that method.
3. The constructor stores the product name and a private SKU.
4. `identifier()` returns the SKU through a public operation instead of exposing the property.
5. The last two lines create an object and print its name and identifier.

## Expected output

```text
Notebook: NB-101
```

## Relation to the Laravel project

Laravel applications can use interfaces to define contracts between services and their implementations. The existing [`Category` model](../../Laravel/app/Models/Category.php) is a concrete Eloquent model, not an interface; this exercise is standalone and adds no project contract.

## Limitation or challenge

There is only one implementation. Create a second class that implements `Identifiable` and use a function typed to the interface to print either identifier.
