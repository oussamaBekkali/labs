<?php

declare(strict_types=1);

use App\Models\Category;

require_once __DIR__ . '/../../Laravel/vendor/autoload.php';

$category = new Category(['name' => 'Accessories']);

echo 'Class: ' . $category::class . "\n";
echo 'Category: ' . $category->name . "\n";
