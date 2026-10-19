# Lab 02 : Comprendre l'Architecture MVC

Ce laboratoire pédagogique est consacré à la compréhension approfondie du patron d'architecture logicielle **MVC (Modèle - Vue - Contrôleur)** et à son application concrète au sein du framework **Laravel**.

---

## Informations Générales

- **Numéro du lab** : 02
- **Sujet** : Comprendre l'architecture MVC (Model - View - Controller)
- **Niveau** : Débutant / Intermédiaire
- **Auteur** : by oussama bekkali
- **Durée estimée** : 2 à 3 heures

---

## Objectifs d'Apprentissage

À l'issue de ce lab, vous serez capable de :

1. **Définir** le patron d'architecture MVC et expliquer le principe fondamental de séparation des responsabilités (*Separation of Concerns*).
2. **Identifier** le rôle précis et les limites de chaque composant :
   - Le **Modèle (Model)** : gestion des données et logique métier.
   - La **Vue (View)** : présentation graphique et interface utilisateur.
   - Le **Contrôleur (Controller)** : réception des requêtes et coordination des flux.
3. **Schématiser** le cycle complet de traitement d'une requête HTTP traversant la Route, le Contrôleur, le Modèle et la Vue.
4. **Reconnaître et corriger** les anti-patterns courants (ex: requêtes SQL dans les vues, contrôleurs surchargés).
5. **Implémenter** une fonctionnalité complète dans Laravel en respectant scrupuleusement la séparation MVC.

---

## Sommaire du Lab

| Document | Description | Lien |
| :--- | :--- | :--- |
| **1. Introduction** | Genèse du patron MVC, problématique du couplage et importance architecturale | [Consulter l'Introduction](./introduction.md) |
| **2. Définition & Rôles** | Définitions approfondies de chaque couche, diagramme des flux et bonnes pratiques | [Consulter la Définition](./definition.md) |
| **3. Travaux Pratiques** | Mise en œuvre guidée dans Laravel, refactorisation d'anti-patterns et challenge | [Accéder aux Travaux Pratiques](./practical.md) |
| **4. Présentation** | Diapositives au format Marp pour animation ou restitution orale | [Voir la Présentation](./presentation.md) |

---

## Outils et Prérequis

- Avoir suivi et validé le [Lab 01 : Comprendre Laravel](../lab-01-comprendre-laravel/README.md).
- PHP (version 8.2 ou supérieure).
- Composer installé sur le poste de développement.
- Un éditeur de code moderne (VS Code, Antigravity IDE ou PhpStorm).
- Un terminal de commande (PowerShell, Bash).

---

[Retour à l'index principal des labs](../README.md)
