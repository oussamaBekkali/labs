<?php

namespace App\Models {
    class Category
    {
        public function name(): string
        {
            return 'Books';
        }
    }
}

namespace App\Http\Controllers {
    $category = new Category();
    echo $category->name() . PHP_EOL;
}
