# Laravel Lab 2 --- Create and Display Categories

This exercise uses one model (`Category`) and one database table
(`categories`) to display a list of categories.

## 1. Terminal commands

Run these commands from the project folder:

``` powershell
cd C:\Users\Solicode\Desktop\task-manager

# Create the model and its migration
php artisan make:model Category -m

# Run pending migrations to create the categories table
php artisan migrate

# Create the controller
php artisan make:controller CategoryController

# Start the development server
php artisan serve
```

If you already created the model, migration, or controller, do not
create them again. Continue with the existing files.

## 2. Migration: define the table

Open the migration file in `database/migrations/` whose name ends with
`create_categories_table.php`.

``` php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
```

The table contains: - `id`: primary key - `name`: category name -
`created_at` and `updated_at`: timestamps managed by Laravel

**Important:** If the `categories` table already exists but the
migration is marked `Pending`, do not repeatedly run `migrate` or delete
tables blindly. This can happen if a migration was run and then renamed.
Check `php artisan migrate:status` and fix the migration history
carefully.

## 3. Model: `app/Models/Category.php`

``` php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name'];
}
```

`$fillable` allows Laravel's `create()` method to assign the `name`
field.

## 4. Add sample categories

Run:

``` powershell
php artisan tinker
```

Then enter these commands one at a time:

``` php
App\Models\Category::create(['name' => 'Web Development']);
App\Models\Category::create(['name' => 'Design']);
App\Models\Category::create(['name' => 'Programming']);
```

Exit Tinker:

``` php
exit
```

If you already added these categories, do not run the commands again
unless you want duplicate records.

## 5. Controller: `app/Http/Controllers/CategoryController.php`

``` php
<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return view('categories', compact('categories'));
    }
}
```

-   `Category::all()` retrieves all category records.
-   `compact('categories')` passes the `$categories` variable to the
    view.

## 6. Route: `routes/web.php`

Add the controller import with the other `use` statements:

``` php
use App\Http\Controllers\CategoryController;
```

Then add this route:

``` php
Route::get('/categories', [CategoryController::class, 'index']);
```

Do not duplicate the existing `Route` import or other routes.

## 7. View: `resources/views/categories.blade.php`

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Categories</title>
</head>
<body>
    <h1>Categories</h1>

    <ul>
        @foreach ($categories as $category)
            <li>{{ $category->name }}</li>
        @endforeach
    </ul>
</body>
</html>
```

-   `@foreach` loops through the categories.
-   `{{ $category->name }}` displays each category name safely.

## 8. Test it

With the server running, open:

`http://127.0.0.1:8000/categories`

You should see the category names in a list.

## Application flow

``` text
Browser
  → routes/web.php
  → CategoryController
  → Category model
  → categories database table
  → categories.blade.php
  → Browser
```
