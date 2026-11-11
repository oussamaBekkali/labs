# Exercise: Handle an Exception

## Goal

Signal and handle a quantity that cannot be used to calculate a subtotal. The values in this example are fictional and are only for learning.

## File and execution

- File: `exceptions/exemple.php`
- From the `lab-php` directory, run: `php exceptions\exemple.php`

## Walkthrough

1. `declare(strict_types=1)` enables strict scalar type checking in this file.
2. `InvalidQuantityException` specializes `InvalidArgumentException` to identify this invalid input.
3. `calculateSubtotal()` receives a price and quantity. If the quantity is zero or negative, `throw` stops the calculation and sends the exception to the caller.
4. The first `try` block passes a valid quantity. The script formats and prints the subtotal.
5. The second `try` block passes `0`. The `catch` handles the exception and prints its message instead of letting the script stop with an uncaught error.

## Expected output

```text
Subtotal: 45.00 EUR
Order rejected: Quantity must be greater than zero.
```

## Relation to a Laravel application

A business rule can signal invalid input with a dedicated exception. In a real application, choose an appropriate handling boundary—for example, request validation—and do not turn every error into a success response.

## Limitation or challenge

This exercise does not validate the price. Add a check that rejects a zero or negative price, then write a test for each case.
