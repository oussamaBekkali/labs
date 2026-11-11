<?php

function findCategory(int $id): array
{
    if ($id !== 1) {
        throw new RuntimeException("Category {$id} was not found.");
    }

    return ['id' => 1, 'name' => 'Books'];
}

try {
    $category = findCategory(99);
    echo $category['name'] . PHP_EOL;
} catch (RuntimeException $exception) {
    echo 'Unable to load category: ' . $exception->getMessage() . PHP_EOL;
}
