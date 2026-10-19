# Travaux Pratiques : Comprendre Laravel

Ce document regroupe les exercices guidés et les étapes pratiques nécessaires pour assimiler concrètement le fonctionnement de Laravel, son architecture MVC et ses outils fondamentaux.

---

## 1. Vérification de l'Environnement

Avant de commencer, vérifiez que votre poste de développement dispose des outils essentiels.

Ouvrez un terminal (PowerShell ou Bash) et exécutez les commandes suivantes :

```bash
# 1. Vérifier la version de PHP (PHP 8.2 ou supérieur recommandé)
php -v

# 2. Vérifier la présence de Composer
composer -V

# 3. Vérifier Node.js et npm (pour les assets frontend)
node -v
npm -v
```

> **Résultat attendu :**
> - PHP affiche sa version (ex: `PHP 8.2.x` ou `PHP 8.3.x`).
> - Composer affiche sa version (ex: `Composer version 2.x`).
> - Node et npm affichent leurs numéros de version sans message d'erreur.

---

## 2. Exploration de l'Arborescence d'un Projet Laravel

Comprendre l'organisation des dossiers dans Laravel est indispensable pour savoir où placer chaque bloc de code.

```text
mon-projet-laravel/
├── app/                  # Cœur du code métier
│   ├── Http/
│   │   ├── Controllers/  # Contrôleurs MVC
│   │   └── Middleware/   # Filtres de requêtes HTTP
│   └── Models/           # Modèles Eloquent (représentation des données)
├── bootstrap/            # Scripts d'amorçage de l'application
├── config/               # Fichiers de configuration (base de données, mail, etc.)
├── database/             # Migrations, seeders et factories
├── public/               # Seul dossier accessible publiquement (index.php, CSS, images)
├── resources/            # Vues Blade, fichiers CSS et JavaScript sources
│   └── views/            # Fichiers d'interface utilisateur (.blade.php)
├── routes/               # Définition des routes
│   ├── web.php           # Routes pour les requêtes web (avec session et CSRF)
│   └── api.php           # Routes pour les API REST stateless
├── storage/              # Fichiers générés (logs, cache, sessions, uploads)
├── tests/                # Tests unitaires et d'intégration
├── .env                  # Variables d'environnement (mots de passe, connexions DB)
└── composer.json         # Dépendances et métadonnées du projet PHP
```

### Règle de sécurité capitale :
Dans un déploiement en production, **seul le dossier `public/` doit être exposé au serveur web** (Apache ou Nginx). L'ensemble des fichiers PHP de l'application, les modèles et le fichier confidentiel `.env` restent ainsi protégés de tout accès direct par URL.

---

## 3. Exercice 1 : Comprendre le Routage et le Cycle de Requête

### Objectif :
Créer et tester différentes routes dans le fichier `routes/web.php` pour comprendre comment Laravel intercepte les URL.

### Instructions :

1. Ouvrez le fichier `routes/web.php`.
2. Ajoutez une route simple retournant un message de bienvenue :
   ```php
   Route::get('/bienvenue', function () {
       return "Bienvenue dans l'univers de Laravel !";
   });
   ```
