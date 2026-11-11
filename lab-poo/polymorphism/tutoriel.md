# Exercise: Polymorphism

## Goal

Call the same methods on different shipping options and observe each option's own behavior. The options and prices are fictional.

## File and execution

- File: `polymorphism/exemple.php`
- From the `lab-poo` directory, run: `php polymorphism\exemple.php`

## Walkthrough

1. `ShippingMethod` defines the methods that every shipping option must provide.
2. `StandardShipping` and `StorePickup` implement the same contract with different names and fees.
3. `printShippingFee()` accepts any `ShippingMethod`, so it does not need a separate version for each class.
4. The two calls pass different objects to the same function. The same method calls produce different results.

## Expected output

```text
Standard shipping: 5.00 EUR
Store pickup: 0.00 EUR
```

## Relation to the Laravel project

Polymorphism lets application code work with different implementations through a shared contract. This standalone example illustrates that design idea; it is not wired into the existing [`Category` model](../../Laravel/app/Models/Category.php).

## Limitation or challenge

The shipping fee is fixed. Add a shipping option whose fee depends on a package weight, keeping `printShippingFee()` unchanged.
