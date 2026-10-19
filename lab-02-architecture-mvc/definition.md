# Définition et Concepts Clés : L'Architecture MVC

---

## 1. Définition Technique du Patron MVC

Le patron d'architecture logicielle **MVC (Modèle - Vue - Contrôleur)** est un modèle de conception structurel qui organise une application informatique en trois couches interconnectées, en séparant la représentation interne des informations (les données) de la manière dont elles sont présentées et manipulées par l'utilisateur.

Cette organisation garantit le principe fondamental de **séparation des préoccupations (*Separation of Concerns*)** : chaque strate possède un domaine de responsabilité exclusif et bien délimité.

---

## 2. Rôles et Responsabilités Détaillés de Chaque Couche

```
                       ┌─────────────────────────────────────┐
                       │           Navigateur Web            │
                       │           (Utilisateur)             │
                       └───────────────┬─▲───────────────────┘
                                       │ │
                     Requête HTTP (1)  │ │ Réponse HTML / JSON (7)
                                       │ │
                                       ▼ │
                       ┌─────────────────┴───────────────────┐
                       │             ROUTEUR                 │
                       │        (routes/web.php)             │
                       └─────────────────┬───────────────────┘
                                         │ Transmet au (2)
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                             CONTROLEUR (Controller)                         │
│                                                                             │
│  - Reçoit la requête HTTP et valide les paramètres                          │
│  - Coordonne les actions sans effectuer de calculs bas niveau               │
│  - Appelle les Modèles appropriés                                           │
└──────────────────┬───────────────────────────────────────▲──────────────────┘
                   │ Demande des données (3)               │
                   ▼                                       │ Données retournées (4)
┌──────────────────────────────────────┐                   │
│            MODELE (Model)            │                   │
│                                      │                   │
│ - Structure des données              │                   │
│ - Logique métier et calculs internes │                   │
│ - Relations entre entités            │                   │
│ - Communication avec la DB (ORM)     │                   │
└──────────────────┬───────────────────┘                   │
                   │ Requête SQL (5)                       │
                   ▼                                       │
┌──────────────────────────────────────┐                   │
│           BASE DE DONNEES            │                   │
└──────────────────────────────────────┘                   │
                                                           │
                   Injecte les données dans la vue (6)     │
                   └───────────────────────────────────────┘
                                       │
                                       ▼
                       ┌─────────────────────────────────────┐
                       │              VUE (View)             │
                       │                                     │
                       │ - Génère le balisage HTML final     │
                       │ - Insère les données dynamiques     │
                       │ - Affiche les messages et alertes   │
                       └─────────────────────────────────────┘
```

---

### A. Le Modèle (Model)

Le **Modèle** constitue le cerveau métier de l'application. Il encapsule la structure des données, les règles d'intégrité métier, les relations et la persistance.

#### Ce que le Modèle FAIT :
- Représenter une entité concrète du domaine applicatif (ex: `Etudiant`, `Commande`, `Article`).
- Communiquer avec la base de données via un ORM (Eloquent dans Laravel).
- Définir les relations entre tables (ex: un étudiant appartient à une promotion).
- Appliquer des filtres ou des portées réutilisables (*Query Scopes*).
- Formater les valeurs brutes de la base de données via des accesseurs et mutateurs.

#### Ce que le Modèle NE DOIT PAS FAIRE :
- Contenir du code de mise en page HTML ou CSS.
- Manipuler directement la session utilisateur ou la requête HTTP (`Request`).
- Effectuer des redirections de pages web.

---

### B. La Vue (View)

La **Vue** est l'interface visible par l'utilisateur final. Sa seule mission est de présenter visuellement les données que le contrôleur lui transmet.

#### Ce que la Vue FAIT :
- Structurer le document HTML et appliquer les styles CSS.
- Parcourir des listes de données à l'aide de boucles simples (ex: `@foreach` en Blade).
- Afficher conditionnellement des blocs d'interface (ex: `@if($estConnecte)`).
- Présenter les messages d'erreur ou de succès retournés par le système.

#### Ce que la Vue NE DOIT PAS FAIRE :
- Exécuter des requêtes SQL ou interroger directement la base de données.
- Modifier l'état persistant des données en base.
- Traiter la logique de validation complexe ou des calculs financiers.

---

### C. Le Contrôleur (Controller)

Le **Contrôleur** est le chef d'orchestre. Il assure le pont de communication entre la requête de l'utilisateur, les données du Modèle et le rendu de la Vue.

