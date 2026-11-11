---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 28px;
    padding: 48px 64px;
    background: #101827;
    color: #e8eef7;
  }
  section.light {
    background: #f5f8fc;
    color: #202b3c;
  }
  h1, h2 { color: #56c2d6; }
  section.light h1, section.light h2 { color: #1769aa; }
  strong { color: #73d6bd; }
  section.light strong { color: #1769aa; }
  pre { font-size: 0.75em; }
---

# Lab 01: Understand Laravel

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

This lab introduces Laravel, an open-source PHP web framework.

- Understand its role in building web applications.
- Discover MVC, Artisan, Eloquent, and Blade.
- Place routes and migrations in the project structure.

---

<!-- _class: light -->

## Problems Encountered

No blocking technical issue is reported for this lab.

Unstructured PHP code is presented as the motivation: mixing HTML, SQL, and logic makes maintenance harder.

---

## Solutions Implemented

The lab presents Laravel as a structured development framework:

- MVC separates the responsibilities of the application.
- Artisan automates common project tasks.
- Eloquent and Blade provide tools for data and views.

---

<!-- _class: light -->

## Why use a framework?

Without structure, a script can mix presentation, processing, and database access.

- Responsibilities become difficult to separate.
- Changes are harder to maintain.
- A framework provides conventions and reusable components.

---

## Laravel in brief

- Full-stack open-source PHP web framework.
- Follows conventions to reduce repetitive configuration.
- Provides tools for routing, data, and views.
- Encourages organized and expressive application development.

---

<!-- _class: light -->

## MVC: three responsibilities

- **Model:** data and business rules.
- **View:** presentation of information.
- **Controller:** coordinates the request, data, and response.

Laravel uses Eloquent and Blade mainly for these components.

---

## Laravel request flow

```text
Browser → Route → Middleware → Controller
                                  ↓
                           Model / Eloquent
                                  ↓
                            Database
                                  ↓
Controller → Blade View → HTTP Response
```

The route directs the request; the controller prepares the response.

---

<!-- _class: light -->

## Artisan: project commands

Artisan is Laravel's command-line interface.

```bash
php artisan make:model Article
php artisan migrate
```

The available commands depend on the Laravel version and project.

---

## Eloquent: querying data

An Eloquent model can query a table through a PHP API.

```php
$users = User::where('active', true)
    ->latest()
    ->get();
```

Eloquent uses parameterized queries for values, but inputs should always be validated.

---

<!-- _class: light -->

## Blade: display a list

Blade provides directives for rendering data passed to the view.

```blade
@foreach ($articles as $article)
    <article>
        <h2>{{ $article->title }}</h2>
        <p>{{ $article->description }}</p>
    </article>
@endforeach
```

Escaping `{{ }}` helps display text without interpreting HTML.

---

## Migrations and seeders

- Migrations describe database schema changes.
- They make it possible to share those changes through code.
- Seeders insert sample or test data.

---

<!-- _class: light -->

## The Laravel ecosystem

- **Composer:** PHP dependency management.
- **Routing and middleware:** HTTP request processing.
- **Eloquent and migrations:** data access and schema evolution.
- **Blade:** server-side rendering for views.

---

<!-- _class: light -->

## Ecosystem tools

- **Breeze and Jetstream:** starter options for authentication.
- **Sanctum:** authentication for apps and APIs.
- **Livewire:** interactive interfaces with Laravel.
- **Inertia:** connects Laravel to frontend frameworks.

Features vary by version and project needs.

---

## Key takeaways

- Laravel structures PHP web application development.
- MVC separates data, presentation, and coordination.
- Artisan, Eloquent, Blade, and migrations serve distinct needs.

---

<!-- _class: light -->

## Next steps

The lab covers the concepts and exercises in:

- [`introduction.md`](./introduction.md)
- [`definition.md`](./definition.md)
- [`practical.md`](./practical.md)
