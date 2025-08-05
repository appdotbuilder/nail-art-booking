<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookingRequest;
use App\Models\Booking;
use App\Models\Service;
use App\Models\Technician;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookings = Booking::with(['service', 'technician'])
            ->when(Auth::check(), function ($query) {
                return $query->where('user_id', Auth::id());
            })
            ->orderBy('appointment_date', 'desc')
            ->paginate(10);

        return Inertia::render('bookings/index', [
            'bookings' => $bookings
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $services = Service::active()->get();
        $technicians = Technician::active()->get();

        return Inertia::render('bookings/create', [
            'services' => $services,
            'technicians' => $technicians,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookingRequest $request)
    {
        $service = Service::findOrFail($request->service_id);
        
        $booking = Booking::create(array_merge($request->validated(), [
            'user_id' => Auth::id(),
            'total_price' => $service->price,
        ]));

        return redirect()->route('bookings.show', $booking)
            ->with('success', 'Booking created successfully! We will send you a confirmation email shortly.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        // Check if user can view this booking
        if (Auth::guest() || (Auth::check() && $booking->user_id !== Auth::id())) {
            abort(403);
        }

        $booking->load(['service', 'technician']);

        return Inertia::render('bookings/show', [
            'booking' => $booking
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        // Check if user can edit this booking
        if (Auth::guest() || (Auth::check() && $booking->user_id !== Auth::id())) {
            abort(403);
        }

        $services = Service::active()->get();
        $technicians = Technician::active()->get();

        return Inertia::render('bookings/edit', [
            'booking' => $booking,
            'services' => $services,
            'technicians' => $technicians,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreBookingRequest $request, Booking $booking)
    {
        // Check if user can update this booking
        if (Auth::guest() || (Auth::check() && $booking->user_id !== Auth::id())) {
            abort(403);
        }

        $service = Service::findOrFail($request->service_id);
        
        $booking->update(array_merge($request->validated(), [
            'total_price' => $service->price,
        ]));

        return redirect()->route('bookings.show', $booking)
            ->with('success', 'Booking updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        // Check if user can delete this booking
        if (Auth::guest() || (Auth::check() && $booking->user_id !== Auth::id())) {
            abort(403);
        }

        $booking->delete();

        return redirect()->route('bookings.index')
            ->with('success', 'Booking cancelled successfully.');
    }
}