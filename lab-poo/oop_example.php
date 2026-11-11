<?php

declare(strict_types=1);

interface Describable
{
    public function description(): string;
}

abstract class CatalogItem implements Describable
{
    private static int $createdCount = 0;

    public function __construct(private string $name)
    {
        self::$createdCount++;
    }

    public function name(): string
    {
        return $this->name;
    }

    public static function createdCount(): int
    {
        return self::$createdCount;
    }

    abstract protected function details(): string;

    public function description(): string
    {
        return $this->name . ' — ' . $this->details();
    }
}

class Book extends CatalogItem
{
    public function __construct(string $name, private string $author)
    {
        parent::__construct($name);
    }

    protected function details(): string
    {
        return 'book by ' . $this->author;
    }
}

class Course extends CatalogItem
{
    public function __construct(string $name, private int $durationHours)
    {
        parent::__construct($name);
    }

    protected function details(): string
    {
        return 'course lasting ' . $this->durationHours . ' hours';
    }
}

$articles = [
    new Book('Practical PHP', 'A. Example'),
    new Course('OOP in PHP', 3),
];

foreach ($articles as $item) {
    echo $item->description() . PHP_EOL;
}

echo 'Catalog items created: ' . CatalogItem::createdCount() . PHP_EOL;
