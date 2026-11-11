---
name: lab-creator
description: "Créer ou adapter les livrables d'un lab à partir de son README et d'un plan générique. À utiliser pour préparer le contenu d'un lab et son plan de présentation."
---

# Création de lab

## Rôle

Préparer ou adapter les livrables d'un lab à partir des informations vérifiables de son README et du plan générique du workspace. Respecter les conventions déjà établies dans le dépôt et ne pas inventer de contenu présenté comme un fait.

## Quand utiliser cette skill

Utiliser cette skill pour créer ou adapter le contenu d'un lab existant ou nouveau, notamment son README, ses documents pédagogiques et son plan de présentation.

Pour mettre en forme le diaporama Marp, appliquer également la skill [`lab-adaptation`](../lab-adaptation/SKILL.md), qui contient les règles de présentation Marp de ce dépôt.

Pour créer ou modifier une skill ou une structure de fichiers destinée à l'agent, appliquer également la skill `skill-creator`.

## Entrées et contexte

1. Repérer le dossier `lab-*` concerné et conserver exactement son nom et son titre existants. Ne pas reformuler le titre ni modifier le slug.
2. Lire le README du lab avant de rédiger ou modifier ses livrables.
3. Rechercher le plan générique dans le workspace. Utiliser `template-plan.md` s'il existe à l'emplacement pertinent. S'il est absent, rechercher un plan générique existant sans prétendre qu'il porte ce nom.
4. Dans ce dépôt, le plan générique connu est [`lab-planing/planning.md`](../../../lab-planing/planning.md). Le consulter comme source de structure, sans reprendre les éléments qui contredisent les règles ci-dessous.
5. Examiner les fichiers existants avant toute modification et préserver leur contenu utile.

## Workflow

1. Identifier le lab concerné, lire son README et les documents existants, puis repérer le plan générique applicable.
2. Déduire du README les objectifs, notions, prérequis, outils et étapes effectivement documentés. Signaler les informations absentes au lieu de les inventer.
3. Rédiger en français et adapter les sections génériques aux objectifs et aux notions réellement présents dans le README.
4. Placer le plan de présentation dans `presentation.md`. Ne pas dupliquer ce plan dans le README ni proposer le plan de présentation dans celui-ci.
5. Pour un lab technique, prévoir un Quick Start et un Hello World exécutable. Vérifier les commandes, les versions et les prérequis par rapport au projet ou à une source fiable disponible. Si une vérification est impossible, le signaler plutôt que de présenter une commande incertaine comme testée.
6. Avant de rédiger les sections sur les problèmes et les solutions, demander à l'étudiant :
   - « Quel problème concret rencontrez-vous ? »
   - « Quelle solution proposez-vous ? »
7. Si l'une ou l'autre réponse manque, laisser la section correspondante à compléter avec un marqueur explicite, par exemple `[À compléter par l'étudiant]`. Ne pas présenter un problème ou une solution supposés comme des faits.
8. Appliquer les règles de lisibilité, de découpage et de validité Marp de la skill `lab-adaptation` à `presentation.md`.
9. Vérifier que les fichiers et liens modifiés sont cohérents, que le plan est uniquement dans `presentation.md` et qu'aucune diapositive de conclusion ou de remerciements n'a été ajoutée.
10. Résumer les fichiers créés ou modifiés, les vérifications effectuées et les points restant à compléter.

## Règles

- Conserver à l'identique le titre et le slug existants du lab, au format `lab-*`.
- Adapter le contenu au README et au plan générique réellement trouvés.
- Écrire en français.
- Ne jamais inventer un problème vécu, une solution choisie, des résultats ou des détails d'implémentation.
- Pour un lab technique, fournir un Quick Start et un Hello World réellement exécutable, cohérents avec les versions et la configuration du projet.
- Ne pas ajouter de diapositive de conclusion ou de remerciements.
- Préserver les fichiers existants et éviter les changements hors du périmètre du lab.
- Ne pas exécuter de commande Git si l'utilisateur l'interdit.
