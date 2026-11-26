<?php

declare(strict_types=1);

function applyDiscount(float $price, float $rate): float
{
    $discountAmount = $price * $rate;
    $finalPrice = $price - $discountAmount;

    return $finalPrice;
}

echo "Hello, Xdebug lab!\n";

$unitPrice = 80.00;
$discountRate = 0.10;
$finalPrice = applyDiscount($unitPrice, $discountRate);

echo 'Final price: ' . number_format($finalPrice, 2, '.', '') . "\n";
