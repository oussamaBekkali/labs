---
marp: true
theme: default
paginate: true
size: 16:9
header: "Lab Erreur JS : Débogage JavaScript"
footer: "by oussama bekkali"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;600&display=swap');

  section {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-size: 23px;
    padding: 42px 54px;
    background-color: #0b1120;
    color: #e2e8f0;
  }

  section.light {
    background-color: #f8fafc;
    color: #0f172a;
  }

  section.lead {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 2.1em;
    font-weight: 900;
    color: #38bdf8;
    margin-bottom: 0.3em;
    letter-spacing: -0.02em;
  }

  section.light h1 {
    color: #0284c7;
  }

  h2 {
    font-size: 1.4em;
    font-weight: 700;
    color: #a5b4fc;
    border-bottom: 2px solid #334155;
    padding-bottom: 6px;
    margin-top: 0;
    margin-bottom: 0.45em;
  }

  section.light h2 {
    color: #4338ca;
    border-bottom: 2px solid #e2e8f0;
  }

  h3 {
    font-size: 1.05em;
    font-weight: 600;
    color: #38bdf8;
    margin-bottom: 0.25em;
  }

  section.light h3 {
    color: #0369a1;
  }

  p, li {
    line-height: 1.45;
    color: #cbd5e1;
  }

  section.light p, section.light li {
    color: #334155;
  }

  ul, ol {
    margin-top: 0.25em;
    margin-bottom: 0.45em;
  }

  li {
    margin-bottom: 0.2em;
  }

  code {
    font-family: 'JetBrains Mono', monospace;
    background: #1e293b;
    color: #38bdf8;
    padding: 0.15em 0.35em;
    border-radius: 5px;
    font-size: 0.85em;
  }

  section.light code {
    background: #e2e8f0;
    color: #0369a1;
  }

  pre {
    background: #0f172a !important;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.25);
  }

  section.light pre {
    background: #1e293b !important;
    border: 1px solid #cbd5e1;
  }

  pre code {
    background: transparent !important;
    padding: 0;
    color: #f1f5f9 !important;
    font-size: 0.78em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    font-size: 0.82em;
  }

  th {
    background-color: #1e293b;
    color: #38bdf8;
    padding: 7px 10px;
    font-weight: 700;
    border-bottom: 2px solid #475569;
    text-align: left;
  }

  section.light th {
    background-color: #e2e8f0;
    color: #0369a1;
    border-bottom: 2px solid #cbd5e1;
  }

  td {
    padding: 7px 10px;
    border-bottom: 1px solid #334155;
  }

  section.light td {
    border-bottom: 1px solid #e2e8f0;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 9px;
    padding: 12px 16px;
  }

  section.light .card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 3px 8px rgba(0,0,0,0.04);
  }

  .badge {
    display: inline-block;
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 0.7em;
    font-weight: 700;
    text-transform: uppercase;
    background: rgba(56, 189, 248, 0.15);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.3);
  }

  .badge-danger {
    background: rgba(239, 68, 68, 0.15);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.3);
  }

  .badge-success {
    background: rgba(34, 197, 94, 0.15);
    color: #4ade80;
    border: 1px solid rgba(34, 197, 94, 0.3);
  }

  footer {
    font-size: 0.6em;
    color: #64748b;
  }

  header {
    font-size: 0.6em;
    color: #64748b;
  }
---

<!-- _class: lead -->

# Lab Erreur JS : Apprendre à lire et résoudre des erreurs JavaScript

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

### Contexte et Objectifs du Lab
Ce lab a pour objectif de maîtriser l'art du débogage en environnement JavaScript moderne, en s'appuyant sur des cas réels survenus lors de la création d'une application de blog connectée à une API PHP.

<div class="grid-2">
<div class="card">

