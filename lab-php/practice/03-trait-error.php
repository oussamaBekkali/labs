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
}

$category = new Category();
echo $category->displayName() . PHP_EOL;
