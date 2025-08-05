<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\GalleryItem;
use App\Models\Service;
use App\Models\Testimonial;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $featuredServices = Service::active()
            ->orderBy('created_at', 'desc')
            ->limit(6)
            ->get();

        $testimonials = Testimonial::featured()
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get();

        $galleryItems = GalleryItem::featured()
            ->orderBy('sort_order')
            ->limit(8)
            ->get();

        return Inertia::render('home', [
            'featuredServices' => $featuredServices,
            'testimonials' => $testimonials,
            'galleryItems' => $galleryItems,
        ]);
    }
}