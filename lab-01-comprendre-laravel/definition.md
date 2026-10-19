# Définition et Concepts Clés : Laravel

---

## 1. Définition Technique de Laravel

**Laravel** est un **framework d'application web open-source** écrit en PHP, basé sur les principes de la programmation orientée objet (POO) et adoptant l'architecture logicielle **MVC (Modèle - Vue - Contrôleur)**.

Laravel suit une philosophie dite de **"Convention over Configuration"** (la convention plutôt que la configuration) et privilégie une approche **"Batteries included"** : il intègre directement dans son cœur toutes les couches nécessaires au développement complet d'une application professionnelle sans avoir à assembler manuellement des dizaines de bibliothèques tierces.

---

## 2. L'Architecture MVC (Modèle - Vue - Contrôleur)

L'architecture MVC est le cœur organisationnel de Laravel. Elle sépare rigoureusement les responsabilités de l'application en trois strates distinctes :

```
                  ┌────────────────────────┐
                  │ Requête HTTP (Navigateur)
                  └───────────┬────────────┘
                              │
                              ▼
                  ┌────────────────────────┐
                  │       1. Routeur       │ (routes/web.php)
                  └───────────┬────────────┘
                              │
                              ▼
                  ┌────────────────────────┐
                  │     2. Middleware      │ (Filtrage, Auth, CSRF)
                  └───────────┬────────────┘
                              │
                              ▼
                  ┌────────────────────────┐
                  │     3. Contrôleur      │ (Logique d'orchestration)
                  └──────┬───────────▲─────┘
                         │           │
       Demande de données│           │ Données retournées
                         ▼           │
              ┌────────────────────────┐
              │       4. Modèle        │ (Eloquent ORM)
              └──────────┬─────────────┘
                         │
                         ▼
              ┌────────────────────────┐
              │  Base de données (SQL) │
              └────────────────────────┘
                         │
     Données formatées   │
     transmises à la vue │
                         ▼
              ┌────────────────────────┐
              │        5. Vue          │ (Blade Template)
              └──────────┬─────────────┘
                         │
                         ▼
              ┌────────────────────────┐
              │ Réponse HTTP (HTML/JSON│ -> Affichage dans le navigateur
              └────────────────────────┘
```

### Détail des 3 composants :

1. **Le Modèle (Model)** :
   - Représente la structure des données et la logique métier.
   - Dans Laravel, chaque table de la base de données est généralement associée à un modèle **Eloquent** (ex: la table `users` correspond au modèle `User.php`).
   - Il gère les relations entre tables (ex: un utilisateur a plusieurs commandes).

