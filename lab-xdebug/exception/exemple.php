<?php

declare(strict_types=1);

function divide(float $dividend, float $divisor): float
{
    if ($divisor === 0.0) {
        throw new InvalidArgumentException('The divisor must not be zero.');
    }

    return $dividend / $divisor;
}

try {
    $result = divide(12.0, 0.0);
    echo 'Result: ' . $result . "\n";
} catch (InvalidArgumentException $exception) {
    echo 'Caught exception: ' . $exception->getMessage() . "\n";
}
