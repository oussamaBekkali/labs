---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    background: #111827;
    color: #f3f4f6;
    font-family: Inter, system-ui, sans-serif;
    font-size: 28px;
    padding: 48px 64px;
  }
  section.light {
    background: #f8fafc;
    color: #1f2937;
  }
  h1, h2 { color: #7dd3fc; }
  section.light h1, section.light h2 { color: #0369a1; }
  strong { color: #7dd3fc; }
  section.light strong { color: #0369a1; }
  pre { font-size: 0.72em; }
---

# Improving a Video Platform Prompt

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

This lab turns a vague page request into a clear, testable prompt.

- Build a static video-platform page for a beginner.
- Use HTML, Tailwind CSS, and vanilla JavaScript.
- Specify content, layout, behavior, and deliverables.
- Keep playback, APIs, and backend work out of scope.

---

<!-- _class: light -->

## Problems Encountered

The starting prompt asks for a page “like YouTube,” but leaves key decisions open:

- Page regions and video-card content are unspecified.
- Responsive behavior and JavaScript purpose are unclear.
- Setup, output format, and scope are not defined.

---

## Solutions Implemented

The improved prompt makes the request verifiable:

- Names the navbar, sidebar, search, and video grid.
- Defines card fields and a responsive layout.
- Specifies Tailwind CDN and vanilla JavaScript.
- Requires one file and excludes backend features.

---

<!-- _class: light -->

## Starting prompt

> Context: I am a student learning web development.
>
> Objective: make me a frame for video platform page.
>
> Instructions: use HTML, Tailwind, JS.
>
> Expected result: an example of a video platform page like YouTube, just the framework, in one `index.html` page.

The idea is clear, but “frame” and “framework” are not precise deliverables.

---

## Improved prompt: layout

```text
Context: I am a student learning web development and practicing page layouts.

Objective: Create a static, YouTube-inspired page as a visual skeleton.

Requirements:
- Use semantic HTML, Tailwind CSS through its CDN, and vanilla JavaScript.
- Put all code in one ready-to-run file named index.html.
- Create a responsive navigation bar, sidebar, search bar, and video grid.
```

---

<!-- _class: light -->

## Improved prompt: content and scope

```text
- Give each video card a thumbnail placeholder, title, channel, and view count.
- Use fictional placeholder content; do not embed or play real videos.
- Keep the code simple, readable, and beginner-friendly.
- Use JavaScript only for a small interaction, such as toggling the sidebar.
- Do not add authentication, a backend, APIs, or extra files.
```

---

## Improved prompt: output

```text
Output the complete index.html in one HTML code block.
Then briefly explain how to save it and open it in a browser.
```

Clear output instructions reduce ambiguity about what the response should contain.

---

<!-- _class: light -->

## Express the page structure

Semantic regions make the requested layout concrete.

```html
<header><!-- Brand, menu, and search --></header>
<aside aria-label="Main navigation">
  <!-- Navigation links -->
</aside>
<main>
  <section aria-label="Videos">
    <article><!-- Thumbnail and video details --></article>
  </section>
</main>
```

Tailwind classes can supply responsive layout and styling.

---

## Keep the interaction focused

The example interaction toggles the navigation without adding platform features.

```html
<button id="sidebar-toggle" aria-expanded="true">
  Toggle navigation
</button>
<aside id="sidebar">Navigation links</aside>
```

---

<!-- _class: light -->

## Toggle the sidebar

```javascript
const toggle = document.querySelector("#sidebar-toggle");
const sidebar = document.querySelector("#sidebar");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  sidebar.hidden = expanded;
});
```

The `aria-expanded` value exposes the menu state to assistive technology.

---

## Validate the generated page

- One ready-to-run `index.html` contains all code.
- Required regions and video-card fields are present.
- Layout adapts to narrow and wide screens.
- Sidebar interaction works; excluded features remain absent.
- Open the file in a browser and verify the result.

The companion [`index.html`](./index.html) demonstrates the requested layout and controls.
