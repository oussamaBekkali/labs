---
marp: true
theme: gaia
paginate: true
size: 16:9
backgroundColor: #f8fafc
color: #1e293b
header: "Developer Starter Pack"
footer: "Tools and habits for a smoother workflow"
---

<!-- _class: lead -->

# A Better Developer Workflow

### Common challenges and practical tools to solve them

---

<!-- TODO: i need to make a presentation showing the best extensions to install -->

## Common Challenges

- Keeping track of work in progress
- Getting comfortable with a code editor
- Starting a local development server
- Finding syntax errors quickly
- Knowing what to work on next
- Reading and maintaining code
- Finding hidden files and file extensions

---

## Choose an Editor That Helps You

### Visual Studio Code

- A beginner-friendly editor with a large extension ecosystem
- Extensions can add useful features without changing your workflow
- Settings can be adapted to the way you work

> Start with a few tools you need. Add more as your projects grow.

---

## Run and Preview Your Work

### Live Server

- Starts a local server for static HTML, CSS, and JavaScript projects
- Automatically refreshes the browser when files change

### Use the right server for your project

- For Laravel, start the application with `php artisan serve`
- For other frameworks, follow their development-server instructions

---

## Find Errors Where They Happen

### Error Lens

Displays diagnostic messages beside the relevant line of code, making errors easier to notice and investigate.

### Remember

Error Lens presents messages from your editor and language tools; it does not replace fixing or testing the code.

---

## Keep Work Visible and Organized

### Track tasks

- Add `TODO` comments for unfinished work
- Use **TODO Highlight** to make those comments easier to find

### Track changes

- Use **Git** to record changes and review your project history
- Make small, focused commits as you work

---

## Make Code Easier to Read

- Use **Prettier** to format supported files consistently
- For PHP, install **PHP Intelephense** for language features and diagnostics
- Keep formatting consistent across the project

> Clear, consistently formatted code is easier to read, review, and maintain.

---

## Find Hidden Project Files

### In Visual Studio Code

If `.git` is hidden in the Explorer, open **Settings**, search for **Files: Exclude**, and remove the `**/.git` exclusion if you need to view it.

### In Windows File Explorer

Open **View → Show**, then enable **File name extensions** and **Hidden items**.

---

<!-- _class: lead -->

# A Smoother Workflow Starts Small

Choose an editor, make errors visible, format your code, and track your work with Git.

### Add tools when they solve a real problem.
