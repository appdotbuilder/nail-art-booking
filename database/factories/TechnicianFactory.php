<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Technician>
 */
class TechnicianFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $specializations = [
            'Nail Art Specialist',
            'Gel Extensions Expert',
            'Classic Manicure & Pedicure',
            'Acrylic Extensions',
            'Hand-Painted Designs',
            'Nail Repair & Treatment'
        ];

        return [
            'name' => fake()->name(),
            'specialization' => fake()->randomElement($specializations),
            'bio' => fake()->paragraph(3),
            'image_url' => fake()->imageUrl(200, 200, 'people', true),
            'is_active' => fake()->boolean(85),
        ];
    }
}