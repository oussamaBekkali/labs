---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: Inter, "Segoe UI", sans-serif;
    background: #101827;
    color: #e8eef7;
    padding: 48px 64px;
    font-size: 27px;
  }
  section.light {
    background: #f5f8fc;
    color: #202b3c;
  }
  h1, h2 { color: #56c2d6; }
  section.light h1, section.light h2 { color: #1769aa; }
  strong { color: #73d6bd; }
  section.light strong { color: #1769aa; }
  pre { font-size: 0.76em; }
---

# JavaScript Error Lab

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

This lab studies JavaScript errors from a blog app connected to a PHP API.

- Read the error message and locate the source.
- Inspect code and network responses.
- Fix issues caused by missing data, module scope, and requests.

---

<!-- _class: light -->

## Problems Encountered

The examples cover five common problems:

- Reading a property on an undefined value.
- Calling a function that is not available in a module.
- Parsing HTML as JSON.
- A blocked network request or unreachable server.
- An unexpected API response structure.

---

## Solutions Implemented

The fixes show how to:

- Check values before reading properties.
- Attach listeners in the module scope.
- Verify the HTTP status before parsing JSON.
- Diagnose server and CORS issues with browser tools.
- Validate the response structure before rendering it.

---

<!-- _class: light -->

## Debugging method

1. Read the error type and the affected line.
2. Inspect values and runtime state.
3. Form a hypothesis about the cause.
4. Fix the issue and test again.

---

## Console and Sources

In browser DevTools:

- **Console** shows messages and stack traces.
- **Sources** lets you add breakpoints.
- Check the call stack and variables at the failure point.

---

<!-- _class: light -->

## Inspect an API request

In the **Network** tab, review the `fetch` request:

- Check the URL and HTTP status.
- Read the headers and response body.
- Inspect the payload sent by the browser.
- An HTML response is not JSON.

---

## HTTP status basics

- `200` / `201`: request succeeded / resource created.
- `400`: invalid request.
- `404`: route or resource not found.
- `422`: validation rejected the payload.
- `500`: server error.

---

## Error 1: missing property

The code reads `author` without checking it exists:

```javascript
document.getElementById("author-name").textContent =
  article.author.name;
```

If `author` is missing, the access to `.name` throws a `TypeError`.

---

<!-- _class: light -->

## Fix error 1

Check the response and provide a fallback value:

```javascript
if (!article || typeof article !== "object") return;

document.getElementById("article-title").textContent =
  article?.title ?? "Untitled";
document.getElementById("author-name").textContent =
  article?.author?.name ?? "Anonymous author";
```

---

## Error 2: function out of scope

An inline HTML handler does not automatically see a function in an ES module.

```html
<button onclick="fetchPosts('technology')">
  Show Technology
</button>
<script type="module" src="./js/app.js"></script>
```

The module does not attach `fetchPosts` to `window`.

---

<!-- _class: light -->

## Fix error 2

Attach the event listener inside the module:

```javascript
document.querySelectorAll(".btn-category").forEach((button) => {
  button.addEventListener("click", (event) => {
    fetchPosts(event.currentTarget.dataset.category);
  });
});
```

This avoids relying on a global inline call.

---

## Error 3: HTML is read as JSON

A PHP error page can be returned instead of JSON. Then `response.json()` fails.

```javascript
const response = await fetch("http://localhost:8000/api/articles");
const articles = await response.json();
```

The original version does not check `response.ok`.

---

<!-- _class: light -->

## Fix error 3

Validate the status before parsing JSON:

```javascript
try {
  const response = await fetch(url, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  renderArticles(await response.json());
} catch (error) {
  console.error("Load failed:", error.message);
  showErrorMessageToUser("Unable to load articles.");
}
```

---

## Error 4: network failure or CORS

`Failed to fetch` can mean a stopped server or an unauthorized origin.

- Frontend: `http://localhost:3000`
- API: `http://localhost:8000`
- Use the Console and Network tabs to distinguish causes.

---

<!-- _class: light -->

## Fix error 4

Start the PHP server before making requests:

```bash
php -S localhost:8000 -t public
```

For Laravel, the equivalent is:

```bash
php artisan serve --port=8000
```

---

## CORS fix

Allow the frontend origin explicitly in the PHP response:

```php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}
```

---

<!-- _class: light -->

## Error 5: unexpected response shape

The API can return an object with `data`, not a direct array.

```json
{
  "status": "success",
  "data": [{ "id": 1, "title": "First article" }],
  "total": 1
}
```

Calling `posts.map()` on that object throws a `TypeError`.

---

## Fix error 5

Validate the array at the root or inside `data`:

```javascript
const result = await response.json();
const postsList = Array.isArray(result)
  ? result
  : Array.isArray(result?.data) ? result.data : [];

const html = postsList.map((post) => `
  <article><h3>${post.title ?? "Title unavailable"}</h3></article>
`).join("");
```

---

<!-- _class: light -->

## Handle empty results

If the API returns no articles, show a clear fallback message:

```javascript
if (postsList.length === 0) {
  document.querySelector("#feed").textContent = "No articles published yet.";
  return;
}
```

---

## Key takeaways

- Error messages often reveal both the cause and location.
- Network tools help inspect status codes and payloads.
- Validate data before rendering or transforming it.
- Test failure cases as well as the happy path.
