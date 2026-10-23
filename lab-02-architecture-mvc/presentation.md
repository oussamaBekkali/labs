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

# Lab 02 : Comprendre l’Architecture MVC

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

Ce lab explique l’architecture Model–View–Controller (MVC) et son usage dans Laravel.

- Comprendre la séparation des responsabilités.
- Identifier les rôles du modèle, de la vue et du contrôleur.
- Suivre une requête HTTP dans une application Laravel.

---

<!-- _class: light -->

## Problems Encountered

Aucun incident technique de lab n’est rapporté.

Le matériel décrit le code non structuré comme contexte : lorsqu’un fichier mélange SQL, logique métier et HTML, il devient difficile à modifier.

---

## Solutions Implemented

MVC répartit le travail entre des composants aux responsabilités distinctes :

- Le modèle travaille avec les données et les règles métier.
- La vue présente les données.
- Le contrôleur coordonne la requête et la réponse.

---

<!-- _class: light -->

## Le modèle

Le modèle représente les données du domaine et leur accès.

- Dans Laravel, Eloquent relie les modèles aux tables.
- Les modèles peuvent définir des relations entre entités.
- Le modèle ne génère pas l’interface HTML.

---

## La vue

La vue présente les données à l’utilisateur.

- Laravel utilise Blade pour les vues côté serveur.
- Une vue contient du HTML et des directives de présentation.
- Les données sont préparées avant le rendu.
- Une vue n’interroge pas directement la base de données.

---

<!-- _class: light -->

## Le contrôleur

Le contrôleur reçoit une requête et coordonne son traitement.

1. Reçoit les données après le routage.
2. Valide les entrées selon le besoin.
3. Demande les données au modèle.
4. Retourne une vue ou une autre réponse.

---

## Cycle d’une requête MVC

```text
Navigateur → Route → Contrôleur
                         ↓
                      Modèle
                         ↕
                   Base de données
                         ↓
Contrôleur → Vue → Réponse HTTP → Navigateur
```

Le contrôleur coordonne ; chaque couche conserve son rôle.

---

<!-- _class: light -->

## Où trouver les composants ?

| Composant | Emplacement Laravel |
| :-- | :-- |
| Modèle | `app/Models/` |
| Contrôleur | `app/Http/Controllers/` |
| Vue Blade | `resources/views/` |
| Routes web | `routes/web.php` |

---

## Garder le contrôleur léger

Un contrôleur trop chargé concentre des tâches sans rapport.

- Extraire les règles métier complexes du contrôleur.
- Éviter les longues méthodes de traitement.
- Déléguer l’accès aux données aux modèles ou services appropriés.

---

<!-- _class: light -->

## Garder la vue dédiée à la présentation

Une vue doit afficher les données, pas gérer leur persistance.

- Éviter les requêtes de base de données dans Blade.
- Limiter les vues aux conditions et boucles d’affichage simples.
- Préparer les données avant le rendu.

---

## Éviter un modèle anémique

Un modèle vide peut laisser toute la logique métier dans les contrôleurs.

- Placer les comportements liés aux données dans la couche appropriée.
- Utiliser relations et scopes Eloquent lorsque cela convient.
- Garder les responsabilités explicites.

---

<!-- _class: light -->

## Bénéfices de MVC

- Le code est plus simple à localiser et maintenir.
- Les responsabilités facilitent le travail en parallèle.
- Les composants peuvent être testés séparément.
- Une modification d’une couche perturbe moins les autres.

---

## À retenir

- Le modèle traite les données et règles du domaine.
- La vue affiche les informations préparées.
- Le contrôleur orchestre le traitement HTTP.
- La séparation des responsabilités aide la maintenance.

---

<!-- _class: light -->

## Pour continuer

Les exercices d’application se trouvent dans [`practical.md`](./practical.md).