### Compétences Visées
- **Lire et décoder** les messages d'erreur et les traces de pile (*Call Stack*).
- **Localiser rapidement** le fichier et la ligne exacte à l'origine du blocage.
- **Utiliser les outils professionnels** : Chrome DevTools (Console, Network) et VS Code Debugger.
- **Diagnostiquer les échanges API** et les réponses renvoyées par le backend PHP.
</div>
<div class="card">

### Périmètre Technique
- **Frontend** : JavaScript ES6+ asynchrone (`fetch`, `async/await`, promesses, manipulation DOM).
- **Outils** : Google Chrome DevTools, Visual Studio Code (`launch.json`).
- **Backend API** : Serveur PHP local renvoyant des réponses HTTP (JSON ou erreurs serveur).
</div>
</div>

---

<!-- _class: light -->

## Problems Encountered

Cinq erreurs bloquantes majeures ont été identifiées lors de l'intégration du blog :

1. **Tentative d'accès à une propriété inexistante :**
   `TypeError: Cannot read properties of undefined (reading 'title')` lors de l'affichage d'un article avant la fin du chargement.

2. **Appel d'une fonction hors de portée :**
   `ReferenceError: fetchPosts is not defined` au clic sur le bouton de filtre par catégorie.

3. **Échec de conversion de la réponse serveur en JSON :**
   `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON` suite à une erreur PHP renvoyant une page HTML au lieu de données JSON.

4. **Interruption de la communication réseau :**
   `TypeError: Failed to fetch` causée par un serveur local inactif ou un refus d'accès d'origine (*CORS*).

5. **Itération sur une structure de données invalide :**
   `TypeError: posts.map is not a function` provoqué par la réception d'un objet enveloppé ou paginé au lieu du tableau attendu.

---

## Solutions Implemented

Les actions correctives mises en oeuvre pour résoudre durablement chaque dysfonctionnement :

| Erreur Identifiée | Cause Racine | Solution Appliquée |
| :--- | :--- | :--- |
| `TypeError (undefined)` | Propriété lue sur un objet non encore initialisé | Chaînage optionnel (`post?.author?.name`) et garde d'état |
| `ReferenceError` | Fonction non exportée ou déclarée dans un bloc local | Réorganisation des portées et imports explicites ES6 |
| `SyntaxError (< in JSON)` | Serveur PHP renvoyant une erreur 500 HTML | Vérification `response.ok` et correction du contrôleur PHP |
| `Failed to fetch` | Serveur PHP éteint ou en-têtes CORS manquants | Démarrage du serveur et configuration `Access-Control-Allow-Origin` |
| `posts.map is not a function` | Objet `{ data: [...] }` reçu au lieu d'un tableau direct | Contrôle `Array.isArray()` et extraction de `data` |

---

<!-- _class: light -->

## Méthodologie Universelle de Débogage

Pour résoudre efficacement tout bogue JavaScript, une méthode structurée en quatre étapes s'impose :

<div class="grid-2">
<div class="card">

### Étape 1 : Lire et Localiser
- Identifier le **type de l'erreur** (`TypeError`, `ReferenceError`, `SyntaxError`).
- Relever le **fichier source** et le **numéro de ligne** indiqués dans la console.
- Remonter la pile d'appels (*Call Stack*) pour comprendre le chemin d'exécution.

### Étape 2 : Inspecter l'État
- Observer les valeurs réelles des variables à cet instant précis.
- Utiliser la console interactive, des points d'arrêt (*Breakpoints*) ou `console.dir()`.
</div>
<div class="card">

### Étape 3 : Émettre une Hypothèse et Corriger
- Comparer la valeur observée à la valeur attendue par le code.
- Vérifier si le problème provient du code JavaScript ou d'une réponse API tierce.
- Appliquer un correctif ciblé et sécuriser les cas limites (*edge cases*).

### Étape 4 : Valider et Tester
- Rejouer le scénario nominal et les scénarios d'erreur (réseau coupé, données vides).
- S'assurer de l'absence totale d'avertissements et d'erreurs résiduelles.
</div>
</div>

---

