<?php

namespace Tests\Feature;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    public function test_categories_page_displays_categories(): void
    {
        Category::create(['name' => 'Programming']);
        Category::create(['name' => 'Design']);

        $this->get(route('categories.index'))
            ->assertOk()
            ->assertSeeInOrder(['Categories', 'Design', 'Programming']);
    }

    public function test_categories_page_displays_an_empty_state(): void
    {
        $this->get(route('categories.index'))
            ->assertOk()
            ->assertSee('No categories have been added yet.');
    }
}
