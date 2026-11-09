---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

  section {
    background: #70020f;
    color: #ffe0e3;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 26px;
    padding: 50px 60px;
    text-transform: uppercase;
    justify-content: flex-start;
  }

  h1, h2 {
    font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
    font-weight: 400;
    color: #ffe0e3;
    line-height: 0.98;
    letter-spacing: -1px;
    margin: 0 0 28px 0;
  }

  h1 { font-size: 100px; }
  h2 { font-size: 68px; }

  h3 {
    font-size: 28px;
    margin: 0 0 10px 0;
    color: #e6d9dc;
  }

  p { margin: 0 0 12px 0; }

  section.light {
    background: #ffdde0;
    color: #70020f;
  }

  section.light h1,
  section.light h2,
  section.light h3 {
    color: #70020f;
  }

  section.light p,
  section.light li {
    color: #111;
  }

  section.title {
    justify-content: space-between;
  }

  section.title h1 {
    font-size: 116px;
    margin-top: 8px;
  }

  section.title::before {
    content: "DEV\\A ENV";
    white-space: pre;
    position: absolute;
    right: -15px;
    bottom: 10px;
    font-family: 'Anton', Impact, sans-serif;
    font-size: 250px;
    line-height: 0.85;
    color: #5f0010;
    z-index: 0;
  }

  section.title h1,
  section.title .by {
    position: relative;
    z-index: 1;
  }

  .by {
    font-size: 20px;
    text-transform: none;
    margin-top: 20px;
  }

  .by strong {
    font-family: 'Anton', Impact, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 27px;
    display: block;
  }

  ul, ol {
    font-size: 30px;
    line-height: 1.35;
  }

  li { margin-bottom: 12px; }

  code {
    background: rgba(255, 224, 227, 0.13);
    padding: 2px 7px;
    border-radius: 4px;
    text-transform: none;
  }

  section.light code {
    background: rgba(112, 2, 15, 0.09);
  }

  .subtitle {
    font-size: 25px;
    color: #e6d9dc;
    text-transform: none;
  }

  .small {
    font-size: 21px;
    line-height: 1.35;
    text-transform: none;
  }

  .step {
    font-family: 'Anton', Impact, sans-serif;
    font-size: 31px;
    color: #ffe0e3;
  }

  section.light .step {
    color: #70020f;
  }
---

<!-- _class: title -->

# Environnement de<br>Développement

<div class="by">
  <strong>Mohammed Yassir Mesbahi</strong>
  Encadrant : ES-SARRAJ Fouad
</div>

---

<!-- _class: light -->

## Plan de Présentation

1. Introduction & Stack Technique
2. Définitions
3. Problème
4. Solution

---

## 🛠️ Stack Technique

Outils et écosystème de l'environnement de développement :

- **VS Code** : Éditeur de code source et environnement de travail principal
- **Live Server** : Serveur de développement local avec rechargement automatique en direct
- **Marp for VS Code** : Extension de prévisualisation et compilation de présentations Markdown
- **Todo Highlight** : Extension de surbrillance pour les annotations et rappels (`TODO:`, `FIXME:`)
- **Explorateur Système & Git** : Gestion de l'arborescence, fichiers cachés et contrôle de version

---

<!-- _class: light -->

## 📖 Définitions

- **IDE (Integrated Development Environment)** : Application logicielle unifiant éditeur de code, terminal, débogueur et gestionnaire d'extensions au même endroit.
- **Fichiers cachés (`.git`, dotfiles)** : Fichiers ou répertoires système masqués par défaut pour protéger les configurations sensibles.
- **Serveur de développement local** : Serveur HTTP local actualisant automatiquement la page web dans le navigateur à chaque sauvegarde.
- **Extension VS Code** : Module complémentaire étendant les fonctionnalités natives de l'éditeur.

---

## ⚠️ Problème

Obstacles rencontrés lors de la mise en place initiale du poste de travail :

- **Fichiers cachés invisibles** : Les fichiers et dossiers critiques comme `.git` n'apparaissaient pas dans l'explorateur.
- **Fichier `README.md` non affiché** : Absence d'accès immédiat à la documentation du projet.
- **Oubli des modifications dans le code** : Difficulté à repérer visuellement les tâches et lignes à modifier.
- **Absence de prévisualisation** : Impossibilité de visualiser en temps réel les pages web et les diaporamas Marp.

---

<!-- _class: light -->

## 💡 Solution : Configuration & Outillage

### 01 — Affichage des fichiers cachés
Activation de l'option d'affichage des fichiers et dossiers masqués pour visualiser `.git` et les dotfiles.

### 02 — Visibilité du README.md
Configuration de l'arborescence VS Code pour garantir l'affichage permanent du fichier `README.md`.

### 03 — Rappels visuels avec Todo Highlight
Installation de **Todo Highlight** pour repérer instantanément les commentaires importants dans le code.

---

## 💡 Solution : Serveur & Rendu Marp

### 04 — Serveur local avec Live Server
Installation de **Live Server** pour lancer un serveur local avec rechargement à chaud à chaque sauvegarde de fichier.

### 05 — Prévisualisation des diapositives avec Marp
Installation et configuration de l'extension **Marp for VS Code** pour afficher immédiatement le rendu des diaporamas Markdown.

