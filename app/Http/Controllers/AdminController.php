<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Service;
use App\Models\Technician;
use App\Models\User;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index()
    {
        $stats = [
            'total_bookings' => Booking::count(),
            'pending_bookings' => Booking::where('status', 'pending')->count(),
            'confirmed_bookings' => Booking::where('status', 'confirmed')->count(),
            'total_services' => Service::count(),
            'active_services' => Service::where('is_active', true)->count(),
            'total_technicians' => Technician::count(),
            'active_technicians' => Technician::where('is_active', true)->count(),
            'total_users' => User::count(),
        ];

        $recentBookings = Booking::with(['service', 'technician', 'user'])
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
            'recentBookings' => $recentBookings,
        ]);
    }


}