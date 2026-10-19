---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #f8fafc
color: #1e293b
header: "Lab 01 : Comprendre Laravel"
footer: "by oussama bekkali"
---

<style>
section {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  padding: 40px;
}
h1 {
  color: #dc2626;
}
h2 {
  color: #0f172a;
  border-bottom: 3px solid #dc2626;
  padding-bottom: 8px;
}
code {
  background-color: #f1f5f9;
  color: #b91c1c;
  padding: 2px 6px;
  border-radius: 4px;
}
.highlight {
  color: #dc2626;
  font-weight: bold;
}
.box {
  background: white;
  border-left: 5px solid #dc2626;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
</style>

# Lab 01 : Comprendre Laravel
### Rôle, Architecture, Avantages et Utilisation

by oussama bekkali

---

## Problématique : Pourquoi un Framework ?

### Avant les frameworks (PHP Spaghetti) :
- Mélange de requêtes SQL, logique métier et HTML dans un seul fichier.
- Risques de sécurité élevés (Injections SQL, XSS, failles CSRF).
- Code difficile à maintenir et à faire évoluer en équipe.

### La solution :
- Adopter un **cadre de travail structuré** (Framework).
- Respecter des standards de conception éprouvés.
- Réutiliser des composants testés et optimisés.

---

## Qu'est-ce que Laravel ?

- **Créateur** : Taylor Otwell (2011).
- **Philosophie** : *"The PHP Framework for Web Artisans"*.
- **Nature** : Framework web open-source full-stack en PHP.
- **Approche** : **"Batteries included"** & **"Convention over Configuration"**.

<div class="box">
<b>Objectif principal :</b> Rendre le développement agréable, élégant et ultra-productif sans sacrifier la puissance applicative.
</div>

---

## L'Architecture MVC

Laravel sépare rigoureusement les responsabilités de l'application :

- **M (Modèle - Model)** :
  - Représente les données et la logique métier.
  - Géré avec l'ORM **Eloquent**.
- **V (Vue - View)** :
  - Interface utilisateur finale présentée dans le navigateur.
  - Moteur de gabarits **Blade**.
- **C (Contrôleur - Controller)** :
  - Chef d'orchestre : intercepte la requête, consulte le modèle et génère la vue.

---

## Le Cycle d'une Requête HTTP

```
Navigateur (Client)
       │
       ▼
1. Routeur (routes/web.php)
       │
       ▼
2. Middleware (Vérification CSRF, Authentification)
       │
       ▼
3. Contrôleur (Exécute la méthode cible)
       ├──► 4. Modèle Eloquent ──► Base de Données (SQL)
       ▼
5. Vue Blade (Injecte les données dans le HTML)
       │
       ▼
Réponse HTTP envoyée au Navigateur
```

---

## Les 4 Piliers Fondamentaux de Laravel

1. **Artisan CLI** :
   - Interface en ligne de commande pour tout automatiser.
   - `php artisan make:model`, `php artisan migrate`, etc.
2. **Eloquent ORM** :
   - Manipulation intuitive de la base de données via la POO.
3. **Moteur Blade** :
   - Templates modulaires avec directives lisibles (`@if`, `@foreach`).
4. **Migrations & Seeders** :
   - Versionnement et initialisation structurée de la base de données.

---

## Eloquent ORM : L'Élégance du Code

Fini les requêtes SQL complexes et les `mysqli_query` à répétition !

### En PHP procédural :
```php
$sql = "SELECT * FROM users WHERE active = 1 ORDER BY created_at DESC";
$result = mysqli_query($conn, $sql);
```

### Avec Laravel Eloquent :
```php
$users = User::where('active', true)->latest()->get();
```

> Sécurisation automatique contre les **injections SQL** via des requêtes préparées systématiques.

---

## Le Moteur de Templates Blade

Blade combine rapidité d'exécution et syntaxe expressive :

```html
@extends('layouts.app')

@section('content')
    <h1>Catalogue de Formations</h1>

    @forelse($formations as $formation)
        <div class="card">
            <h3>{{ $formation->titre }}</h3>
            <p>{{ $formation->description }}</p>
        </div>
    @empty
        <p>Aucune formation disponible.</p>
    @endforelse
@endsection
```

---

## Les Avantages Majeurs de Laravel

- **Sécurité intégrée par défaut** :
  - Protection automatique contre les attaques **CSRF**, **XSS** et **SQLi**.
- **Écosystème géant et actif** :
  - Des millions d'utilisateurs, une documentation d'une clarté exemplaire.
- **Rapidité de développement (Time-to-Market)** :
  - Tout est fourni dès l'installation (auth, mail, files d'attente, cache).
- **Maintenabilité et Travail Collaboratif** :
  - Même structure pour tous les développeurs Laravel du monde.

---

## Un Écosystème Complet et Moderne

Laravel s'adapte à tous les besoins d'architecture logicielle :

- **Laravel Breeze / Jetstream** : Systèmes complets d'authentification.
- **Laravel Sanctum** : Sécurisation d'API REST pour applications mobiles / React / Vue.
- **Laravel Livewire** : Interfaces réactives modernes en pur PHP.
- **Laravel Inertia.js** : Le pont parfait entre Laravel et React / Vue.js.

---

## En Résumé

1. Laravel est le **leader incontesté des frameworks PHP modernes**.
2. Il applique le design pattern **MVC** pour une séparation propre du code.
3. Il offre une **boîte à outils complète** (Artisan, Eloquent, Blade).
4. Il garantit une **sécurité native** et une **productivité maximale**.

---

<!-- _class: lead -->

# Merci pour votre attention !

### Des questions ?

Retrouvez tous les exercices et guides dans le dossier :  
`lab-01-comprendre-laravel/`
