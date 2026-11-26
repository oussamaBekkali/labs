<?php

declare(strict_types=1);

$unitPrice = 19.95;
$quantity = 3;
$subtotal = $unitPrice * $quantity;
$taxRate = 0.20;
$total = $subtotal * (1 + $taxRate);

echo 'Total with tax: ' . number_format($total, 2, '.', '') . "\n";
