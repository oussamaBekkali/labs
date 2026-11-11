# Learning Labs Repository

by oussama bekkali

This repository centralizes practical training labs and teaching materials for modern web development. It brings together Laravel, PHP, JavaScript, Git, Markdown, Marp, and AI-assisted workflows in a structured learning environment.

Each lab is designed to provide a progressive path from concepts to practice, with clear goals and presentation support.

---

## Published Marp Presentations

The following presentations are intended for GitHub Pages deployment:

- [Lab 01 - Understand Laravel](https://oussamaBekkali.github.io/labs/lab-01-comprendre-laravel/presentation.html)
- [Lab 02 - MVC Architecture](https://oussamaBekkali.github.io/labs/lab-02-architecture-mvc/presentation.html)
- [Lab Agent](https://oussamaBekkali.github.io/labs/lab-agent/presentation.html)
- [Lab JS Errors](https://oussamaBekkali.github.io/labs/lab-erreur-js/lab-erreur-js.html)
- [Lab Git](https://oussamaBekkali.github.io/labs/lab-git/git.html)
- [Lab Markdown](https://oussamaBekkali.github.io/labs/lab-markdown/markdown.html)
- [Lab Marp](https://oussamaBekkali.github.io/labs/lab-marp/lab-marp.html)
- [Lab Prompt Task](https://oussamaBekkali.github.io/labs/lab-prompt-task/prompt.html)
- [Lab Starter](https://oussamaBekkali.github.io/labs/lab-starter/lab-starter.html)

---

## Lab Catalog

### 1. Laravel Framework and Backend PHP

| Lab | Title | Description | Access |
| :--- | :--- | :--- | :--- |
| **Lab 01** | Understand Laravel | Overview of the PHP framework: MVC architecture, Artisan commands, Eloquent ORM, Blade template engine, and ecosystem. | [Open Lab 01](./lab-01-comprendre-laravel/README.md) |
| **Lab 02** | MVC Architecture | Detailed study of the Model-View-Controller pattern in Laravel, HTTP request flow, responsibility separation, and best practices. | [Open Lab 02](./lab-02-architecture-mvc/README.md) |
| **Lab Hello World** | First Steps with Laravel | Project initialization, local server startup with `php artisan serve`, first route creation, and Blade view rendering. | [Open guide](./lab-laravel_helloWorld/laravel_hello_world_lab.md) |
| **Lab Categories** | Model, Migration, and Display | Complete feature implementation: Eloquent `Category` model, SQL migration, related controller, and dynamic display. | [Open guide](./lab-laravel-afficher-la-liste-des-catégories/laravel_categories_lab.md) |

### 2. Frontend Development and JavaScript

| Lab | Title | Description | Access |
| :--- | :--- | :--- | :--- |
| **Lab JS Errors** | JavaScript Debugging | Diagnosis and resolution of common JavaScript errors, console diagnostics, and browser tools. | [Open presentation](./lab-erreur-js/lab-erreur-js.md) |
| **Lab Prompt Task** | Video Platform Interface | Design and refinement of a precise prompt to generate a responsive HTML, Tailwind CSS, and vanilla JavaScript interface. | [Support](./lab-prompt-task/prompt.md) / [Interface](./lab-prompt-task/index.html) |

### 3. Development Environment and Tools

| Lab | Title | Description | Access |
| :--- | :--- | :--- | :--- |
| **Lab Starter** | Environment Setup | Setup of a productive workspace: installation and configuration of Git, Visual Studio Code, and the terminal on Windows. | [Open guide](./lab-starter/lab-starter.md) |
| **Lab Git** | Version Control and Collaboration | Fundamentals of Git: tracking changes, branching, and collaboration workflows with GitHub. | [Open presentation](./lab-git/git.md) |
| **Lab Markdown** | Technical Documentation | Complete Markdown syntax: text formatting, lists, code blocks, tables, and documentation structure. | [Open guide](./lab-markdown/markdown.md) |
| **Lab Marp** | Markdown Presentations | Creating technical and professional slide decks with the Marp ecosystem, presentation directives, and styling. | [Open presentation](./lab-marp/lab-marp.md) |
| **What Is a Lab?** | Pedagogical Methodology | Definition, goals, and principles behind building and delivering an effective learning lab. | [Open note](./lab-what_is_a_lab/Qu’est-ce_qu’un_lab.md) |

### 4. AI Agents and Customization

| Lab / Module | Title | Description | Access |
| :--- | :--- | :--- | :--- |
| **Lab Agent** | Design and Test AI Skills | Methodology for creating, testing, and comparing reusable AI skills with Antigravity and GitHub Copilot. | [Open presentation](./lab-agent/presentation.md) |
| **Lab Antigravity** | Antigravity Configuration | Dedicated area for skills and rules adapted to the Antigravity development assistant. | [Open folder](./lab-antigravity/) |

---

## Standard Lab Structure

Complete labs follow a standardized five-file structure:

```text
lab-XX-subject-name/
├── README.md         # Overview, learning objectives, prerequisites, and plan
├── introduction.md   # Technical context, background, and relevance
├── definition.md     # Core concepts, definitions, architecture, and diagrams
├── practical.md      # Step-by-step exercises and guided tasks
└── presentation.md   # Marp presentation deck ready for projection
```

---

## Agent Customizations (.agent/)

The repository includes standardized skills and rules to support development work:

### Skills

- **laravel-developer** ([.agent/skills/laravel-developer/SKILL.md](./.agent/skills/laravel-developer/SKILL.md)) : Laravel development, debugging, MVC architecture, Eloquent ORM, Blade, migrations, and security best practices.
- **lab-creator** ([.agent/skills/lab-creator/SKILL.md](./.agent/skills/lab-creator/SKILL.md)) : Automated creation of lab modules following the standardized five-file structure.
- **lab-adaptation** ([.agent/skills/lab-adaptation/SKILL.md](./.agent/skills/lab-adaptation/SKILL.md)) : Conversion and adaptation of technical content into Marp presentations.
- **github-deployment** ([.agent/skills/github-deployment/SKILL.md](./.agent/skills/github-deployment/SKILL.md)) : Configuration and automation of static lab deployment to GitHub Pages.

### Rules

- **author-attribution** ([.agent/rules/author-attribution.md](./.agent/rules/author-attribution.md)) : Unified author attribution (`by oussama bekkali`).
- **customizations-location** ([.agent/rules/customizations-location.md](./.agent/rules/customizations-location.md)) : Strict centralization of skills and rules in the `.agent/` folder.
- **no-emojis** ([.agent/rules/no-emojis.md](./.agent/rules/no-emojis.md)) : Clean, professional text formatting without emojis.

---

## Repository Structure

```text
labs/
├── .agent/
│   ├── rules/
│   │   ├── author-attribution.md
│   │   ├── customizations-location.md
│   │   └── no-emojis.md
│   └── skills/
│       ├── github-deployment/
│       │   └── SKILL.md
│       ├── lab-adaptation/
│       │   └── SKILL.md
│       ├── lab-creator/
│       │   └── SKILL.md
│       └── laravel-developer/
│           └── SKILL.md
├── .github/
│   ├── skills/
│   │   ├── lab-adaptation/
│   │   │   └── SKILL.md
│   │   └── laravel-developer/
│   │       └── SKILL.md
│   └── workflows/
│       └── deploy-pages.yml
├── determiner_la_liste_des_labs_a_realiser.md
├── lab-01-comprendre-laravel/
│   ├── README.md
│   ├── introduction.md
│   ├── definition.md
│   ├── practical.md
│   └── presentation.md
...   ├── definition.md│   ├── practical.md
│   └── presentation.md
├── lab-02-architecture-mvc/
│   ├── README.md
│   ├── introduction.md
│   ├── definition.md
│   ├── practical.md
│   └── presentation.md
├── lab-agent/
│   └── presentation.md
├── lab-antigravity/
│   └── .agent/
│       └── skills/
│           └── lab_creator/
│               └── skill.md
├── lab-erreur-js/
│   └── lab-erreur-js.md
├── lab-git/
│   └── git.md
├── lab-laravel-afficher-la-liste-des-catégories/
│   └── laravel_categories_lab.md
├── lab-laravel_helloWorld/
│   └── laravel_hello_world_lab.md
├── lab-markdown/
│   └── markdown.md
├── lab-marp/
│   └── lab-marp.md
├── lab-prompt-task/
│   ├── index.html
│   └── prompt.md
├── lab-starter/
│   └── lab-starter.md
├── lab-what_is_a_lab/
│   └── Qu’est-ce_qu’un_lab.md
└── README.md
```

---

## Deploiement et Integration Continue

Le repertoire integre un workflow GitHub Actions ([.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml)) permettant de compiler les presentations Markdown via Marp CLI et de publier automatiquement les supports HTML sur **GitHub Pages**.