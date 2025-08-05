<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Create admin user
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@luxenails.com',
        ]);

        // Seed all the nail salon data
        $this->call([
            ServiceSeeder::class,
            TechnicianSeeder::class,
            TestimonialSeeder::class,
            GalleryItemSeeder::class,
        ]);
    }
}
