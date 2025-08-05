<?php

namespace Database\Seeders;

use App\Models\Technician;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TechnicianSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $technicians = [
            [
                'name' => 'Maria Santos',
                'specialization' => 'Master Nail Artist & Salon Owner',
                'bio' => 'With over 15 years of experience, Maria specializes in intricate nail art and luxury treatments. She founded Luxe Nails with a vision to create the premier nail art destination.',
                'is_active' => true,
            ],
            [
                'name' => 'Jessica Lee',
                'specialization' => 'Gel Extensions & Creative Designs',
                'bio' => 'Expert in gel extensions and creative designs. Jessica brings fresh ideas to every appointment and loves creating unique looks for each client.',
                'is_active' => true,
            ],
            [
                'name' => 'Anna Rodriguez',
                'specialization' => 'Hand-Painted Nail Art',
                'bio' => 'Known for her detailed hand-painted designs and seasonal nail art collections. Anna has a passion for turning nails into miniature canvases.',
                'is_active' => true,
            ],
            [
                'name' => 'Sophie Chen',
                'specialization' => 'Classic Manicures & Pedicures',
                'bio' => 'Specializes in classic treatments and relaxing spa services. Sophie ensures every client leaves feeling pampered and refreshed.',
                'is_active' => true,
            ],
            [
                'name' => 'Isabella Martinez',
                'specialization' => 'Acrylic Extensions & Nail Repair',
                'bio' => 'Expert in acrylic applications and nail repair treatments. Isabella helps clients achieve their dream nail length and strength.',
                'is_active' => true,
            ],
        ];

        foreach ($technicians as $technician) {
            Technician::create($technician);
        }
    }
}