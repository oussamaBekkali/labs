---
trigger: always_on
---

# Règle sur les fichiers README de lab

- **Ne jamais créer un README de zéro :** L'IA ne doit jamais inventer ni générer le fichier `README.md` d'un lab à partir de rien. L'utilisateur fournit toujours son contenu brut (notes, problème réel, objectifs, contexte).
- **Rôle de l'IA :** Lire les notes brutes fournies par l'utilisateur et les restructurer fidèlement, sans altérer ses intentions ni inventer de faits.
- **Structure obligatoire en 3 parties :**
  1. `## 1. Besoin du projet technique` : problème concret à résoudre, pourquoi ce lab est nécessaire, et ce qu'il apporte au projet technique.
  2. `## 2. Notions et techniques à apprendre` : concepts clés expliqués simplement avec de courts exemples concrets entre parenthèses.
  3. `## 3. Réalisation attendue` : rédiger le prompt précis destiné à l'IA pour générer les exemples pratiques du lab (forme, contenu attendu, fil conducteur et contraintes), au lieu de lister les fichiers déjà créés.
- **Style de rédaction exigé :**
  - **Compact :** listes à puces directes et concises, sans longs blocs de texte verbeux.
  - **Facile à comprendre :** langage vulgarisé, simple et accessible dès la première lecture, sans jargon théorique excessif.

