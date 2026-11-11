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

# Lab 02: Understand the MVC Architecture

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

This lab explains the Model–View–Controller (MVC) architecture and its use in Laravel.

- Understand responsibility separation.
- Identify the roles of the model, view, and controller.
- Follow an HTTP request through a Laravel application.

---

<!-- _class: light -->

## Problems Encountered

No technical lab incident is reported.

The material describes unstructured code as the context: when one file mixes SQL, business logic, and HTML, it becomes harder to change.

---

## Solutions Implemented

MVC splits work across components with distinct responsibilities:

- The model works with data and business rules.
- The view presents the data.
- The controller coordinates the request and response.

---

<!-- _class: light -->

## The model

The model represents the domain data and its access.

- In Laravel, Eloquent connects models to tables.
- Models can define relationships between entities.
- The model does not generate the HTML interface.

---

## The view

The view presents data to the user.

- Laravel uses Blade for server-side views.
- A view contains HTML and presentation directives.
- Data is prepared before rendering.
- A view does not query the database directly.

---

<!-- _class: light -->

## The controller

The controller receives a request and coordinates its processing.

1. Receives data after routing.
2. Validates inputs as needed.
3. Requests data from the model.
4. Returns a view or another response.

---

## MVC request flow

```text
Browser → Route → Controller
                         ↓
                      Model
                         ↕
                   Database
                         ↓
Controller → View → HTTP Response → Browser
```

The controller coordinates the flow; each layer keeps its role.

---

<!-- _class: light -->

## Where to find the components

| Component | Laravel location |
| :-- | :-- |
| Model | `app/Models/` |
| Controller | `app/Http/Controllers/` |
| Blade view | `resources/views/` |
| Web routes | `routes/web.php` |

---

## Keep the controller light

A controller that does too much centralizes unrelated tasks.

- Extract complex business rules from the controller.
- Avoid long processing methods.
- Delegate data access to the appropriate models or services.

---

<!-- _class: light -->

## Keep the view focused on presentation

A view should display data, not manage persistence.

- Avoid database queries in Blade.
- Keep views limited to simple conditions and loops.
- Prepare the data before rendering.

---

## Avoid an anemic model

An empty model can leave all business logic in the controllers.

- Place data-related behaviors in the appropriate layer.
- Use Eloquent relationships and scopes when appropriate.
- Keep responsibilities explicit.

---

<!-- _class: light -->

## Benefits of MVC

- Code is easier to locate and maintain.
- Responsibilities make parallel work easier.
- Components can be tested separately.
- A change in one layer affects the others less.

---

## Key takeaways

- The model handles domain data and rules.
- The view displays prepared information.
- The controller orchestrates HTTP processing.
- Separation of responsibilities improves maintainability.

---

<!-- _class: light -->

## Next steps

The practical exercises are in [`practical.md`](./practical.md).
