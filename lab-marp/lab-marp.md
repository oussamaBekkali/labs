---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: Inter, "Segoe UI", sans-serif;
    background: #101827;
    color: #e8eef7;
    padding: 48px 64px;
    font-size: 28px;
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

# Découverte de Marp

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## Introduction

Marp transforme des fichiers Markdown en présentations.

- Structurer les diapositives et leurs titres.
- Ajouter du code, des images et des styles.
- Prévisualiser puis exporter le diaporama.

Outils : Marp Core, Marp CLI et l’extension Marp pour VS Code.

---

<!-- _class: light -->

## Problems Encountered

Aucun incident bloquant n’est rapporté pour ce lab.

Le matériel présente des points de vigilance courants : contenu trop dense, images mal dimensionnées, directives mal comprises et contraste insuffisant.

---

## Solutions Implemented

Le lab enseigne des pratiques pour maîtriser ces contraintes :

- Fractionner les idées sur plusieurs diapositives.
- Dimensionner les images selon leur usage.
- Distinguer les directives globales et locales.
- Vérifier contraste et rendu avant diffusion.

---

<!-- _class: light -->

## Anatomie d’un fichier Marp

- Le front matter YAML configure le diaporama.
- `marp: true` active le rendu Marp.
- `---` sépare les diapositives.
- Le contenu des slides reste du Markdown.

---

## Configurer le front matter

```yaml
---
marp: true
theme: default
paginate: true
size: 16:9
---
```

Ajoutez un thème, la pagination et le format souhaités.

---

<!-- _class: light -->

## Séparer les diapositives

Une ligne `---` démarre une nouvelle diapositive :

```markdown
## Première idée

Contenu de la première slide.

---

## Idée suivante
```

Un séparateur net facilite aussi la lecture du fichier source.

---

## Structurer les titres

```markdown
# Titre principal
## Titre de diapositive
### Sous-section
```

Gardez une hiérarchie cohérente et un titre clair par slide.

---

<!-- _class: light -->

## Garder les listes concises

- Utilisez les puces pour regrouper des éléments liés.
- Utilisez une liste numérotée pour les étapes.
- Scindez une longue liste plutôt que de réduire le texte.
- Limitez chaque slide à une idée principale.

---

## Ajouter du code

Indiquez le langage pour activer la coloration syntaxique.

```javascript
const message = "Bonjour";
console.log(message);
```

Montrez uniquement les lignes utiles à l’explication.

---

<!-- _class: light -->

## Dimensionner une image

Marp accepte des attributs de taille dans la syntaxe d’image :

```markdown
![w:450px](images/schema.png)
![h:300px](images/capture.png)
```

Adaptez la dimension au contenu et à l’espace de la slide.

---

## Utiliser une image de fond

```markdown
![bg](images/background.jpg)
```

Une image peut aussi occuper une partie de la diapositive :

```markdown
![bg right:35%](images/illustration.jpg)
```

Vérifiez que le texte reste lisible sur le fond choisi.

---

<!-- _class: light -->

## Directives globales et locales

Les directives globales définissent des valeurs pour les slides suivantes :

```markdown
<!-- paginate: true -->
<!-- theme: gaia -->
```

Une directive préfixée `_` s’applique à la diapositive courante :

```markdown
<!-- _class: invert -->
```

---

## Personnaliser un thème

Le front matter accepte des règles CSS pour la présentation.

```yaml
style: |
  section {
    font-family: Arial, sans-serif;
  }
  h1 {
    color: #1769aa;
  }
```

Utilisez peu de styles et vérifiez leur contraste.

---

<!-- _class: light -->

## Prévisualiser dans VS Code

L’extension **Marp for VS Code** permet d’éditer le Markdown et de prévisualiser les slides.

- Vérifiez le rendu après les changements.
- Repérez les débordements et le texte trop dense.
- Contrôlez les images et leur chemin relatif.

---

## Exporter avec Marp CLI

Installer l’outil si nécessaire :

```bash
npm install -g @marp-team/marp-cli
```

Exporter en HTML, PDF ou PowerPoint :

```bash
marp lab-marp.md --html -o lab-marp.html
marp lab-marp.md --pdf --allow-local-files -o lab-marp.pdf
marp lab-marp.md --pptx -o lab-marp.pptx
```

---

<!-- _class: light -->

## Prévisualiser avec rechargement

Pour servir les fichiers du dossier et surveiller les changements :

```bash
marp -s -w .
```

Le CLI régénère l’aperçu lorsque les sources sont modifiées.

---

## À retenir

- Marp garde les présentations éditables en Markdown.
- Des slides focalisées facilitent la lecture.
- Une prévisualisation aide à repérer les problèmes de mise en page.
- Choisissez un export adapté à votre mode de diffusion.
