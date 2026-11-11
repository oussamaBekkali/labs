<?php

declare(strict_types=1);

interface Identifiable
{
    public function identifier(): string;
}

final class CatalogProduct implements Identifiable
{
    public function __construct(
        public string $name,
        private string $sku
    ) {
    }

    public function identifier(): string
    {
        return $this->sku;
    }
}

$product = new CatalogProduct('Notebook', 'NB-101');

echo $product->name . ': ' . $product->identifier() . "\n";
