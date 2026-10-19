---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #f8fafc
color: #1e293b
header: "Lab 02 : Comprendre l'Architecture MVC"
footer: "by oussama bekkali"
---

<style>
section {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  padding: 40px;
}
h1 {
  color: #0369a1;
}
h2 {
  color: #0f172a;
  border-bottom: 3px solid #0284c7;
  padding-bottom: 8px;
}
code {
  background-color: #f1f5f9;
  color: #0369a1;
  padding: 2px 6px;
  border-radius: 4px;
}
.box {
  background: white;
  border-left: 5px solid #0284c7;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
</style>

# Lab 02 : Comprendre l'Architecture MVC
### Découvrir le principe Model-View-Controller et le rôle de chaque composant

by oussama bekkali

---

## Problématique : Pourquoi Structurer une Application ?

### Le constat du code non structuré :
- Un fichier unique gère à la fois l'affichage, les requêtes SQL et la session.
- Difficulté majeure pour travailler à plusieurs développeurs.
- Risque constant de casser une fonctionnalité existante lors d'une modification.

### Le principe clé :
- **Séparation des Préoccupations (*Separation of Concerns*)** : chaque brique logicielle a une responsabilité unique et isolée.

---

## Origine et Définition du Pattern MVC

- **Origine** : Conçu par Trygve Reenskaug à la fin des années 1970 (Xerox PARC).
- **Principe** : Découper une application en trois composants majeurs :
  - **M** : Le Modèle (*Model*)
  - **V** : La Vue (*View*)
  - **C** : Le Contrôleur (*Controller*)

<div class="box">
<b>Règle d'or :</b> La Vue ne parle jamais directement à la base de données, et le Modèle ne génère jamais d'interface graphique.
</div>

---

## Le Modèle (Model) : Le Cœur Métier

- **Mission principale** :
  - Représente les données applicatives et applique les règles de gestion métier.
  - Interagit avec la base de données relationnelle via **Eloquent ORM**.
- **Ce qu'il contient** :
  - Définition des champs autorisés (`$fillable`).
  - Relations entre entités (`hasMany`, `belongsTo`).
  - Portées de requêtes (*Query Scopes*) pour filtrer facilement les données.
- **Ce qu'il ne doit JAMAIS contenir** :
  - Du code HTML, du CSS ou des redirections de pages web.

---

## La Vue (View) : L'Interface Utilisateur

- **Mission principale** :
  - Générer le balisage HTML final présenté à l'utilisateur dans son navigateur.
  - Dans Laravel, les vues sont conçues avec le moteur de templates **Blade**.
- **Ce qu'elle contient** :
  - Structure HTML et styles CSS.
  - Directives d'affichage simples : `@foreach`, `@if`, `{{ $variable }}`.
- **Ce qu'elle ne doit JAMAIS contenir** :
  - Des requêtes de base de données directes.
  - De la logique financière, du hashage de mot de passe ou des calculs lourds.

---

## Le Contrôleur (Controller) : Le Coordinateur

- **Mission principale** :
  - Servir de passerelle entre la requête HTTP, le Modèle et la Vue.
- **Ses étapes de travail** :
  1. Réceptionne la requête acheminée par le Routeur.
  2. Valide les données soumises par l'utilisateur.
  3. Interroge le Modèle approprié pour récupérer ou enregistrer des données.
  4. Choisit la Vue adéquate et lui injecte les données.
- **Règle essentielle** :
  - Le contrôleur doit rester léger (*Thin Controller*) : il délègue l'effort métier au modèle.

---

## Le Cycle d'une Requête HTTP en MVC

```
Client (Navigateur)
       │
       ▼ (1. Requête HTTP)
Routeur (routes/web.php)
       │
       ▼ (2. Aiguillage)
Contrôleur (app/Http/Controllers/)
       │
       ├──► (3. Demande de données) ──► Modèle (app/Models/)
       │                                     │
       │                                     ▼ (4. SQL)
       │                              Base de Données
       │                                     │
       ◄── (5. Données retournées) ◄─────────┘
       │
       ▼ (6. Transmission des variables)
Vue Blade (resources/views/)
       │
       ▼ (7. Rendu HTML)
Client (Navigateur affiche la page)
```

---

## Organisation Concrète dans Laravel

| Couche MVC | Emplacement dans le Projet | Exemple de Fichier |
| :--- | :--- | :--- |
| **Modèle** | `app/Models/` | `Task.php`, `User.php` |
| **Contrôleur** | `app/Http/Controllers/` | `TaskController.php` |
| **Vue** | `resources/views/` | `tasks/index.blade.php` |
| **Routage** | `routes/web.php` | Déclare l'URL et cible le contrôleur |

---

## Les Anti-Patterns à Éviter Absolument

### 1. Le Contrôleur Obèse (*Fat Controller*)
- Écrire 400 lignes dans une méthode de contrôleur.
- **Solution** : Déplacer la logique dans le modèle ou dans des classes de services.

### 2. La Vue Intelligente (*Smart View*)
- Faire des requêtes de type `User::all()` directement dans le template Blade.
- **Solution** : Toujours préparer les données en amont dans le contrôleur.

### 3. Le Modèle Anémique (*Anemic Model*)
- Laisser le modèle vide et faire tous les calculs dans le contrôleur.
- **Solution** : Enrichir le modèle avec des accesseurs et des scopes.

---

## Synthèse : Les Bénéfices du Pattern MVC

1. **Maintenabilité** : Code ordonné, lisible et standardisé à l'échelle mondiale.
2. **Travail d'équipe** : Séparation nette entre travail back-end et intégration front-end.
3. **Évolutivité** : Possibilité de faire évoluer la base de données sans toucher aux gabarits d'affichage.
4. **Testabilité** : Chaque composant peut être vérifié unitairement de manière fiable.

---

<!-- _class: lead -->

# Merci pour votre attention !

### Des questions sur l'Architecture MVC ?

Tous les exercices pratiques et le code d'exemple sont disponibles dans le dossier :  
`lab-02-architecture-mvc/`
