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

# lab-architecture

---

<!-- _class: light -->

## Need for the lab

- PHP code becomes difficult to read when responsibilities are mixed together.
- A structured application is easier to maintain and evolve.
- This lab introduces a clearer organization of components.

---

## 3-tier architecture

- Presentation: the interface and user interactions.
- Business logic: rules and application processing.
- Data: storage and access to information.

Separation avoids mixing everything in one place.

---

<!-- _class: light -->

## DAO: data access

- The DAO centralizes queries and persistence operations.
- It knows how to read, write, and filter data.
- It does not decide the business rules of the application.

Example: `UserDao::findAll()`.

---

## Service: business logic

- The service applies the rules of the application.
- It validates data before processing.
- It coordinates DAO calls without doing the persistence work itself.

Example: `UserService::createUser()`.

---

<!-- _class: light -->

## BaseService: shared methods

- The base class groups common methods.
- It reduces duplication across multiple services.
- It keeps the project structure consistent.

Example: `findAll()`, `save()`, or `delete()`.

---

## Example flow

```text
Controller
    ↓
 Service
    ↓
   DAO
    ↓
Database
```

Each layer keeps its responsibility.

---

<!-- _class: light -->

## Expected benefits

- More readable code.
- Business rules better isolated.
- Easier reuse between services.
- Simpler tests to write and maintain.

---

## Good practices

- A service should not contain all the SQL logic.
- A DAO should not decide the complete business rules.
- Layer separation keeps the project more robust.

---

<!-- _class: light -->

## Key takeaway

- 3 tiers: interface, business, data.
- DAO: data access.
- Service: application logic.
- BaseService: common methods.

A clear separation of responsibilities is the key to maintainable code.