## Outils de Débogage : VS Code et Google Chrome

La combinaison de **VS Code** et du navigateur **Google Chrome** permet d'exécuter le code pas à pas sans surcharger les fichiers de `console.log`.

<div class="grid-2">
<div class="card">

### Configuration `.vscode/launch.json`
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Debug Blog Frontend",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```
</div>
<div class="card">

### Commandes d'Exécution Pas à Pas
- **F5** : Démarrer ou Continuer l'exécution jusqu'au point d'arrêt suivant.
- **F10 (Step Over)** : Passer à l'instruction suivante sans entrer dans la fonction.
- **F11 (Step Into)** : Entrer à l'intérieur de la fonction appelée.
- **Shift + F11 (Step Out)** : Sortir de la fonction en cours.
- **Panneau Variables & Watch** : Suivre l'évolution des variables en temps réel.
</div>
</div>

---

<!-- _class: light -->

## Outils de Débogage : Google Chrome DevTools

Les outils pour développeurs de Chrome fournissent un diagnostic direct du runtime.

<div class="grid-2">
<div class="card">

### 1. La Console DevTools
- **Filtres de sévérité** : `Errors` (rouge), `Warnings` (jaune), `Info` et `Verbose`.
- **Traces interactives** : Chaque erreur offre un lien direct vers le fichier source incriminé.
- **Option "Preserve log"** : Conserve les messages même lors d'une redirection ou d'un rechargement de page.
- **Instruction `debugger;`** : Provoque un arrêt immédiat si les DevTools sont ouverts.
</div>
<div class="card">

### 2. L'Onglet Sources
- Pose de points d'arrêt classiques ou conditionnels directement sur les numéros de ligne.
- **Scope View** : Examen des variables locales, de fermeture (*Closure*) et globales (*Window*).
- **Call Stack** : Visualisation de l'empilement des fonctions menant à l'incident.
</div>
</div>

---

## Outils de Débogage : L'Onglet Network

L'onglet **Network** est l'outil indispensable dès qu'une application échange des données via `fetch()`.

<div class="grid-2">
<div class="card">

### Étapes d'Analyse d'un Appel API
1. Filtrer l'affichage sur le type **Fetch/XHR**.
2. Observer la colonne **Status** (code de réponse HTTP).
3. Sélectionner la requête ciblée pour afficher ses détails :
   - **Headers** : URL demandée, méthode HTTP (`GET`, `POST`), en-têtes envoyés et reçus.
   - **Payload** : Données transmises au serveur dans le corps de la requête.
   - **Preview / Response** : Données brutes renvoyées par le backend PHP.
</div>
<div class="card">

### Détection Immédiate des Problèmes
- **Ligne rouge / Status (failed)** : Le serveur est injoignable ou la requête a été bloquée par CORS.
- **Status 404** : URL de l'API incorrecte ou route PHP introuvable.
- **Status 500** : Crash interne côté serveur PHP.
- **Type text/html au lieu de application/json** : Indice immédiat d'une erreur serveur inattendue.
</div>
</div>

---

<!-- _class: light -->

## Appels API et Serveur PHP : Comprendre la Réponse

Lorsqu'une requête `fetch()` échoue, la cause racine se situe souvent sur le serveur backend PHP.

### Les Statuts HTTP Clés pour le Blog
- **200 OK / 201 Created** : Requête traitée avec succès, le JSON attendu est disponible.
- **400 Bad Request** : Données envoyées invalides ou incomplètes (ex: champ manquant dans le formulaire).
- **404 Not Found** : La ressource ou la route `/api/articles` n'existe pas dans le script PHP.
- **422 Unprocessable Content** : Échec de validation métier côté serveur PHP.
- **500 Internal Server Error** : Exception PHP non interceptée, erreur SQL ou fichier de configuration absent.

<div class="card" style="margin-top: 14px;">

