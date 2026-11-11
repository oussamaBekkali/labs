<?php

declare(strict_types=1);

class CatalogRecord
{
    public function __construct(protected string $name)
    {
    }

    public function label(): string
    {
        return $this->name;
    }
}

final class ProductRecord extends CatalogRecord
{
    public function __construct(
        string $name,
        public string $sku
    ) {
        parent::__construct($name);
    }
}

$product = new ProductRecord('Notebook', 'NB-101');

echo $product->label() . ' (SKU: ' . $product->sku . ")\n";
