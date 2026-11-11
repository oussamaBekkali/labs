<?php

declare(strict_types=1);

trait Timestampable
{
    private ?DateTimeImmutable $createdAt = null;

    public function markCreated(): void
    {
        $this->createdAt = new DateTimeImmutable();
    }

    public function hasTimestamp(): bool
    {
        return $this->createdAt instanceof DateTimeImmutable;
    }
}

final class Product
{
    use Timestampable;

    public function __construct(public string $name)
    {
    }
}

final class CatalogCategory
{
    use Timestampable;

    public function __construct(public string $name)
    {
    }
}

$product = new Product('Keyboard');
$category = new CatalogCategory('Accessories');

$product->markCreated();
$category->markCreated();

echo $product->name . ': ' . ($product->hasTimestamp() ? "timestamp recorded\n" : "timestamp missing\n");
echo $category->name . ': ' . ($category->hasTimestamp() ? "timestamp recorded\n" : "timestamp missing\n");
