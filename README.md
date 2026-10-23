# Repertoire des Labs d'Apprentissage

by oussama bekkali

Bienvenue dans le depot central des travaux pratiques et des laboratoires pedagogiques. Ce repertoire rassemble un ensemble structure de labs couvrant le developpement web moderne (Laravel, PHP, JavaScript), les outils fondamentaux de developpement (Git, Markdown, Marp), ainsi que les flux de travail assistes par agents d'intelligence artificielle.

Chaque laboratoire est concu pour offrir un cadre d'apprentissage rigoureux et progressif, alliant fondements conceptuels, cas pratiques et supports de presentation.

---

## Catalogue des Labs

### 1. Framework Laravel et Backend PHP

| Lab | Titre | Description | Acces |
| :--- | :--- | :--- | :--- |
| **Lab 01** | Comprendre Laravel | Decouverte et comprehension globale du framework PHP : architecture MVC, commandes Artisan, Eloquent ORM, moteur Blade et ecosysteme. | [Consulter le Lab 01](./lab-01-comprendre-laravel/README.md) |
| **Lab 02** | Architecture MVC | Etude detaillee du patron Model-View-Controller dans Laravel, flux d'une requete HTTP, separation des responsabilites et bonnes pratiques. | [Consulter le Lab 02](./lab-02-architecture-mvc/README.md) |
| **Lab Hello World** | Premier Pas avec Laravel | Initialisation d'un projet, demarrage du serveur local avec `php artisan serve`, creation d'une premiere route et rendu d'une vue Blade. | [Consulter le guide](./lab-laravel_helloWorld/laravel_hello_world_lab.md) |
| **Lab Categories** | Modele, Migration et Affichage | Implementation complete d'une fonctionnalite : creation du modele Eloquent `Category`, migration SQL, controleur associe et affichage dynamique. | [Consulter le guide](./lab-laravel-afficher-la-liste-des-catégories/laravel_categories_lab.md) |

### 2. Developpement Frontend et JavaScript

| Lab | Titre | Description | Acces |
| :--- | :--- | :--- | :--- |
| **Lab Erreur JS** | Debogage JavaScript | Diagnostic et resolution d'erreurs courantes en JavaScript (`SyntaxError`, `ReferenceError`, `TypeError`), utilisation de la console et des outils de developpement. | [Consulter la presentation](./lab-erreur-js/lab-erreur-js.md) |
| **Lab Prompt Task** | Interface de Plateforme Video | Conception et affinage d'un prompt precis pour generer une interface responsive en HTML, Tailwind CSS et JavaScript vanilla. | [Support](./lab-prompt-task/prompt.md) / [Interface](./lab-prompt-task/index.html) |

### 3. Environnement et Outils de Developpement

| Lab | Titre | Description | Acces |
| :--- | :--- | :--- | :--- |
| **Lab Starter** | Configuration de l'Environnement | Mise en place d'un espace de travail performant : installation et configuration de Git, Visual Studio Code et du terminal sous Windows. | [Consulter le guide](./lab-starter/lab-starter.md) |
| **Lab Git** | Gestion de Versions et Collaboration | Fondamentaux de Git, suivi des modifications, gestion des branches et flux collaboratif avec GitHub. | [Consulter la presentation](./lab-git/git.md) |
| **Lab Markdown** | Documentation Technique | Syntaxe complete de Markdown : formatage du texte, listes, blocs de code, tableaux et structuration de la documentation. | [Consulter le guide](./lab-markdown/markdown.md) |
| **Lab Marp** | Presentations en Markdown | Creation de diaporamas techniques et professionnels avec l'ecosysteme Marp, directives de style et theming avance. | [Consulter la presentation](./lab-marp/lab-marp.md) |
| **Qu'est-ce qu'un lab ?** | Methodologie Pedagogique | Definition, objectifs et principes fondamentaux regissant la structure et la realisation d'un lab d'apprentissage. | [Consulter la note](./lab-what_is_a_lab/Qu’est-ce_qu’un_lab.md) |

### 4. Agents IA et Customisations

| Lab / Module | Titre | Description | Acces |
| :--- | :--- | :--- | :--- |
| **Lab Agent** | Concevoir et Tester des Skills IA | Methodologie pour creer, tester et comparer des Skills reutilisables pour les agents IA avec Antigravity et GitHub Copilot. | [Consulter la presentation](./lab-agent/presentation.md) |
| **Lab Antigravity** | Configuration Antigravity | Espace dedie aux competences et regles adaptees a l'assistant de developpement Antigravity. | [Consulter le dossier](./lab-antigravity/) |

---

## Structure Standardisee d'un Lab

Les laboratoires complets suivent une architecture standardisee en cinq fichiers complementaires :

```text
lab-XX-nom-du-sujet/
├── README.md         # Vue d'ensemble, objectifs pedagogiques, prerequis et plan
├── introduction.md   # Contexte technique, genese et pertinence du sujet
├── definition.md     # Notions theoriques, definitions cles, architecture et schemas
├── practical.md      # Travaux pratiques guides pas a pas, exercices et defis
└── presentation.md   # Support de presentation Marp pret pour projection
```

---

## Customisations de l'Agent (.agent/)

Le depot embarque des competences (Skills) et des regles (Rules) standardisees pour assister le developpement :

### Competences (Skills)

- **laravel-developer** ([.agent/skills/laravel-developer/SKILL.md](./.agent/skills/laravel-developer/SKILL.md)) : Developpement, debogage, architecture MVC, Eloquent ORM, Blade, migrations et securite pour les projets Laravel.
- **lab-creator** ([.agent/skills/lab-creator/SKILL.md](./.agent/skills/lab-creator/SKILL.md)) : Creation automatisee de nouveaux modules de lab conformes a la structure standardisee en cinq fichiers.
- **lab-adaptation** ([.agent/skills/lab-adaptation/SKILL.md](./.agent/skills/lab-adaptation/SKILL.md)) : Conversion et adaptation des contenus techniques en presentations Marp interactives.
- **github-deployment** ([.agent/skills/github-deployment/SKILL.md](./.agent/skills/github-deployment/SKILL.md)) : Configuration et automatisation du deploiement de diaporamas et labs statiques vers GitHub Pages.

### Regles (Rules)

- **author-attribution** ([.agent/rules/author-attribution.md](./.agent/rules/author-attribution.md)) : Attribution d'auteur unifiee (`by oussama bekkali`).
- **customizations-location** ([.agent/rules/customizations-location.md](./.agent/rules/customizations-location.md)) : Centralisation stricte des skills et rules dans le repertoire `.agent/`.
- **no-emojis** ([.agent/rules/no-emojis.md](./.agent/rules/no-emojis.md)) : Formatage textuel epure et professionnel, sans emojis.

---

## Arborescence du Depot

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
├── determiner_la_liste_des _labs_a_realiser.md
├── lab-01-comprendre-laravel/
│   ├── README.md
│   ├── introduction.md
│   ├── definition.md
│   ├── practical.md
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