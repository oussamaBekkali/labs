# Travaux Pratiques : L'Architecture MVC dans Laravel

Ce guide pratique propose une mise en application concrète du patron MVC à travers la création d'un module de gestion de tâches (*Task Manager*) et un exercice de refactorisation d'un code anti-pattern.

---

## 1. Exercice Guidé : Implémenter le Flux MVC de Bout en Bout

### Objectif :
Créer une fonctionnalité complète de consultation de tâches en respectant scrupuleusement la séparation des rôles entre Modèle, Vue et Contrôleur.

---

### Étape 1 : Le Modèle et la Migration de Données

Dans le terminal, exécutez la commande Artisan suivante pour générer à la fois le modèle et sa migration SQL associée :

```bash
php artisan make:model Task -m
```

#### A. Compléter le fichier de migration (`database/migrations/..._create_tasks_table.php`) :
```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->boolean('is_completed')->default(false);
            $table->date('due_date')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
```

#### B. Enrichir le Modèle Métier (`app/Models/Task.php`) :
```php
namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // Attributs autorisés pour l'assignation de masse
    protected $fillable = [
        'title',
        'description',
        'is_completed',
        'due_date'
    ];

    // Casts automatiques
    protected $casts = [
        'is_completed' => 'boolean',
        'due_date' => 'date'
    ];

    // Portée locale (Scope) : filtrer les tâches terminées
    public function scopeCompleted(Builder $query): Builder
    {
        return $query->where('is_completed', true);
    }

    // Portée locale (Scope) : filtrer les tâches en cours
    public function scopePending(Builder $query): Builder
    {
        return $query->where('is_completed', false);
    }
}
```

---

### Étape 2 : Le Contrôleur d'Orchestration

Générez le contrôleur à l'aide de la commande :

```bash
php artisan make:controller TaskController
```

Ouvrez `app/Http/Controllers/TaskController.php` et ajoutez les méthodes de gestion :

```php
namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\View\View;

class TaskController extends Controller
{
    /**
     * Affiche la liste de toutes les tâches.
     */
    public function index(): View
    {
        // 1. Appel au Modèle pour récupérer les données triées
        $tasks = Task::orderBy('due_date', 'asc')->get();

        // 2. Transmission des données à la Vue
        return view('tasks.index', [
            'tasks' => $tasks
        ]);
    }

    /**
     * Affiche le détail d'une tâche spécifique.
     */
    public function show(int $id): View
    {
        // 1. Recherche de la tâche ou déclenchement d'une erreur 404
        $task = Task::findOrFail($id);

        // 2. Transmission de la tâche à la Vue détaillée
        return view('tasks.show', [
            'task' => $task
        ]);
    }
}
```

---

### Étape 3 : Les Vues de Présentation (Blade)

Créez le sous-dossier `resources/views/tasks/` et ajoutez-y deux fichiers :

