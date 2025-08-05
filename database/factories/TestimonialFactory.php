<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'customer_name' => fake()->name(),
            'content' => fake()->paragraph(2),
            'rating' => fake()->numberBetween(4, 5),
            'image_url' => fake()->boolean(30) ? fake()->imageUrl(100, 100, 'people', true) : null,
            'is_featured' => fake()->boolean(20),
        ];
    }
}