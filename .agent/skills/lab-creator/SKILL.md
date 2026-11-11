---
name: lab-creator
description: "Créer ou adapter les livrables d'un lab à partir de son README et d'un plan générique. À utiliser pour préparer le contenu d'un lab et son plan de présentation."
---

# Création de lab

Cette skill orchestre la préparation des livrables d'un lab. Pour la mise en forme de la présentation, appliquer aussi la skill `marp`. Pour créer une structure de fichiers ou une skill, appliquer la skill `skill-creator`.

## Règles

- Conserver à l'identique le titre/slug existant du lab, au format `lab-*`. Ne pas le remplacer par un titre reformulé.
- **Rôle sur le README :** Ne pas générer ou inventer le fichier `README.md` de zéro. L'utilisateur fournit le contenu brut (notes, objectifs, contexte). L'IA le lit, le synthétise et le restructure sans déformer ses intentions.
- **Structure obligatoire du `README.md` (3 parties) :**
  1. `## 1. Besoin du projet technique` : problème concret à résoudre, pourquoi ce lab est nécessaire, et ce qu'il apporte au projet.
  2. `## 2. Notions et techniques à apprendre` : concepts clés expliqués simplement avec de mini-exemples concrets entre parenthèses.
  3. `## 3. Réalisation attendue` : rédiger le prompt précis destiné à l'IA pour générer les exemples pratiques du lab (forme, contenu attendu, fil conducteur et contraintes), au lieu de lister les fichiers déjà créés.
- **Style de rédaction du README :**
  - **Compact :** listes à puces directes et concises, sans longs blocs de texte verbeux.
  - **Facile à comprendre :** langage clair, accessible et vulgarisé, évitant le jargon académique lourd pour une compréhension immédiate.
- Lire le README du lab et le plan générique disponible. Si un fichier `template-plan.md` est absent, rechercher le plan générique du workspace et l'utiliser sans prétendre qu'il porte un autre nom.
- Mettre le plan de présentation dans `presentation.md`. Ne pas dupliquer ni proposer ce plan dans le README.
- Rédiger en français et adapter les sections génériques aux objectifs et aux notions réellement présents dans le README.
- Pour un lab technique, prévoir un Quick Start et un Hello World exécutable; vérifier que les commandes et versions correspondent au projet.
- Ne jamais inventer le problème vécu ni la solution choisie par l'étudiant. Avant de rédiger ces sections, lui demander : « Quel problème concret rencontrez-vous ? » et « Quelle solution proposez-vous ? ». Si les réponses manquent, laisser ces contenus à compléter et ne pas les présenter comme des faits.
- Ne pas ajouter de diapositive de conclusion ou de remerciements.
- Ne pas exécuter de commande Git si l'utilisateur l'interdit.


