<?php

trait HasDisplayName
{
    public function displayName(): string
    {
        return 'Books';
    }
}

class Category
{
    use HasDisplayName;
}

$category = new Category();
echo $category->displayName() . PHP_EOL;
