---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: Inter, system-ui, sans-serif;
  }

  h1, h2, h3 {
    font-family: Anton, Impact, sans-serif;
  }

  section.light {
    background: #ffffff;
    color: #222222;
  }
---

# Créer et tester des Skills avec des agents IA

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

**Objectif :** concevoir des Skills réutilisables pour aider les agents IA à réaliser des tâches de façon structurée.

- Définir le rôle, le périmètre et les étapes d’un Skill.
- Adapter les instructions à la tâche plutôt que réutiliser un modèle générique sans contexte.
- Vérifier le même Skill avec **Antigravity** et **GitHub Copilot dans VS Code**.
- Comparer les résultats à des critères observables : respect des consignes, qualité du livrable et facilité d’utilisation.

---

<!-- _class: light -->

## Problems Encountered

Aucun problème technique bloquant ni incident de test n’a été rapporté pour ce lab.

Les résultats d’essais avec Antigravity et GitHub Copilot dans VS Code ne sont pas fournis. Il n’est donc pas possible d’affirmer que le Skill a déjà été testé ou de conclure à son utilité mesurée.

---

## Solutions Implemented

La démarche à appliquer pour satisfaire l’objectif du lab :

| Besoin                   | Réponse                                                                     |
| :----------------------- | :-------------------------------------------------------------------------- |
| Consignes imprécises     | Décrire le déclencheur, le périmètre et le résultat attendu.                |
| Résultats variables      | Définir des étapes et des critères de vérification explicites.              |
| Différences entre agents | Tester le même cas dans les deux environnements.                            |
| Utilité non vérifiée     | Consigner les résultats et améliorer le Skill à partir des écarts observés. |

Les tests restent à effectuer et à documenter avant de déclarer le Skill validé.

---

<!-- _class: light -->

## Anatomie d’un Skill

Un Skill est un ensemble d’instructions réutilisables pour guider un agent sur une tâche ciblée.

- **Métadonnées :** nom et description permettant d’identifier le Skill.
- **Objectif :** tâche précise qu’il doit aider à réaliser.
- **Règles :** contraintes et attentes à respecter.
- **Workflow :** étapes ordonnées pour produire le livrable.
- **Validation :** conditions permettant de vérifier le résultat.

Dans ce dépôt, le Skill Antigravity existant suit cette structure dans `.agent/skills/lab-creator/skill.md`. Un exemple côté Copilot se trouve dans `.github/skills/lab-adaptation/SKILL.md`.

---

## Exemple de structure

Le Skill `lab_creator` présent dans le dépôt déclare des métadonnées puis organise ses instructions en sections :

```markdown
---
name: lab-creator
description: Creates organized educational labs in separate subdirectories.
---

# Lab Creator Skill

## Purpose

Create well-organized educational labs.

## Rules

1. Focus each lab on one subject.
2. Inspect existing labs before creating another.

## Workflow

1. Inspect the repository.
2. Create the required deliverables.
3. Verify files and relative links.
```

Le contenu doit être adapté au format et à l’emplacement attendus par l’agent visé.

---

<!-- _class: light -->

## Concevoir un Skill adapté à une tâche

1. **Cibler une tâche récurrente** et son public.
2. **Définir le livrable** : fichiers, format, langue et niveau de détail.
3. **Écrire des règles vérifiables**, sans ambiguïté ni exigences contradictoires.
4. **Décrire un workflow** qui suit l’ordre réel du travail.
5. **Ajouter des critères de validation** et signaler les informations manquantes.
6. **Enregistrer le Skill** dans l’emplacement approprié à l’agent.

Un bon Skill guide l’agent sans inventer de faits ni élargir la tâche demandée.

---

## Tester dans les deux environnements

Utiliser le même Skill, le même dépôt et la même tâche représentative pour rendre la comparaison utile.

1. Ouvrir le projet dans Antigravity et demander une tâche couverte par le Skill.
2. Vérifier que le Skill est pris en compte et examiner les fichiers produits.
3. Répéter la même demande avec GitHub Copilot dans VS Code.
4. Comparer chaque résultat aux critères du Skill.
5. Corriger les instructions en cas d’écart, puis répéter les essais.

Ne pas considérer une réponse plausible comme une preuve : vérifier le livrable et les exigences une par une.

---

<!-- _class: light -->

## Grille de validation

| Critère                                          | Antigravity | Copilot dans VS Code |
| :----------------------------------------------- | :---------: | :------------------: |
| Skill activé pour la tâche cible                 |  À tester   |       À tester       |
| Étapes et contraintes respectées                 | À vérifier  |      À vérifier      |
| Livrable conforme au format attendu              | À vérifier  |      À vérifier      |
| Instructions assez claires pour être réutilisées |  À évaluer  |      À évaluer       |

Consigner pour chaque essai : tâche utilisée, résultat, écarts observés et modification apportée au Skill.

---

## Résultat attendu

À l’issue des essais, le Skill doit :

- aider à produire un livrable conforme à la tâche ;
- donner des résultats contrôlables dans les deux environnements ;
- expliciter les limites ou informations manquantes ;
- être révisé lorsque les tests révèlent des consignes ambiguës ou incomplètes.

**Statut dans ce lab :** la méthode et la grille sont définies ; les tests et leurs résultats restent à renseigner.