#### A. Vue Liste (`resources/views/tasks/index.blade.php`) :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionnaire de Tâches</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background-color: #f1f5f9; }
        .container { max-width: 800px; margin: auto; background: white; padding: 25px; border-radius: 8px; }
        h1 { color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #cbd5e1; }
        th { background-color: #f8fafc; color: #475569; }
        .status-done { color: #166534; font-weight: bold; }
        .status-todo { color: #991b1b; font-weight: bold; }
        .btn-view { text-decoration: none; color: #2563eb; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Liste des Tâches Planifiées</h1>

        @if($tasks->isEmpty())
            <p>Aucune tâche enregistrée pour le moment.</p>
        @else
            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Échéance</th>
                        <th>Statut</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($tasks as $task)
                        <tr>
                            <td>{{ $task->title }}</td>
                            <td>{{ $task->due_date ? $task->due_date->format('d/m/Y') : 'Non définie' }}</td>
                            <td>
                                @if($task->is_completed)
                                    <span class="status-done">Terminée</span>
                                @else
                                    <span class="status-todo">À faire</span>
                                @endif
                            </td>
                            <td>
                                <a href="{{ route('tasks.show', $task->id) }}" class="btn-view">Consulter</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @endif
    </div>
</body>
</html>
```

#### B. Vue Détail (`resources/views/tasks/show.blade.php`) :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Détail de la Tâche #{{ $task->id }}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f8fafc; }
        .card { background: white; max-width: 600px; margin: auto; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        h1 { margin-top: 0; color: #1e293b; }
        .meta { color: #64748b; font-size: 0.9em; margin-bottom: 20px; }
        .description { line-height: 1.6; color: #334155; margin-bottom: 25px; }
        a { color: #2563eb; text-decoration: none; }
    </style>
</head>
<body>
    <div class="card">
        <h1>{{ $task->title }}</h1>
        <div class="meta">
            Échéance : {{ $task->due_date ? $task->due_date->format('d/m/Y') : 'Aucune' }} |
            Statut : {{ $task->is_completed ? 'Terminée' : 'En cours' }}
        </div>

        <div class="description">
            <p>{{ $task->description ?? 'Aucune description détaillée renseignée.' }}</p>
        </div>

        <a href="{{ route('tasks.index') }}">Retour à la liste des tâches</a>
    </div>
</body>
</html>
```

---

### Étape 4 : Déclaration des Routes

Ajoutez les routes correspondantes dans `routes/web.php` :

```php
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
Route::get('/tasks/{id}', [TaskController::class, 'show'])->name('tasks.show');
```

---

### Résultat Attendu
- La commande `php artisan route:list` affiche bien les deux routes associées au contrôleur `TaskController`.
- En ouvrant l'URL `/tasks` dans le navigateur, un tableau HTML s'affiche avec la liste des tâches ordonnée par date d'échéance.
- En cliquant sur "Consulter", l'URL `/tasks/1` affiche la vue détaillée de la tâche sélectionnée.

---

## 2. Exercice 2 : Refactorisation d'un Code Anti-Pattern

### Énoncé du problème :
Voici un extrait de code tel qu'il a été écrit par un développeur débutant dans un fichier unique `app/Http/Controllers/ReportController.php` :

```php
// CODE NON CONFORME MVC : A NE PAS REPRODUIRE
public function generateReport()
{
    // Mauvaise pratique 1 : Requête SQL brute dans le contrôleur
    $connection = mysqli_connect("localhost", "root", "", "app_db");
    $result = mysqli_query($connection, "SELECT * FROM sales WHERE amount > 1000");

    // Mauvaise pratique 2 : Génération de balises HTML directement dans le contrôleur
    echo "<h1>Rapport des Ventes</h1>";
    echo "<ul>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<li>Client : " . $row['customer'] . " - Total : " . $row['amount'] . " DH</li>";
    }
    echo "</ul>";
}
```

### Travail demandé :
Refactorisez ce traitement selon les règles strictes de l'architecture MVC :
1. Créez le modèle `Sale` avec un scope `scopeHighValue($query, $threshold = 1000)`.
2. Nettoyez la méthode du contrôleur pour qu'elle récupère uniquement les données et retourne une vue.
3. Écrivez le gabarit Blade `resources/views/reports/sales.blade.php` pour présenter les données.

---

### Solution de Refactorisation :

#### 1. Le Modèle (`app/Models/Sale.php`)
```php
namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = ['customer', 'amount'];

    public function scopeHighValue(Builder $query, float $threshold = 1000.0): Builder
    {
        return $query->where('amount', '>', $threshold);
    }
}
```

#### 2. Le Contrôleur (`app/Http/Controllers/ReportController.php`)
```php
namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\View\View;

class ReportController extends Controller
{
    public function generateReport(): View
    {
        $sales = Sale::highValue(1000)->get();

        return view('reports.sales', [
            'sales' => $sales
        ]);
    }
}
```

#### 3. La Vue (`resources/views/reports/sales.blade.php`)
```html
<h1>Rapport des Ventes Majeures</h1>

<ul>
    @forelse($sales as $sale)
        <li>Client : {{ $sale->customer }} - Total : {{ number_format($sale->amount, 2) }} DH</li>
    @empty
        <li>Aucune vente supérieure au seuil n'a été enregistrée.</li>
    @endforelse
</ul>
```

---

## 3. Défi Pratique (Challenge)

### Sujet : L'Entité Catégorie avec Relation MVC
Pour enrichir le gestionnaire de tâches, vous devez implémenter la relation entre une **Catégorie** (ex: "Urgent", "Professionnel", "Personnel") et les **Tâches**.

### Consignes du Défi :
1. **Modèle & Migration** :
   - Créer le modèle `Category` avec migration (`name`, `color_code`).
   - Mettre à jour la table `tasks` pour inclure la clé étrangère `category_id`.
   - Déclarer la relation `belongsTo(Category::class)` dans `Task` et `hasMany(Task::class)` dans `Category`.
2. **Contrôleur** :
   - Modifier `TaskController::index()` pour charger les catégories associées sans générer de problème N+1 (utiliser `Task::with('category')->get()`).
3. **Vue Blade** :
   - Afficher le nom de la catégorie dans le tableau sous forme d'étiquette colorée avec la couleur stockée en base (`$task->category->color_code`).

---

## Grille d'Auto-Évaluation

| Compétence Validée | Statut |
| :--- | :---: |
| Je sais expliquer les rôles distincts du Modèle, de la Vue et du Contrôleur. | [ ] |
| Je sais créer un Modèle avec sa migration et configurer les attributs `$fillable`. | [ ] |
| Je sais écrire une méthode de contrôleur qui interroge le modèle et passe les variables à Blade. | [ ] |
| Je sais afficher une liste de données dans une vue Blade sans exécuter de requêtes SQL. | [ ] |
| Je suis capable de détecter et corriger du code PHP procédural pour le convertir en MVC. | [ ] |

---

[Définition des Composants](./definition.md) | [Consulter le Support de Présentation](./presentation.md)
