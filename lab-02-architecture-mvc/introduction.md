# Introduction : L'Architecture MVC

---

## 1. Contexte Historique et Origine

Le patron d'architecture logicielle **MVC (Model-View-Controller)** a été introduit à la fin des années 1970 par l'informaticien norvégien **Trygve Reenskaug** alors qu'il travaillait sur le langage Smalltalk au célèbre centre de recherche **Xerox PARC**.

Initialement imaginé pour les interfaces graphiques des ordinateurs personnels naissants, le modèle MVC a connu une renaissance spectaculaire au milieu des années 2000 avec l'essor du Web 2.0 et l'émergence des premiers frameworks modernes (Ruby on Rails, Django, Symfony, puis Laravel).

Avant la standardisation du MVC dans le monde web, la majorité des applications PHP étaient développées sous la forme de scripts procéduraux indépendants. Un même fichier `profil.php` ou `articles.php` prenait alors en charge :
- La lecture manuelle des variables de session et des paramètres d'URL,
- L'exécution de requêtes SQL brutes vers la base de données,
- La vérification des règles de gestion métier,
- L'écriture directe de balises HTML mélangées à des instructions d'affichage.

Ce couplage excessif conduisait inévitablement à un code fragile, difficile à tester, presque impossible à faire évoluer à plusieurs et particulièrement vulnérable aux régressions.

---

## 2. Le Rôle Fondamental du Patron MVC

Le cœur de la philosophie MVC repose sur un grand principe du génie logiciel : **la séparation des préoccupations (*Separation of Concerns* ou SoC)**.

Plutôt que de confier l'intégralité d'un traitement à un unique bloc de code, l'application est découpée en trois strates distinctes ayant chacune une mission unique et bien délimitée :

1. **Le Modèle (Model)** : sait **comment manipuler les données** et faire appliquer les règles métier. Il ignore totalement comment ces données seront affichées à l'écran.
2. **La Vue (View)** : sait **comment présenter l'information** à l'utilisateur (HTML, CSS, JSON). Elle ignore comment les données ont été extraites ou calculées.
3. **Le Contrôleur (Controller)** : sert de **passerelle et de chef d'orchestre**. Il reçoit la demande de l'utilisateur, interroge le Modèle approprié, puis transmet le résultat à la Vue pour affichage.

### Pourquoi l'Architecture MVC est-elle Indispensable ?

- **Clarté et Organisation** : Chaque fichier a un emplacement précis et une responsabilité unique. Un développeur sait immédiatement où intervenir pour modifier une requête (dans le Modèle) ou corriger une mise en page (dans la Vue).
- **Facilité du Travail Collaboratif** : Les développeurs back-end peuvent travailler sur les modèles et la logique sans bloquer les développeurs front-end ou intégrateurs travaillant sur les vues.
- **Maintenabilité et Évolutivité** : Modifier la structure d'une table SQL ou remplacer un moteur de templates ne nécessite pas de réécrire l'ensemble de l'application.
- **Testabilité** : Chaque composant peut être testé unitairement de manière isolée, garantissant une meilleure robustesse logicielle.

---

## 3. Objectifs Pédagogiques

À travers ce laboratoire, vous allez acquérir les compétences nécessaires pour :

- Comprendre le rôle individuel et collectif de chaque élément du triptyque Modèle - Vue - Contrôleur.
- Identifier avec précision dans quel composant placer une règle de validation, une requête de base de données ou un élément d'interface.
- Maîtriser le cycle de vie complet d'une requête HTTP sous le prisme MVC dans Laravel.
- Diagnostiquer et corriger les mauvaises pratiques courantes pour garantir un code propre, professionnel et maintenable.

---

[Sommaire du Lab](./README.md) | [Passer à la Définition & Rôles des Composants](./definition.md)
