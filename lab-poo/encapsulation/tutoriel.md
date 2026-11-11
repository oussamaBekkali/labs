# Exercise: Encapsulation

## Goal

Protect an object's state and allow changes only through methods that validate them. The stock counts are fictional.

## File and execution

- File: `encapsulation/exemple.php`
- From the `lab-poo` directory, run: `php encapsulation\exemple.php`

## Walkthrough

1. `Stock` stores its quantity in a private property. Code outside the class cannot change that property directly.
2. The constructor rejects a negative initial quantity before storing it.
3. `quantity()` provides read-only access to the current count.
4. `remove()` checks that the requested amount is positive and available before changing the state.
5. The final lines create a stock of five units, remove two through the public method, and print the remaining count.

## Expected output

```text
Available units: 3
```

## Relation to the Laravel project

Laravel models expose data through Eloquent's model API and control mass assignment with `$fillable`; the existing [`Category` model](../../Laravel/app/Models/Category.php) is an example. This exercise demonstrates a simple private state and is not an application model.

## Limitation or challenge

The example has no method for adding stock. Add one that rejects zero or negative amounts, then test both a valid and invalid update.
