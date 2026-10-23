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

**Objectif :** créer des Skills réutilisables qui guident les agents IA sur une tâche précise.

- Définir un périmètre et un livrable clairs.
- Structurer des instructions en étapes vérifiables.
- Comparer un même Skill dans Antigravity et Copilot pour VS Code.

---

<!-- _class: light -->

## Problems Encountered

- Aucun problème technique bloquant n’est rapporté.
- Les essais avec Antigravity et Copilot ne sont pas documentés.
- Leur activation et leurs résultats restent donc à vérifier.

---

## Solutions Implemented

La méthode du lab définit comment concevoir et évaluer un Skill :

- Préciser le déclencheur, le périmètre et le résultat attendu.
- Décomposer le travail en étapes et critères vérifiables.
- Tester la même tâche dans les deux environnements.
- Documenter les écarts avant toute conclusion.

**Statut :** les essais restent à effectuer.

---

<!-- _class: light -->

## Anatomie d’un Skill

Un Skill regroupe des instructions réutilisables pour une tâche ciblée.

- **Métadonnées :** identifier le Skill.
- **Objectif :** décrire la tâche visée.
- **Règles et workflow :** guider l’exécution.
- **Validation :** vérifier le résultat produit.

---

## Exemples dans le dépôt

- `.agent/skills/lab-creator/skill.md`
  - Exemple de Skill pour créer des labs.
- `.github/skills/lab-adaptation/SKILL.md`
  - Exemple de Skill pour adapter des présentations.

Ces deux fichiers montrent des emplacements propres à leurs agents.

---

<!-- _class: light -->

## Déclarer les métadonnées

Le front matter identifie le Skill et résume son rôle.

```yaml
---
name: lab-creator
description: Creates organized educational labs.
---
```

Le contenu doit respecter le format attendu par l’agent.

---

## Organiser les instructions

Des sections distinctes rendent le Skill plus facile à suivre.

```markdown
# Lab Creator Skill

## Purpose
## Rules
## Workflow
## Validation
```

Chaque section répond à un besoin différent.

---

<!-- _class: light -->

## Définir la tâche et le livrable

- Choisir une tâche récurrente et son public.
- Spécifier les fichiers, le format, la langue et le niveau.
- Rédiger des règles précises et vérifiables.

---

## Décrire une exécution fiable

- Ordonner les étapes selon le travail réel.
- Définir comment valider le livrable.
- Signaler les informations manquantes au lieu de les supposer.
- Enregistrer le Skill à l’emplacement approprié.

---

<!-- _class: light -->

## Comparer les deux environnements

1. Utiliser le même dépôt et la même tâche.
2. Lancer l’essai dans Antigravity.
3. Reproduire la demande dans Copilot pour VS Code.
4. Examiner les deux livrables avec les mêmes critères.

---

## Vérifier les résultats

| Critère | Antigravity | Copilot |
| :-- | :--: | :--: |
| Skill activé pour la tâche | À tester | À tester |
| Étapes et règles respectées | À vérifier | À vérifier |
| Livrable conforme au format | À vérifier | À vérifier |
| Instructions claires à réutiliser | À évaluer | À évaluer |

---

<!-- _class: light -->

## Documenter et améliorer

Pour chaque essai, consigner :

- La tâche et l’environnement utilisés.
- Le résultat et les écarts constatés.
- Les changements apportés au Skill.

Répéter les essais après une modification importante.

---

## Résultat attendu

Le Skill doit guider la production d’un livrable conforme et vérifiable dans les deux environnements.

- Rendre visibles les limites et les informations manquantes.
- Réviser les consignes lorsque les essais révèlent des écarts.

**Statut du lab :** méthode et grille définies ; essais à documenter.
