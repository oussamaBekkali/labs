<?php

declare(strict_types=1);

interface ShippingMethod
{
    public function name(): string;

    public function fee(): float;
}

final class StandardShipping implements ShippingMethod
{
    public function name(): string
    {
        return 'Standard shipping';
    }

    public function fee(): float
    {
        return 5.0;
    }
}

final class StorePickup implements ShippingMethod
{
    public function name(): string
    {
        return 'Store pickup';
    }

    public function fee(): float
    {
        return 0.0;
    }
}

function printShippingFee(ShippingMethod $method): void
{
    echo $method->name() . ': ' . number_format($method->fee(), 2) . " EUR\n";
}

printShippingFee(new StandardShipping());
printShippingFee(new StorePickup());
