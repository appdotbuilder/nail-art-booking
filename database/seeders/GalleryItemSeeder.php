<?php

namespace Database\Seeders;

use App\Models\GalleryItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GalleryItemSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $galleryItems = [
            [
                'title' => 'Floral Spring Design',
                'description' => 'Delicate cherry blossom nail art perfect for spring',
                'image_url' => 'https://example.com/gallery/floral-spring.jpg',
                'category' => 'Seasonal',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Geometric Patterns',
                'description' => 'Modern geometric designs in rose gold',
                'image_url' => 'https://example.com/gallery/geometric.jpg',
                'category' => 'Modern',
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'French Ombre',
                'description' => 'Classic French tips with gradient fade',
                'image_url' => 'https://example.com/gallery/french-ombre.jpg',
                'category' => 'Classic',
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Crystal Accent Nails',
                'description' => 'Luxury crystal embellishments on nude base',
                'image_url' => 'https://example.com/gallery/crystal-accent.jpg',
                'category' => 'Luxury',
                'is_featured' => true,
                'sort_order' => 4,
            ],
            [
                'title' => 'Marble Effect',
                'description' => 'Elegant marble design in soft pastels',
                'image_url' => 'https://example.com/gallery/marble.jpg',
                'category' => 'Artistic',
                'is_featured' => true,
                'sort_order' => 5,
            ],
            [
                'title' => 'Glitter Gradient',
                'description' => 'Sparkling glitter fade from tips to base',
                'image_url' => 'https://example.com/gallery/glitter-gradient.jpg',
                'category' => 'Glamorous',
                'is_featured' => true,
                'sort_order' => 6,
            ],
            [
                'title' => 'Minimalist Lines',
                'description' => 'Clean geometric lines on neutral tones',
                'image_url' => 'https://example.com/gallery/minimalist.jpg',
                'category' => 'Minimalist',
                'is_featured' => true,
                'sort_order' => 7,
            ],
            [
                'title' => 'Holiday Sparkle',
                'description' => 'Festive holiday design with gold accents',
                'image_url' => 'https://example.com/gallery/holiday.jpg',
                'category' => 'Holiday',
                'is_featured' => true,
                'sort_order' => 8,
            ],
        ];

        foreach ($galleryItems as $item) {
            GalleryItem::create($item);
        }
    }
}