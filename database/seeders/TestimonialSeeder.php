<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $testimonials = [
            [
                'customer_name' => 'Emily Johnson',
                'content' => 'Absolutely amazing experience! Maria created the most beautiful nail art I\'ve ever had. The attention to detail is incredible and the salon atmosphere is so relaxing.',
                'rating' => 5,
                'is_featured' => true,
            ],
            [
                'customer_name' => 'Sarah Williams',
                'content' => 'I\'ve been coming to Luxe Nails for over a year now and they never disappoint. Jessica always knows exactly what I want and the quality is consistently outstanding.',
                'rating' => 5,
                'is_featured' => true,
            ],
            [
                'customer_name' => 'Rachel Davis',
                'content' => 'The gel extensions here last so much longer than anywhere else I\'ve been. Anna\'s hand-painted designs are works of art. Highly recommend!',
                'rating' => 5,
                'is_featured' => true,
            ],
            [
                'customer_name' => 'Lisa Thompson',
                'content' => 'Such a professional and clean environment. Sophie gave me the most relaxing pedicure and my nails look perfect. Will definitely be back!',
                'rating' => 5,
                'is_featured' => false,
            ],
            [
                'customer_name' => 'Amanda Brown',
                'content' => 'Isabella saved my broken nail right before my wedding! The repair was seamless and my nails looked flawless for my special day.',
                'rating' => 5,
                'is_featured' => false,
            ],
            [
                'customer_name' => 'Michelle Garcia',
                'content' => 'Love the online booking system and the reminder texts. The service is always top-notch and the prices are very reasonable for the quality.',
                'rating' => 5,
                'is_featured' => false,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}