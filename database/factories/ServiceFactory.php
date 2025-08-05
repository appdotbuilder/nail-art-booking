<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = [
            'Manicure & Pedicure',
            'Nail Art Services',
            'Nail Extensions',
            'Treatment & Repair'
        ];

        return [
            'name' => fake()->words(3, true),
            'description' => fake()->paragraph(),
            'category' => fake()->randomElement($categories),
            'price' => fake()->randomFloat(2, 20, 100),
            'duration' => fake()->randomElement([30, 45, 60, 75, 90, 105, 120]),
            'image_url' => fake()->imageUrl(400, 300, 'nails', true),
            'is_active' => fake()->boolean(90),
        ];
    }
}