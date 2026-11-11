<?php

declare(strict_types=1);

abstract class CatalogItem
{
    public function __construct(
        public string $name,
        protected float $basePrice
    ) {
    }

    abstract public function finalPrice(): float;
}

final class PhysicalItem extends CatalogItem
{
    public function finalPrice(): float
    {
        return $this->basePrice;
    }
}

final class DigitalItem extends CatalogItem
{
    public function finalPrice(): float
    {
        return $this->basePrice * 0.9;
    }
}

$items = [
    new PhysicalItem('Notebook', 12.0),
    new DigitalItem('E-book', 10.0),
];

foreach ($items as $item) {
    echo $item->name . ': ' . number_format($item->finalPrice(), 2) . " EUR\n";
}
