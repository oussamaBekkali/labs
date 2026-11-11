<?php

declare(strict_types=1);

final class Stock
{
    private int $quantity;

    public function __construct(int $initialQuantity)
    {
        if ($initialQuantity < 0) {
            throw new InvalidArgumentException('Initial quantity cannot be negative.');
        }

        $this->quantity = $initialQuantity;
    }

    public function quantity(): int
    {
        return $this->quantity;
    }

    public function remove(int $amount): void
    {
        if ($amount <= 0 || $amount > $this->quantity) {
            throw new InvalidArgumentException('Removal amount is invalid.');
        }

        $this->quantity -= $amount;
    }
}

$stock = new Stock(5);
$stock->remove(2);

echo 'Available units: ' . $stock->quantity() . "\n";
