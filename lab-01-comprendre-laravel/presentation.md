---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 28px;
    padding: 48px 64px;
    background: #101827;
    color: #e8eef7;
  }
  section.light {
    background: #f5f8fc;
    color: #202b3c;
  }
  h1, h2 { color: #56c2d6; }
  section.light h1, section.light h2 { color: #1769aa; }
  strong { color: #73d6bd; }
  section.light strong { color: #1769aa; }
  pre { font-size: 0.75em; }
---

# Lab 01 : Comprendre Laravel

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

Ce lab présente Laravel, un framework web open source écrit en PHP.

- Comprendre son rôle dans la création d’applications web.
- Découvrir MVC, Artisan, Eloquent et Blade.
- Situer les routes et les migrations dans le projet.

---

<!-- _class: light -->

## Problems Encountered

Aucun problème technique bloquant n’est rapporté pour ce lab.

Le code PHP non structuré est présenté comme motivation : mélanger HTML, SQL et logique complique la maintenance.

---

## Solutions Implemented

Le lab présente Laravel comme cadre de travail structuré :

- MVC répartit les responsabilités de l’application.
- Artisan automatise les tâches courantes du projet.
- Eloquent et Blade fournissent des outils pour les données et les vues.

---

<!-- _class: light -->

## Pourquoi utiliser un framework ?

Sans structure, un script peut mélanger affichage, traitement et accès aux données.

- Les responsabilités deviennent difficiles à séparer.
- Les changements sont plus difficiles à maintenir.
- Un framework fournit des conventions et composants réutilisables.

---

## Laravel en bref

- Framework web full-stack open source en PHP.
- Suit des conventions pour réduire la configuration répétitive.
- Fournit des outils pour le routage, les données et les vues.
- Vise un développement d’applications organisé et expressif.

---

<!-- _class: light -->

## MVC : trois responsabilités

- **Modèle :** données et règles métier.
- **Vue :** présentation des informations.
- **Contrôleur :** coordonne la requête, les données et la réponse.

Laravel utilise notamment Eloquent et Blade pour ces composants.

---

## Cycle d’une requête Laravel

```text
Navigateur → Route → Middleware → Contrôleur
                                  ↓
                           Modèle / Eloquent
                                  ↓
                            Base de données
                                  ↓
Contrôleur → Vue Blade → Réponse HTTP
```

La route dirige la requête ; le contrôleur prépare la réponse.

---

<!-- _class: light -->

## Artisan : commandes du projet

Artisan est l’interface en ligne de commande de Laravel.

```bash
php artisan make:model Article
php artisan migrate
```

Les commandes disponibles dépendent de la version et du projet Laravel.

---

## Eloquent : interroger les données

Un modèle Eloquent permet d’interroger une table avec une API PHP.

```php
$users = User::where('active', true)
    ->latest()
    ->get();
```

Eloquent utilise des requêtes liées pour les valeurs, mais les entrées doivent toujours être validées.

---

<!-- _class: light -->

## Blade : afficher une liste

Blade fournit des directives pour afficher des données transmises à la vue.

```blade
@foreach ($articles as $article)
    <article>
        <h2>{{ $article->title }}</h2>
        <p>{{ $article->description }}</p>
    </article>
@endforeach
```

L’échappement de `{{ }}` aide à afficher le texte sans interpréter son HTML.

---

## Migrations et seeders

- Les migrations décrivent les changements de schéma de la base.
- Elles permettent de partager ces changements via le code.
- Les seeders insèrent des données d’exemple ou de test.

---

<!-- _class: light -->

## L’écosystème Laravel

- **Composer :** gestion des dépendances PHP.
- **Routing et middleware :** traitement des requêtes HTTP.
- **Eloquent et migrations :** accès et évolution des données.
- **Blade :** rendu de vues côté serveur.

---

<!-- _class: light -->

## Outils de l’écosystème

- **Breeze et Jetstream :** options de démarrage pour l’authentification.
- **Sanctum :** authentification pour applications et API.
- **Livewire :** interfaces interactives avec Laravel.
- **Inertia :** relie Laravel à des frameworks frontend.

Les fonctionnalités varient selon les versions et les besoins du projet.

---

## À retenir

- Laravel structure le développement d’applications web en PHP.
- MVC sépare données, présentation et coordination.
- Artisan, Eloquent, Blade et les migrations répondent à des besoins distincts.

---

<!-- _class: light -->

## Pour continuer

Le lab détaille les concepts et les exercices dans :

- [`introduction.md`](./introduction.md)
- [`definition.md`](./definition.md)
- [`practical.md`](./practical.md)
