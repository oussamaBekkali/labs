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

# Lab Erreur JS : Déboguer JavaScript

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

Ce lab étudie des erreurs JavaScript issues d’exemples d’une application de blog connectée à une API PHP.

- Lire les messages et localiser leur origine.
- Inspecter le code et les réponses réseau.
- Corriger les causes liées aux données, modules et requêtes.

---

<!-- _class: light -->

## Problems Encountered

Les exemples de code du lab couvrent cinq erreurs :

- Propriété lue sur une valeur absente.
- Fonction inaccessible depuis un module JavaScript.
- Réponse HTML interprétée comme du JSON.
- Requête réseau bloquée ou serveur injoignable.
- Réponse API différente du tableau attendu.

---

## Solutions Implemented

Les exemples de correction montrent comment :

- Vérifier les valeurs avant d’accéder à leurs propriétés.
- Connecter les événements dans la portée du module.
- Vérifier le statut HTTP avant de lire le JSON.
- Diagnostiquer serveur et CORS avec les outils réseau.
- Valider et extraire la structure des données reçues.

---

<!-- _class: light -->

## Une méthode de débogage

1. Lire le type d’erreur et la ligne concernée.
2. Inspecter les valeurs et l’état du programme.
3. Formuler une hypothèse sur la cause.
4. Corriger puis rejouer le scénario.

---

## Console et sources

Dans les DevTools du navigateur :

- La **Console** affiche les erreurs et les traces d’appel.
- **Sources** permet d’ajouter des points d’arrêt.
- Inspectez la pile d’appels et les variables au moment de l’erreur.
- VS Code permet aussi un débogage pas à pas.

---

<!-- _class: light -->

## Diagnostiquer une requête API

Dans l’onglet **Network**, sélectionnez la requête `fetch` :

- Vérifiez l’URL et le statut HTTP.
- Consultez les en-têtes et le contenu de la réponse.
- Inspectez aussi Payload pour les données envoyées.
- Une réponse HTML n’est pas un document JSON.

---

<!-- _class: light -->

## Repères de statuts HTTP

- `200` / `201` : réponse réussie / ressource créée.
- `400` : requête invalide.
- `404` : route ou ressource introuvable.
- `422` : données refusées par la validation.
- `500` : erreur interne du serveur.

---

## Erreur 1 : propriété absente

Le code d’exemple lit l’auteur sans vérifier sa présence :

```javascript
document.getElementById("author-name").textContent =
  article.author.name;
```

Si `author` est absent, l’accès à `.name` déclenche un `TypeError`.

Voir [`error.js`](./code-examples/erreur-1/error.js).

---

<!-- _class: light -->

## Corriger l’erreur 1

Vérifier la réponse et prévoir une valeur de remplacement :

```javascript
if (!article || typeof article !== "object") return;

document.getElementById("article-title").textContent =
  article?.title ?? "Sans titre";
document.getElementById("author-name").textContent =
  article?.author?.name ?? "Auteur anonyme";
```

Voir la correction complète dans [`solution.js`](./code-examples/erreur-1/solution.js).

---

## Erreur 2 : fonction hors portée

Un gestionnaire HTML inline ne voit pas automatiquement une fonction dans un module ES.

```html
<button onclick="fetchPosts('technologie')">
  Voir Technologie
</button>
<script type="module" src="./js/app.js"></script>
```

Le module ne place pas `fetchPosts` sur `window`.

Voir [`erreur.html`](./code-examples/erreur-2/erreur.html).

---

<!-- _class: light -->

## Corriger l’erreur 2

Associer l’événement depuis le module :

```javascript
document.querySelectorAll(".btn-category").forEach((button) => {
  button.addEventListener("click", (event) => {
    fetchPosts(event.currentTarget.dataset.category);
  });
});
```

Cette approche évite de dépendre d’un appel inline global.

Si un appel inline est indispensable, le module peut exposer la fonction via `window`.

Voir [`solution.js`](./code-examples/erreur-2/solution.js).

---

## Erreur 3 : HTML lu comme JSON

Une erreur PHP peut renvoyer une page HTML. `response.json()` échoue alors au parsing.

```javascript
const response = await fetch(
  "http://localhost:8000/api/articles"
);
const articles = await response.json();
```

Le code de départ ne vérifie pas `response.ok`.

Voir [`error.js`](./code-examples/erreur-3/error.js).

---

<!-- _class: light -->

## Corriger l’erreur 3

Vérifier le statut HTTP, le JSON et les erreurs dans un même flux :

```javascript
try {
  const response = await fetch(url, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  renderArticles(await response.json());
} catch (error) {
  console.error("Échec du chargement :", error.message);
  showErrorMessageToUser("Impossible de charger les articles.");
}
```

Inspecter aussi la réponse serveur et corriger sa cause, telle que la configuration de base de données.

---

## Erreur 4 : échec réseau ou CORS

`Failed to fetch` peut signaler un serveur arrêté ou une origine non autorisée.

- Frontend : `http://localhost:3000`
- API : `http://localhost:8000`
- Consultez Console et Network pour distinguer les causes.

L’exemple initial d’envoi est dans [`error.js`](./code-examples/erreur-4/error.js).

---

<!-- _class: light -->

## Corriger l’erreur 4 : serveur

Démarrer le serveur PHP dans le projet backend :

```bash
php -S localhost:8000 -t public
```

Pour Laravel, l’exemple fournit aussi :

```bash
php artisan serve --port=8000
```

Voir [`start-server.sh`](./code-examples/erreur-4/start-server.sh).

---

## Corriger l’erreur 4 : CORS

Autoriser explicitement l’origine frontend dans la réponse PHP :

```php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}
```

N’autorisez que les origines nécessaires. Voir [`cors.php`](./code-examples/erreur-4/cors.php).

---

<!-- _class: light -->

## Erreur 5 : `map` sur une réponse inattendue

L’API renvoie un objet avec les données dans `data`, pas un tableau direct :

```json
{
  "status": "success",
  "data": [{ "id": 1, "title": "Premier article" }],
  "total": 1
}
```

Appeler `posts.map()` sur l’objet provoque un `TypeError`.

---

## Corriger l’erreur 5

Valider le tableau à la racine ou dans `data` avant l’affichage :

```javascript
const result = await response.json();
const postsList = Array.isArray(result)
  ? result
  : Array.isArray(result?.data) ? result.data : [];

const html = postsList.map((post) => `
  <article><h3>${post.title ?? "Titre indisponible"}</h3></article>
`).join("");
```

La correction complète est dans [`solution.js`](./code-examples/erreur-5/solution.js).

---

<!-- _class: light -->

## Prévoir une liste vide

Informer l’utilisateur quand l’API ne renvoie aucun article :

```javascript
if (postsList.length === 0) {
  document.querySelector("#feed").textContent =
    "Aucun article publié pour le moment.";
  return;
}
```

---

<!-- _class: light -->

## À retenir

- Le message d’erreur indique souvent le type et l’emplacement du problème.
- Network aide à inspecter les statuts et les réponses API.
- Vérifiez les données avant de les afficher ou de les transformer.
- Testez aussi les cas d’échec, pas uniquement le scénario nominal.