#### Ce que le Contrôleur FAIT :
- Recevoir la requête HTTP transmise par le système de routage.
- Vérifier la validité des données entrantes (ex: formulaires).
- Solliciter les Modèles nécessaires pour récupérer, créer ou mettre à jour des enregistrements.
- Choisir la Vue à afficher et lui transmettre les données sous forme de variables.
- Renvoyer des réponses adaptées (vue HTML, redirection d'URL ou données au format JSON).

#### Ce que le Contrôleur NE DOIT PAS FAIRE :
- Écrire des requêtes SQL brutes ou des algorithmes métier complexes.
- Générer directement du balisage HTML dans ses méthodes (ex: éviter d'écrire `echo "<div>...</div>"`).
- Surcharger ses méthodes avec des centaines de lignes de code (anti-pattern du contrôleur obèse).

---

## 3. Terminologie Clé

| Terme | Définition dans le Contexte MVC |
| :--- | :--- |
| **Separation of Concerns (SoC)** | Principe de conception stipulant que chaque partie d'un logiciel doit adresser un problème informatique distinct. |
| **Single Responsibility Principle (SRP)** | Principe selon lequel une classe ou un composant ne doit avoir qu'une seule raison de changer. |
| **Active Record** | Patron de conception où une classe modèle représente directement une ligne d'une table SQL, combinant accès aux données et logique métier (utilisé par Laravel Eloquent). |
| **Data Mapper** | Patron alternatif où la persistance en base est totalement isolée des entités métier pures (utilisé par Doctrine / Symfony). |
| **Resource Controller** | Contrôleur Laravel standardisé implémentant nativement les 7 actions CRUD classiques (`index`, `create`, `store`, `show`, `edit`, `update`, `destroy`). |
| **Blade** | Moteur de rendu de vues de Laravel, permettant d'écrire des gabarits HTML sans exécuter de code PHP verbeux. |

---

## 4. Exemple Concret d'Implémentation dans Laravel

Prenons l'exemple d'une fonctionnalité affichant le profil d'un stagiaire.

### Le Modèle (`app/Models/Student.php`)
```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    protected $fillable = ['first_name', 'last_name', 'email', 'promotion_id'];

    // Relation métier : un stagiaire appartient à une promotion
    public function promotion(): BelongsTo
    {
        return $this->belongsTo(Promotion::class);
    }

    // Accesseur : calcul du nom complet
    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }
}
```

### Le Contrôleur (`app/Http/Controllers/StudentController.php`)
```php
namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\View\View;

class StudentController extends Controller
{
    public function show(int $id): View
    {
        // 1. Interroge le modèle
        $student = Student::with('promotion')->findOrFail($id);

        // 2. Transmet les données à la vue
        return view('students.show', [
            'student' => $student
        ]);
    }
}
```

### La Vue Blade (`resources/views/students/show.blade.php`)
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Profil Stagiaire</title>
</head>
<body>
    <h1>Profil de {{ $student->full_name }}</h1>
    <p>Adresse e-mail : {{ $student->email }}</p>
    <p>Promotion : {{ $student->promotion->name ?? 'Aucune affectation' }}</p>

    <a href="{{ route('students.index') }}">Retour à la liste</a>
</body>
</html>
```

---

## 5. Les Anti-Patterns à Éviter Absolument

Dans une architecture MVC mal comprise, trois dérives fréquentes surviennent chez les développeurs débutants :

### 1. Le "Fat Controller" (Contrôleur Obèse)
- **Erreur** : Placer toute la logique métier, les calculs mathématiques, l'envoi d'emails et la gestion d'upload dans une seule méthode de contrôleur de 300 lignes.
- **Correction** : Déléguer la logique métier aux Modèles, à des classes de Services dédiées ou à des Form Requests. Le contrôleur doit rester un simple coordinateur.

### 2. La "Smart View" (Vue Intelligente)
- **Erreur** : Écrire du code PHP lourd ou exécuter des requêtes de base de données directement dans le fichier Blade (ex: `Article::all()` écrit dans la vue).
- **Correction** : La vue doit être purement déclarative et consommer uniquement les variables que le contrôleur lui a préparées.

### 3. Le "Anemic Model" (Modèle Anémique)
- **Erreur** : Réduire le Modèle à une coquille vide sans aucune règle ni méthode, en déplaçant toute la logique de manipulation de données dans les contrôleurs.
- **Correction** : Enrichir le Modèle avec ses relations, ses accesseurs, ses mutateurs et ses règles de filtrage (*Scopes*).

---

## 6. Distinctions Conceptuelles

### MVC Côté Serveur (Monolithe Blade) vs MVC pour API (Headless)
- **MVC Classique (Serveur)** : Le Contrôleur injecte les données dans un template Blade côté serveur. Le serveur génère une page HTML complète et l'envoie au navigateur.
- **MVC Découplé (API Rest)** : Le Contrôleur retourne directement les données brutes sous forme de document JSON. La couche "Vue" n'est plus gérée par Laravel, mais par une application cliente indépendante (React, Vue.js, application mobile iOS/Android).

---

[Introduction](./introduction.md) | [Consulter les Travaux Pratiques](./practical.md)
