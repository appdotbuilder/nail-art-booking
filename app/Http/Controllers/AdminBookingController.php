<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Inertia\Inertia;

class AdminBookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookings = Booking::with(['service', 'technician', 'user'])
            ->orderBy('appointment_date', 'desc')
            ->paginate(15);

        return Inertia::render('admin/bookings/index', [
            'bookings' => $bookings
        ]);
    }
}