### Règle d'Or du Débogage Client-Serveur
La méthode JavaScript `fetch()` **ne rejette pas** sa promesse en cas de code 404 ou 500. Elle considère que la communication réseau a eu lieu. C'est au code frontend de vérifier `response.ok` avant de traiter le contenu.
</div>

---

## Erreur 1 : `Cannot read properties of undefined`

<span class="badge badge-danger">Problème de départ</span>

### Situation Rencontrée
Lors du chargement de la vue de détail d'un article de blog, la page reste partiellement vide et l'affichage se bloque brutalement.

### Code Source à l'Origine du Problème
```javascript
async function displayArticleDetails(articleId) {
  const response = await fetch(`http://localhost:8000/api/articles/${articleId}`);
  const article = await response.json();

  // Erreur : l'article récupéré n'a pas encore d'auteur ou la propriété est absente
  document.getElementById("article-title").textContent = article.title;
  document.getElementById("author-name").textContent = article.author.name;
}
```

Si le champ `author` vaut `undefined` ou `null`, le moteur JavaScript interrompt immédiatement l'exécution.

---

<!-- _class: light -->

## Erreur 1 : Lecture de l'Erreur et Outils

<span class="badge">Lecture de l'erreur & Outils</span>

### Message Affiché dans la Console
```text
Uncaught TypeError: Cannot read properties of undefined (reading 'name')
    at displayArticleDetails (article.js:42:47)
    at async loadPage (article.js:12:3)
```

<div class="grid-2">
<div class="card">

### Analyse des Informations Utiles
- **Type** : `TypeError` (accès à une propriété sur une valeur primitive invalide).
- **Propriété ciblée** : `'name'`.
- **Cible réelle** : La variable précédant `.name`, c'est-à-dire `article.author`, vaut `undefined`.
- **Localisation** : Fichier `article.js`, ligne 42, colonne 47.
</div>
<div class="card">

### Outils Utilisés pour le Diagnostic
- **Console DevTools** : Clic direct sur `article.js:42` pour ouvrir le code source.
- **Sources / Breakpoints** : Placement d'un point d'arrêt ligne 41 pour inspecter l'objet `article` avant le plantage.
- **Watch Expression** : Évaluation de `article.author` constatée à `undefined`.
</div>
</div>

---

## Erreur 1 : Résolution et Vérification

<span class="badge badge-success">Résolution</span>

### Étape 1 : Sécuriser avec le Chaînage Optionnel et Valeur par Défaut
```javascript
// Solution moderne avec chaînage optionnel (?.) et coalescence des nuls (??)
document.getElementById("article-title").textContent = article?.title ?? "Sans titre";
document.getElementById("author-name").textContent = article?.author?.name ?? "Auteur anonyme";
```

### Étape 2 : Ajouter une Garde d'Intégrité
```javascript
if (!article || typeof article !== "object") {
  console.warn("Données d'article invalides reçues de l'API");
  return;
}
```

### Vérification
Recharger la page avec un article sans auteur assigné : le texte affiche *"Auteur anonyme"* sans générer aucune exception dans la console.

---

<!-- _class: light -->

## Erreur 2 : `ReferenceError: fetchPosts is not defined`

<span class="badge badge-danger">Problème de départ</span>

### Situation Rencontrée
Dans l'interface du blog, l'utilisateur clique sur le bouton *"Filtrer par catégorie"*. Rien ne se passe à l'écran, et une erreur s'inscrit instantanément dans la console.

### Code Source à l'Origine du Problème
```html
<!-- index.html -->
<button onclick="fetchPosts('technologie')">Voir Technologie</button>

<script type="module" src="./js/app.js"></script>
```

```javascript
// js/app.js (module ES6)
function fetchPosts(category) {
  console.log("Chargement de la catégorie :", category);
  // Requête API...
}
```

Puisque `app.js` est chargé en tant que **module ES6** (`type="module"`), ses fonctions sont confinées à la portée du module et ne sont pas rattachées à l'objet global `window`.

---

## Erreur 2 : Lecture de l'Erreur et Outils

<span class="badge">Lecture de l'erreur & Outils</span>

### Message Affiché dans la Console
```text
Uncaught ReferenceError: fetchPosts is not defined
    at HTMLButtonElement.onclick (index.html:24:1)
