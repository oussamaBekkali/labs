<?php

declare(strict_types=1);

function formatReceipt(float $unitPrice, int $quantity): string
{
    $subtotal = $unitPrice * $quantity;

    return 'Subtotal: ' . number_format($subtotal, 2, '.', '');
}

function calculateOrder(float $unitPrice, int $quantity): string
{
    return formatReceipt($unitPrice, $quantity);
}

$receipt = calculateOrder(12.00, 3);

echo $receipt . "\n";
