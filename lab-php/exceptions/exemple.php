<?php

declare(strict_types=1);

final class InvalidQuantityException extends InvalidArgumentException
{
}

function calculateSubtotal(float $unitPrice, int $quantity): float
{
    if ($quantity <= 0) {
        throw new InvalidQuantityException('Quantity must be greater than zero.');
    }

    return $unitPrice * $quantity;
}

try {
    $subtotal = calculateSubtotal(15.0, 3);
    echo 'Subtotal: ' . number_format($subtotal, 2, '.', ',') . " EUR\n";
} catch (InvalidQuantityException $exception) {
    echo 'Order rejected: ' . $exception->getMessage() . "\n";
}

try {
    calculateSubtotal(15.0, 0);
} catch (InvalidQuantityException $exception) {
    echo 'Order rejected: ' . $exception->getMessage() . "\n";
}