```

<div class="grid-2">
<div class="card">

### Analyse des Informations Utiles
- **Type** : `ReferenceError` (tentative d'utilisation d'un identifiant inconnu dans la portée courante).
- **Identifiant** : `fetchPosts`.
- **Contexte** : Appelé depuis l'attribut inline `onclick` qui s'exécute dans le contexte global de la fenêtre (`window`).
</div>
<div class="card">

### Outils Utilisés pour le Diagnostic
- **Linter VS Code** : Alerte sur les fonctions non référencées globalement.
- **Console DevTools** : Test de saisie `window.fetchPosts` renvoyant `undefined`.
- **Panneau Scope dans Sources** : Confirmation que la fonction réside dans la portée *Module* et non *Global*.
</div>
</div>

---

<!-- _class: light -->

## Erreur 2 : Résolution et Vérification

<span class="badge badge-success">Résolution</span>

### Étape 1 : Supprimer les Écouteurs Inline et Utiliser `addEventListener`
```javascript
// js/app.js
document.querySelectorAll(".btn-category").forEach(button => {
  button.addEventListener("click", (event) => {
    const category = event.target.dataset.category;
    fetchPosts(category);
  });
});
```

### Étape 2 (Alternative) : Attacher Explicitement si Requis par l'Architecture
```javascript
// Si l'appel direct depuis le HTML est indispensable :
window.fetchPosts = fetchPosts;
```

### Vérification
Cliquer sur chaque bouton de filtre : la liste des articles se met à jour et la console confirme l'appel avec le bon paramètre sans aucune erreur.

---

## Erreur 3 : `SyntaxError: Unexpected token '<'`

<span class="badge badge-danger">Problème de départ</span>

### Situation Rencontrée
L'application tente de charger la liste des derniers articles via `fetch("http://localhost:8000/api/articles")`. La méthode `response.json()` échoue immédiatement et le blog n'affiche aucun contenu.

### Code Source Défaillant
```javascript
async function loadArticles() {
  const response = await fetch("http://localhost:8000/api/articles");
  // Hypothèse erronée : on suppose que la réponse contient toujours du JSON
  const articles = await response.json();
  renderArticles(articles);
}
```

Le script frontend s'exécute sans vérifier l'état de la réponse, alors que le serveur PHP a rencontré une défaillance interne.

---

<!-- _class: light -->

## Erreur 3 : Lecture de l'Erreur et Outils

<span class="badge">Lecture de l'erreur & Outils</span>

### Message Affiché dans la Console
```text
Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    at loadArticles (articles.js:4:31)
```

<div class="grid-2">
<div class="card">

### Analyse des Informations Utiles
- **Type** : `SyntaxError` lors du parsing JSON.
- **Caractère fautif** : Le symbole `<`.
- **Origine logique** : Le contenu reçu débute par `<` (ex: `<!DOCTYPE html>` ou `<br /><b>Fatal error</b>`), indiquant une page HTML d'erreur et non du JSON.
</div>
<div class="card">

### Outils et Démarche de Diagnostic
1. Ouvrir l'onglet **Network** dans Chrome DevTools.
2. Repérer la ligne `/api/articles` marquée en rouge avec le code **500**.
3. Cliquer sur l'onglet **Response** : Découverte du message d'erreur PHP direct :
   *`Fatal error: Uncaught PDOException: Access denied for user...`*
</div>
</div>

---

## Erreur 3 : Résolution et Vérification

<span class="badge badge-success">Résolution</span>

### Étape 1 : Sécuriser la Réception Côté Frontend
```javascript
async function loadArticles() {
  try {
    const response = await fetch("http://localhost:8000/api/articles", {
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Erreur serveur HTTP : ${response.status} ${response.statusText}`);
    }

    const articles = await response.json();
    renderArticles(articles);
  } catch (error) {
    console.error("Échec du chargement des articles :", error.message);
    showErrorMessageToUser("Impossible de charger les articles actuellement.");
  }
}
```

### Étape 2 : Corriger le Problème Backend PHP
Corriger les identifiants de base de données dans le fichier `.env` ou la configuration PHP.

---

<!-- _class: light -->

## Erreur 4 : `TypeError: Failed to fetch` (Réseau / CORS)

<span class="badge badge-danger">Problème de départ</span>

### Situation Rencontrée
Lors de l'envoi d'un nouvel article via un formulaire, le navigateur bloque la requête immédiatement sans renvoyer aucun code de statut HTTP chiffré.

### Code Source Défaillant
```javascript
async function publishArticle(data) {
  const response = await fetch("http://localhost:8000/api/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await response.json();
}
```

La requête ne parvient pas au contrôleur PHP ou le navigateur refuse de lire la réponse.

---

## Erreur 4 : Lecture de l'Erreur et Outils

<span class="badge">Lecture de l'erreur & Outils</span>

### Message Affiché dans la Console
```text
Uncaught (in promise) TypeError: Failed to fetch
    at publishArticle (editor.js:14:26)
Access to fetch at 'http://localhost:8000/api/articles' from origin 'http://localhost:3000'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present.
```

<div class="grid-2">
<div class="card">

### Analyse des Informations
- **TypeError: Failed to fetch** : Échec réseau de bas niveau.
- Deux causes fréquentes :
  - **Serveur inactif** : Le serveur PHP local n'est pas lancé (`ERR_CONNECTION_REFUSED`).
  - **Violation CORS** : Le port frontend (3000) et le port backend (8000) diffèrent sans autorisation explicite.
</div>
<div class="card">

### Outils Utilisés
- **Console DevTools** : Examen de la notice d'interdiction CORS.
- **Onglet Network** : Requête affichée avec le statut `(failed)` et méthode préalable `OPTIONS`.
- **Terminal VS Code** : Contrôle de l'état du processus PHP.
</div>
</div>

---

<!-- _class: light -->

## Erreur 4 : Résolution et Vérification

<span class="badge badge-success">Résolution</span>

### Étape 1 : Démarrer le Serveur Backend PHP
Dans le terminal du projet backend :
```bash
php -S localhost:8000 -t public
# ou dans un projet Laravel :
php artisan serve --port=8000
```

### Étape 2 : Configurer les En-têtes CORS Côté PHP
Ajouter en tête du point d'entrée API (`index.php` ou middleware PHP) :
```php
<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
```

---

## Erreur 5 : `TypeError: posts.map is not a function`

<span class="badge badge-danger">Problème de départ</span>

### Situation Rencontrée
La requête API s'est achevée avec un code `200 OK`, mais la fonction d'affichage des articles déclenche immédiatement une erreur fatale dans la console.

### Code Source Défaillant
```javascript
async function renderBlogFeed() {
  const response = await fetch("http://localhost:8000/api/posts");
  const posts = await response.json();

  // Erreur : on suppose que 'posts' est directement un tableau (Array)
  const html = posts.map(post => `
    <article class="post-card">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
    </article>
  `).join("");

  document.getElementById("feed").innerHTML = html;
}
```

---

<!-- _class: light -->

## Erreur 5 : Lecture de l'Erreur et Outils

<span class="badge">Lecture de l'erreur & Outils</span>

### Message Affiché dans la Console
```text
Uncaught (in promise) TypeError: posts.map is not a function
    at renderBlogFeed (feed.js:8:22)
```

<div class="grid-2">
<div class="card">

### Analyse des Informations Utiles
- **Type** : `TypeError`.
- **Explication** : La méthode `.map()` n'existe que sur le prototype des objets `Array`.
- **Dédution** : La variable `posts` est un `Object`, une chaîne, ou vaut `null`.
</div>
<div class="card">

### Diagnostic dans DevTools
- Saisie dans la console : `console.log(posts)` révèle la structure réelle :
```json
{
  "status": "success",
  "data": [ { "id": 1, "title": "Premier article" } ],
  "total": 1
}
```
Les articles sont encapsulés dans la propriété `posts.data`.
</div>
</div>

---

## Erreur 5 : Résolution et Vérification

<span class="badge badge-success">Résolution</span>

### Étape 1 : Valider le Type et Extraire les Données
```javascript
async function renderBlogFeed() {
  const response = await fetch("http://localhost:8000/api/posts");
  const result = await response.json();

  // Extraction sécurisée selon la structure reçue
  const postsList = Array.isArray(result) ? result : (result.data || []);

  if (postsList.length === 0) {
    document.getElementById("feed").innerHTML = "<p>Aucun article publié pour le moment.</p>";
    return;
  }

  const html = postsList.map(post => `
    <article class="post-card">
      <h3>${post.title ?? "Titre indisponible"}</h3>
      <p>${post.excerpt ?? ""}</p>
    </article>
  `).join("");

  document.getElementById("feed").innerHTML = html;
}
```

---

<!-- _class: light -->

## Matrice de Synthèse des 5 Erreurs

| Erreur JavaScript | Nature | Outil Clé | Bonne Pratique de Résolution |
| :--- | :--- | :--- | :--- |
| `Cannot read properties of undefined` | Donnée manquante | Sources / Breakpoint | Chaînage optionnel `?.` et valeurs de repli `??` |
| `ReferenceError: x is not defined` | Portée / Import | Console / Linter | Événements `addEventListener` et imports ES6 |
| `SyntaxError: Unexpected token '<'` | Erreur serveur HTML | Network -> Response | Contrôler `response.ok` et déboguer le PHP |
| `TypeError: Failed to fetch` | Réseau / CORS | Network -> Headers | Démarrer le serveur et autoriser les origines CORS |
| `TypeError: x.map is not a function` | Structure inattendue | Console (`console.dir`) | Contrôler `Array.isArray()` et extraire `data` |

---

## Bonnes Pratiques pour un Code Robuste

Pour prévenir l'apparition de ces anomalies lors du développement d'un blog :

<div class="grid-2">
<div class="card">

### 1. Robustesse des Appels Asynchrones
- Toujours encadrer les requêtes `fetch` dans un bloc `try / catch`.
- Vérifier `if (!response.ok)` avant toute tentative de lecture de données.
- Spécifier systématiquement l'en-tête `Accept: application/json`.
</div>
<div class="card">

### 2. Sécurisation des Données Reçues
- Ne jamais supposer la présence d'une clé : utiliser `object?.property`.
- Toujours valider les tableaux avec `Array.isArray(variable)`.
- Prévoir des états visuels clairs dans le DOM : *Chargement*, *Succès*, *Erreur explicite*.
</div>
</div>

---

<!-- _class: light -->

## Checklist Finale de Validation du Débogage

Avant de considérer une correction comme terminée et prête pour la production :

- [ ] **Message d'erreur compris** : Le type et le sens exact de l'anomalie ont été identifiés.
- [ ] **Cause racine isolée** : La défaillance a été distinguée entre bug de syntaxe, problème de portée, bug réseau ou erreur backend PHP.
- [ ] **Outil approprié mobilisé** : Console pour les exceptions, Sources/VS Code pour le pas à pas, Network pour les flux HTTP.
- [ ] **Correctif ciblé appliqué** : Le code est sécurisé contre les valeurs nulles, non définies ou structures inattendues.
- [ ] **Console propre** : Aucun avertissement ni message rouge résiduel n'apparaît lors des tests.
- [ ] **Cas limites testés** : L'application réagit proprement en cas de coupure réseau, d'erreur serveur ou de base de données vide.
