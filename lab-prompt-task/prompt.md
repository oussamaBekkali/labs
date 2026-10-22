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
    padding: 48px 64px;
  }
  h1, h2, h3 {
    color: #f9fafb;
    font-family: Anton, Impact, sans-serif;
  }
  h1 {
    font-size: 2.2em;
  }
  h2 {
    border-bottom: 2px solid #38bdf8;
    padding-bottom: 0.2em;
  }
  strong {
    color: #7dd3fc;
  }
  code {
    color: #bae6fd;
  }
  pre {
    background: #1f2937;
    border: 1px solid #374151;
    border-radius: 8px;
  }
  section.light {
    background: #f8fafc;
    color: #1f2937;
  }
  section.light h1,
  section.light h2,
  section.light h3 {
    color: #0f172a;
  }
  section.light strong {
    color: #0369a1;
  }
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

**Goal:** turn a vague request for a video-platform page into a clear, testable prompt for a beginner-friendly interface.

- **Scope:** one static `index.html` using HTML, Tailwind CSS, and vanilla JavaScript.
- **Audience:** a student learning web development.
- **Practice:** specify layout, responsiveness, sample content, interactions, constraints, and deliverables.
- **Out of scope:** video playback, authentication, APIs, and backend behavior.

---

<!-- _class: light -->

## Problems Encountered

The original request leaves important implementation choices open:

- “A frame” does not define the page sections or what each video card contains.
- “Like YouTube” is a reference, not a precise layout or feature specification.
- It does not say whether the page should adapt to mobile screens.
- “Use HTML, Tailwind, JS” does not clarify the Tailwind setup or the role of JavaScript.
- It does not limit scope, specify the output format, or prevent extra files and backend features.

---

## Solutions Implemented

| Ambiguity | Prompt improvement |
|:---|:---|
| Unclear page structure | Name the navbar, sidebar, search, and video grid. |
| Unclear card content | Require a thumbnail placeholder, title, channel, and view count. |
| Unclear technical setup | Specify Tailwind CDN and vanilla JavaScript. |
| Scope could grow | Exclude playback, authentication, and backend features. |
| Deliverable is unclear | Require one ready-to-run `index.html` and instructions to open it. |

Use a rubric to check the generated page against these requirements instead of relying on a vague “looks good” judgment.

---

<!-- _class: light -->

## Starting Prompt

> Context: I am a student learning web development.
>
> Objective: make me a frame for video platform page.
>
> Instructions: use HTML, Tailwind, JS.
>
> Expected result: an example of a video platform page like YouTube, just the framework, in one `index.html` page.

This captures the idea, but it does not define what “framework” means or how to verify the result.

---

## Improved Prompt

```text
Context: I am a student learning web development and practicing page layouts.

Objective: Create a static, YouTube-inspired video platform page as the visual
skeleton for a future project.

Requirements:
- Use semantic HTML, Tailwind CSS through its CDN, and vanilla JavaScript.
- Put all code in one ready-to-run file named index.html.
- Create a responsive navigation bar, sidebar, search bar, and video grid.
- Give each video card a thumbnail placeholder, title, channel name, and view count.
- Use fictional placeholder content; do not embed or play real videos.
- Keep the code simple, readable, and beginner-friendly.
- Use JavaScript only for a small interface interaction, such as toggling the sidebar.
- Do not add authentication, a backend, APIs, or any extra files.

Output the complete index.html in one HTML code block, then briefly explain how
to save it and open it in a browser.
```

---

<!-- _class: light -->

## Practical Example: Page Skeleton

The requested regions can be expressed as clear semantic HTML before filling in the visual details:

```html
<header>
  <!-- Brand, menu button, and search -->
</header>
<aside aria-label="Main navigation">
  <!-- Navigation links -->
</aside>
<main>
  <section aria-label="Videos">
    <article>
      <!-- Thumbnail, title, channel, and view count -->
    </article>
  </section>
</main>
```

Tailwind utility classes can then define the responsive grid, spacing, and colors without adding a separate stylesheet.

---

## Practical Example: Small Interaction

Keep JavaScript focused on the menu rather than implementing unrelated platform features:

```html
<button id="sidebar-toggle" aria-expanded="true">
  Toggle navigation
</button>
<aside id="sidebar">Navigation links</aside>

<script>
  const toggle = document.querySelector("#sidebar-toggle");
  const sidebar = document.querySelector("#sidebar");

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    sidebar.hidden = isExpanded;
  });
</script>
```

The `aria-expanded` value communicates the menu state to assistive technology as well as to the page logic.

---

<!-- _class: light -->

## Validate the Result

Check the generated `index.html` against the prompt:

1. **Single-file delivery:** all HTML, Tailwind CDN setup, and JavaScript are in `index.html`.
2. **Required regions:** navbar, sidebar, search, and a video grid are present.
3. **Complete cards:** every card has a placeholder thumbnail, title, channel, and view count.
4. **Responsive layout:** the grid and navigation adapt to narrow and wide screens.
5. **Limited behavior:** the sidebar interaction works; no backend, authentication, or video playback is included.
6. **Run check:** save the file and open it in a browser; verify the layout and menu interaction.

The companion example is [`index.html`](./index.html). It demonstrates the requested structure and includes responsive video cards and sidebar controls.
