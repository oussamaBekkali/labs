<?php

declare(strict_types=1);

final class CatalogCode
{
    private static int $nextNumber = 1;

    public static function next(): string
    {
        return sprintf('CAT-%03d', self::$nextNumber++);
    }
}

echo CatalogCode::next() . "\n";
echo CatalogCode::next() . "\n";
