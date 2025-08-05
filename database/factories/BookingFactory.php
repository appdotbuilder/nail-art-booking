<?php

namespace Database\Factories;

use App\Models\Service;
use App\Models\Technician;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $service = Service::inRandomOrder()->first();
        $statuses = ['pending', 'confirmed', 'completed', 'cancelled'];

        return [
            'user_id' => fake()->boolean(70) ? User::inRandomOrder()->first()?->id : null,
            'service_id' => $service->id,
            'technician_id' => fake()->boolean(80) ? Technician::inRandomOrder()->first()?->id : null,
            'customer_name' => fake()->name(),
            'customer_email' => fake()->safeEmail(),
            'customer_phone' => fake()->phoneNumber(),
            'appointment_date' => fake()->dateTimeBetween('now', '+2 months'),
            'status' => fake()->randomElement($statuses),
            'notes' => fake()->boolean(30) ? fake()->sentence() : null,
            'total_price' => $service ? $service->price : fake()->randomFloat(2, 25, 150),
        ];
    }
}