2. **La Vue (View)** :
   - Correspond à ce que l'utilisateur final voit à l'écran (l'interface graphique).
   - Les vues utilisent le moteur de template **Blade** et sont stockées dans le dossier `resources/views/` sous l'extension `.blade.php`.

3. **Le Contrôleur (Controller)** :
   - Reçoit la requête HTTP transmise par le routeur.
   - Interroge les modèles pour récupérer ou enregistrer des données.
   - Sélectionne la vue appropriée, lui injecte les données et retourne la réponse finale au navigateur.

---

## 3. Terminologie et Composants Majeurs

| Terme | Définition & Rôle dans Laravel |
| :--- | :--- |
| **Composer** | Le gestionnaire officiel de dépendances pour PHP. Il installe le framework, les bibliothèques tierces et gère l'autoloading des classes. |
| **Artisan CLI** | L'interface en ligne de commande intégrée à Laravel (`php artisan`). Elle automatise la génération de code, la gestion des migrations, des caches et des tests. |
| **Eloquent ORM** | L'Object-Relational Mapper natif de Laravel basé sur le pattern *Active Record*. Il permet d'interagir avec la base de données en manipulant des objets PHP plutôt que d'écrire des requêtes SQL manuelles. |
| **Blade** | Le moteur de template léger et puissant de Laravel. Il permet l'héritage de layouts, les structures conditionnelles et l'échappement sécurisé des variables HTML. |
| **Migrations** | Le système de contrôle de version pour la base de données. Elles permettent de définir et modifier les schémas de tables via du code PHP partagé avec toute l'équipe. |
| **Seeders & Factories** | Outils servant à alimenter la base de données avec des fausses données de test (*dummy data*) réalistes. |
| **Middleware** | Mécanisme de filtre placé entre la requête HTTP entrante et le contrôleur (ex: vérifier si l'utilisateur est authentifié, vérifier le jeton CSRF, journaliser la requête). |
| **Routing** | Définition des URL acceptées par l'application et association de chaque URL à une fonction ou une méthode de contrôleur. |
| **Service Container** | Le conteneur d'injection de dépendances au cœur de Laravel, assurant le découplage des composants et facilitant les tests unitaires. |

---

## 4. Exemples Concrets de Code Laravel

### A. Définition d'une Route (`routes/web.php`)
```php
use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

// Associe l'URL '/articles' à la méthode 'index' du contrôleur ArticleController
Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
```

### B. Le Contrôleur (`app/Http/Controllers/ArticleController.php`)
```php
namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\View\View;

class ArticleController extends Controller
{
    public function index(): View
    {
        // Récupération des articles publiés via Eloquent ORM
        $articles = Article::where('is_published', true)
                           ->latest()
                           ->get();

        // Envoi des données vers la vue Blade 'articles.index'
        return view('articles.index', [
            'articles' => $articles
        ]);
    }
}
```

### C. Le Modèle Eloquent (`app/Models/Article.php`)
```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Article extends Model
{
    // Attributs modifiables en masse (Mass Assignment)
    protected $fillable = ['title', 'slug', 'content', 'is_published', 'user_id'];

    // Relation : Un article appartient à un auteur (User)
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
```

### D. La Vue Blade (`resources/views/articles/index.blade.php`)
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des Articles</title>
</head>
<body>
    <h1>Nos Derniers Articles</h1>

    @if($articles->isEmpty())
        <p>Aucun article publié pour le moment.</p>
    @else
        <ul>
            @foreach($articles as $article)
                <li>
                    <strong>{{ $article->title }}</strong>
                    <span>(par {{ $article->user->name }})</span>
                </li>
            @endforeach
        </ul>
    @endif
</body>
</html>
```

### E. L'utilisation d'Artisan en Ligne de Commande
```bash
# Générer simultanément un Modèle, une Migration, un Contrôleur et une Factory
php artisan make:model Product -mcf

# Exécuter les migrations pour créer les tables en base de données
php artisan migrate

# Lancer le serveur local de développement
php artisan serve
```

---

## 5. Distinctions et Comparaisons Essentielles

### Laravel vs PHP Natif (Vanilla PHP)
- **PHP Natif** : Liberté totale, aucun fichier imposé, mais nécessite de tout recréer manuellement (sécurité, routeur, gestion des formulaires, sessions). Risque élevé d'incohérence architecturale sur les projets d'équipe.
- **Laravel** : Fournit une architecture éprouvée, une sécurité renforcée prête à l'emploi et une maintenabilité supérieure grâce à des conventions claires.

### Laravel vs CMS (ex: WordPress, Drupal)
- **CMS** : Conçu avant tout pour administrer du contenu éditorial (blogs, sites vitrines) via une interface graphique sans coder. Moins adapté aux logiques métier sur mesure ou aux architectures complexes.
- **Laravel (Framework)** : Destiné aux développeurs pour bâtir des applications logicielles sur-mesure (SaaS, ERP, CRM, plateformes bancaires, réseaux sociaux). Pas d'interface d'administration imposée : tout est modélisé selon le besoin métier exact.

### Laravel vs Symfony
- **Symfony** : Très rigoureux, hautement modulaire, privilégié pour les grands comptes d'entreprise avec des architectures très strictes et personnalisées.
- **Laravel** : Construit lui-même sur certains composants robustes de Symfony (HttpFoundation, Routing, Console), mais offre une couche d'abstraction beaucoup plus intuitive, conviviale et rapide à prendre en main pour les développeurs.

### Architecture Monolithe vs Architecture API Découplée
Laravel excelle dans les deux paradigmes :
1. **Monolithe classique / Moderne** : Laravel gère le backend et le rendu des vues HTML directement avec **Blade** ou avec **Livewire** / **Inertia.js** (combinant la réactivité d'un framework JS comme Vue ou React avec la simplicité de Laravel).
2. **API REST / GraphQL** : Laravel sert uniquement de backend headless, exposant des données JSON sécurisées via **Laravel Sanctum** ou **Laravel Passport** à destination d'un front-end mobile (Flutter, React Native) ou d'une Single Page Application (SPA).

---

## 6. L'Écosystème Laravel

L'une des grandes forces de Laravel est son écosystème d'outils officiels :

- **Laravel Breeze / Jetstream** : Kits de démarrage intégrant l'authentification complète (connexion, inscription, réinitialisation de mot de passe, vérification d'e-mail, 2FA).
- **Laravel Sanctum** : Système d'authentification par jetons (*API tokens*) léger pour SPA et applications mobiles.
- **Laravel Livewire** : Permet de créer des interfaces dynamiques et réactives en temps réel sans quitter le confort de PHP.
- **Laravel Inertia.js** : Fait le pont entre les contrôleurs Laravel et les composants frontend Vue.js ou React sans avoir à construire d'API REST manuelle.
- **Laravel Horizon & Telescope** : Tableaux de bord de surveillance pour les files d'attente (queues) et le débogage applicatif.
- **Laravel Forge & Vapor** : Outils de déploiement automatisé sur serveurs VPS ou environnements *Serverless* (AWS Lambda).

---

[Introduction](./introduction.md) | [Consulter les Travaux Pratiques](./practical.md)
