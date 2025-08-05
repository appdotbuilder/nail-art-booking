<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $services = [
            // Manicure & Pedicure
            [
                'name' => 'Classic Manicure',
                'description' => 'Traditional nail care with cuticle treatment, shaping, and polish application.',
                'category' => 'Manicure & Pedicure',
                'price' => 35.00,
                'duration' => 45,
                'is_active' => true,
            ],
            [
                'name' => 'Luxury Spa Pedicure',
                'description' => 'Relaxing foot soak, exfoliation, massage, and perfect polish finish.',
                'category' => 'Manicure & Pedicure',
                'price' => 55.00,
                'duration' => 60,
                'is_active' => true,
            ],
            [
                'name' => 'French Manicure',
                'description' => 'Elegant white-tip design with clear or nude base for a timeless look.',
                'category' => 'Manicure & Pedicure',
                'price' => 40.00,
                'duration' => 50,
                'is_active' => true,
            ],

            // Nail Art Services
            [
                'name' => 'Custom Nail Art',
                'description' => 'Personalized designs created by our skilled artists using various techniques.',
                'category' => 'Nail Art Services',
                'price' => 65.00,
                'duration' => 90,
                'is_active' => true,
            ],
            [
                'name' => 'Seasonal Design Package',
                'description' => 'Themed nail art reflecting current seasons and holidays.',
                'category' => 'Nail Art Services',
                'price' => 50.00,
                'duration' => 75,
                'is_active' => true,
            ],
            [
                'name' => 'Ombre Gradient Nails',
                'description' => 'Beautiful color transitions creating stunning gradient effects.',
                'category' => 'Nail Art Services',
                'price' => 45.00,
                'duration' => 60,
                'is_active' => true,
            ],

            // Nail Extensions
            [
                'name' => 'Gel Extensions',
                'description' => 'Durable gel extensions for length and strength with natural finish.',
                'category' => 'Nail Extensions',
                'price' => 75.00,
                'duration' => 120,
                'is_active' => true,
            ],
            [
                'name' => 'Acrylic Full Set',
                'description' => 'Complete acrylic nail set with custom length and shape.',
                'category' => 'Nail Extensions',
                'price' => 70.00,
                'duration' => 105,
                'is_active' => true,
            ],
            [
                'name' => 'Sculpted Extensions',
                'description' => 'Hand-sculpted extensions for the most natural-looking results.',
                'category' => 'Nail Extensions',
                'price' => 85.00,
                'duration' => 135,
                'is_active' => true,
            ],

            // Treatment & Repair
            [
                'name' => 'Nail Strengthening Treatment',
                'description' => 'Intensive treatment to repair and strengthen damaged or weak nails.',
                'category' => 'Treatment & Repair',
                'price' => 30.00,
                'duration' => 30,
                'is_active' => true,
            ],
            [
                'name' => 'Cuticle Repair Therapy',
                'description' => 'Specialized treatment for damaged cuticles and nail beds.',
                'category' => 'Treatment & Repair',
                'price' => 25.00,
                'duration' => 25,
                'is_active' => true,
            ],
            [
                'name' => 'Broken Nail Repair',
                'description' => 'Emergency repair service for cracked or broken nails.',
                'category' => 'Treatment & Repair',
                'price' => 20.00,
                'duration' => 20,
                'is_active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}