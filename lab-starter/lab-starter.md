---
marp: true
theme: default
size: 16:9
paginate: true
style: |
  section {
    font-family: Arial, sans-serif;
    background: #f8fafc;
    color: #202938;
    padding: 48px 64px;
    font-size: 25px;
  }
  h1, h2 {
    color: #1769aa;
  }
  h1 {
    font-size: 1.8em;
    margin-bottom: 0.65em;
  }
  h2 {
    font-size: 1.25em;
  }
  strong {
    color: #1769aa;
  }
  code {
    background: #e8f1f8;
    color: #143b5d;
    padding: 2px 6px;
    border-radius: 4px;
  }
  a {
    color: #1769aa;
  }
  table {
    font-size: 0.82em;
  }
  th {
    background: #e8f1f8;
  }
  blockquote {
    border-left: 5px solid #1769aa;
    color: #35445a;
    padding-left: 1em;
  }
---

<!-- _class: lead -->

# Lab-Starter

## Set Up Your Development Environment

**Git · Windows · Visual Studio Code**

---

# Plan

1. The problems
2. The solutions
3. Step-by-step setup instructions

---

# Common Setup Problems

| Challenge                                  | Tool or setting                                                                                          |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Project changes are not tracked            | Git                                                                                                      |
| Files such as `.gitignore` are not visible | Hidden items in File Explorer                                                                            |
| A file’s full name is unclear              | File name extensions in File Explorer                                                                    |
| Tasks are hard to find in the code         | [Better Todo Tree](https://marketplace.visualstudio.com/items?itemName=FanaticPythoner.better-todo-tree) |
| HTML changes require manual refresh        | [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)                 |

---

# Initialize a Git Repository

1. Open your project folder in VS Code.
2. Open **Source Control** with `Ctrl + Shift + G`.
3. Select **Initialize Repository**.

Or run this command in the project folder:

```bash
git init
```

Git can now track changes in the project. You still need to create commits to save snapshots.

---

# Show Hidden Files

Use this to find files such as `.gitignore` or `.env`:

1. Open File Explorer with `Win + E`.
2. Select **View** → **Show**.
3. Turn on **Hidden items**.

Hidden files will now appear in the project folder.

---

# Show File Name Extensions

File extensions help distinguish `README.md` from `README.md.txt`.

1. Open File Explorer with `Win + E`.
2. Select **View** → **Show**.
3. Turn on **File name extensions**.
4. Check the full file name, for example, `README.md`.

---

# Find TODOs with Better Todo Tree

Better Todo Tree searches code comments such as `TODO` and `FIXME` and displays them in a tree.

1. Open **Extensions** with `Ctrl + Shift + X`.
2. Search for [**Better Todo Tree**](https://marketplace.visualstudio.com/items?itemName=FanaticPythoner.better-todo-tree) by FanaticPythoner and install it.
3. Add task comments where work remains:

```js
// TODO: add input validation
// FIXME: correct this error
```

4. Open the Better Todo Tree view and select an item to jump to its line.

---

# Preview HTML with Live Server

1. Open **Extensions** with `Ctrl + Shift + X`.
2. Search for [**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) by Ritwick Dey and install it.
3. Open the project folder containing `index.html`.
4. Select **Go Live** in the VS Code status bar.
5. Save an edit and check the browser preview.

> Live Server serves static files; it does not run PHP code.
