# Laravel Lab 1 --- Hello World

## 1. Terminal commands

```powershell
# Go to the folder where you want to create the project
cd C:\Users\Solicode\Desktop

# Create a Laravel project (only if you have not already created it)
laravel new task-manager

# Enter the project folder
cd task-manager

# Generate the application key
php artisan key:generate

# Run database migrations (after configuring the database, if needed)
php artisan migrate

# Start the Laravel development server
php artisan serve
```

Open the URL shown in the terminal, usually `http://127.0.0.1:8000`.

> If the `task-manager` project already exists, do not run
> `laravel new task-manager` again. Just use
> `cd C:\Users\Solicode\Desktop\task-manager`.

## 2. Create the view

Create this file:

`resources/views/hello.blade.php`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

## 3. Edit the route

Open `routes/web.php`. Keep the existing Laravel routes and add this
route:

```php
use Illuminate\Support\Facades\Route;

Route::get('/hello', function () {
    return view('hello');
});
```

If the file already has `use Illuminate\Support\Facades\Route;` or the
`/` route, do not duplicate them. Just add the `/hello` route.

## 4. Test it

With `php artisan serve` running, open:

`http://127.0.0.1:8000/hello`

The page should display **Hello World!**

## What the code means

- `Route::get('/hello', ...)` responds to a browser GET request at
  `/hello`.
- `view('hello')` tells Laravel to load
  `resources/views/hello.blade.php`.
- Blade is Laravel's templating engine; this simple view uses ordinary
  HTML.
