# Exercise: Use a Project Namespace

## Goal

Import an application class with `use` and let Composer's autoloader find it. The category is fictional; the script does not connect to the database.

## File and execution

- File: `namespaces/exemple.php`
- From the `lab-php` directory, run: `php namespaces\exemple.php`
- Prerequisite: Laravel's Composer dependencies are installed (`Laravel/vendor/autoload.php` exists).

## Walkthrough

1. `declare(strict_types=1)` enables strict scalar type checking.
2. `use App\Models\Category;` imports the class by its full name so the script can refer to it as `Category`.
3. `require_once` loads the Laravel project's autoloader. The path starts in this file's directory and points to `Laravel/vendor/autoload.php`.
4. The project's PSR-4 configuration maps `App\\` to `Laravel/app/`. Therefore, `App\Models\Category` resolves to the class defined in [`Category.php`](../../Laravel/app/Models/Category.php).
5. The constructor creates an object with a category name. It does not write anything to the database.
6. The final two lines print the class's full name and the value of its `name` attribute.

## Expected output

```text
Class: App\Models\Category
Category: Accessories
```

## Relation to a Laravel application

The project declares the `App\\` to `app/` PSR-4 mapping in [`composer.json`](../../Laravel/composer.json). This exercise uses that actual mapping and existing model; it does not modify Laravel or boot the application.

## Limitation or challenge

If `vendor/autoload.php` is missing, install the dependencies from the `Laravel` directory with `composer install`. Challenge: find another model under `App\Models`, import it, and print its class name without creating a new class.
