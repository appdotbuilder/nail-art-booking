<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GalleryItem>
 */
class GalleryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = [
            'Seasonal',
            'Modern',
            'Classic',
            'Luxury',
            'Artistic',
            'Glamorous',
            'Minimalist',
            'Holiday'
        ];

        return [
            'title' => fake()->words(3, true),
            'description' => fake()->sentence(),
            'image_url' => fake()->imageUrl(400, 400, 'nails', true),
            'category' => fake()->randomElement($categories),
            'is_featured' => fake()->boolean(30),
            'sort_order' => fake()->numberBetween(1, 100),
        ];
    }
}