3. Ajoutez une route acceptant un paramètre dynamique (le nom de l'apprenant) :
   ```php
   Route::get('/salut/{nom}', function ($nom) {
       return "Bonjour " . htmlspecialchars($nom) . ", ravi de vous compter parmi nous !";
   });
   ```
4. Ajoutez une route retournant un tableau associatif (Laravel le sérialise automatiquement en format **JSON**) :
   ```php
   Route::get('/api/status', function () {
       return [
           'statut' => 'actif',
           'framework' => 'Laravel 11',
           'ecole' => 'Solicode',
           'date' => now()->toDateString()
       ];
   });
   ```

### Résultat attendu :
- L'accès à `http://127.0.0.1:8000/bienvenue` affiche la chaîne de texte simple.
- L'accès à `http://127.0.0.1:8000/salut/Oussama` affiche `Bonjour Oussama, ravi de vous compter parmi nous !`.
- L'accès à `http://127.0.0.1:8000/api/status` renvoie un objet JSON structuré avec l'en-tête `Content-Type: application/json`.

---

## 4. Exercice 2 : Implémenter le Flux MVC Complet

### Objectif :
Connecter une **Route**, un **Contrôleur** et une **Vue Blade** avec passage de données dynamiques.

### Étape 2.1 : Génération du Contrôleur via Artisan
Dans le terminal à la racine du projet, exécutez la commande :
```bash
php artisan make:controller FormationController
```
> **Résultat attendu :** Laravel génère le fichier `app/Http/Controllers/FormationController.php`.

### Étape 2.2 : Écriture de la méthode dans le Contrôleur
Ouvrez le contrôleur généré et ajoutez la méthode `details()` :
```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class FormationController extends Controller
{
    public function details(): View
    {
        $formation = [
            'titre' => 'Développeur Web & Mobile',
            'centre' => 'Solicode Tanger',
            'modules' => [
                'HTML / CSS & Bootstrap',
                'JavaScript Moderne & React',
                'PHP & Programmation Orientée Objet',
                'Framework Laravel',
                'DevOps & Git'
            ],
            'est_ouvert' => true
        ];

        // Envoi des données à la vue 'formation'
        return view('formation', compact('formation'));
    }
}
```

### Étape 2.3 : Création de la Vue Blade
Créez le fichier `resources/views/formation.blade.php` et insérez le code suivant :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $formation['titre'] }} - {{ $formation['centre'] }}</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 40px; background: #f8fafc; }
        .card { background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 600px; }
        h1 { color: #dc2626; }
        .badge { display: inline-block; padding: 4px 10px; border-radius: 9999px; font-size: 0.85em; font-weight: bold; }
        .badge-open { background: #dcfce7; color: #166534; }
        .badge-closed { background: #fee2e2; color: #991b1b; }
        ul { list-style-type: none; padding-left: 0; }
        li { padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
        li::before { content: "- "; color: #16a34a; font-weight: bold; }
    </style>
</head>
<body>
    <div class="card">
        <h1>{{ $formation['titre'] }}</h1>
        <p><strong>Établissement :</strong> {{ $formation['centre'] }}</p>

        <p>
            <strong>Statut des admissions :</strong>
            @if($formation['est_ouvert'])
                <span class="badge badge-open">Inscriptions ouvertes</span>
            @else
                <span class="badge badge-closed">Inscriptions closes</span>
            @endif
        </p>

        <h3>Modules d'apprentissage :</h3>
        <ul>
            @foreach($formation['modules'] as $module)
                <li>{{ $module }}</li>
            @endforeach
        </ul>
    </div>
</body>
</html>
```

### Étape 2.4 : Lier la Route au Contrôleur
Dans `routes/web.php` :
```php
use App\Http\Controllers\FormationController;

Route::get('/formation', [FormationController::class, 'details'])->name('formation.details');
```

### Résultat attendu :
En ouvrant `http://127.0.0.1:8000/formation`, la page s'affiche avec la carte mise en forme, la liste dynamique des 5 modules générée par la boucle `@foreach` et le badge vert conditionnel validé par `@if`.

---

## 5. Exercice 3 : Maîtriser l'Outil CLI Artisan

Artisan est le compagnon indispensable du développeur Laravel. Testez les commandes suivantes dans votre terminal et notez leur résultat :

```bash
# 1. Lister l'ensemble des commandes disponibles dans Laravel
php artisan list

# 2. Afficher la liste complète des routes enregistrées
php artisan route:list

# 3. Ouvrir la console interactive Tinker (REPL de PHP)
php artisan tinker
```

### Dans la console Tinker :
Tapez les expressions suivantes pour observer l'exécution dynamique de PHP dans le contexte du framework :
```php
// Tester un calcul ou une fonction utilitaire
now()->addDays(7)->diffForHumans();

// Générer une chaîne aléatoire sécurisée
Illuminate\Support\Str::random(16);

// Quitter la console interactive
exit;
```

---

## 6. Challenge Pratique : La Cartographie Complète

### Contexte :
Vous devez concevoir l'architecture d'un module de **Gestion des Projets Étudiants** pour une école du numérique.

### Travail demandé :
Rédigez sur papier ou dans un fichier de notes la cartographie technique répondant aux 4 éléments clés :

1. **La Route** : Quelle méthode HTTP et quelle URL définir pour afficher la liste des projets ?
2. **Le Contrôleur** : Quel nom lui donner (`php artisan make:controller ...`) et quelle méthode doit retourner la vue ?
3. **Le Modèle Eloquent & la Table SQL** :
   - Quel nom porte le modèle (`Project`) ?
   - Quels champs doit contenir la table `projects` dans le fichier de migration (ex: `title`, `description`, `github_url`, `student_name`, `created_at`) ?
4. **La Vue Blade** : Quelles directives Blade (`@foreach`, `@if`, `{{ ... }}`) utiliserez-vous pour présenter la liste des projets sous forme de cartes d'affichage ?

---

## Grille d'Auto-Évaluation

| Critère de réussite | Statut |
| :--- | :---: |
| Je sais expliquer pourquoi un projet web moderne a besoin d'un framework. | [ ] |
| Je sais schématiser le trajet d'une requête HTTP traversant Route -> Contrôleur -> Modèle -> Vue. | [ ] |
| Je sais générer un contrôleur avec `php artisan make:controller`. | [ ] |
| Je comprends la différence entre les dossiers `app/`, `resources/views/` et `routes/`. | [ ] |
| Je sais utiliser la syntaxe Blade `{{ $variable }}`, `@if` et `@foreach`. | [ ] |

---

[Définition & Concepts clés](./definition.md) | [Consulter le Support de Présentation](./presentation.md)
