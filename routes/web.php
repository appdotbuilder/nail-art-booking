<?php

use App\Http\Controllers\AdminBookingController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminServiceController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page - main functionality
Route::get('/', [HomeController::class, 'index'])->name('home');

// Public pages
Route::get('/services', [ServiceController::class, 'index'])->name('services.index');
Route::get('/services/{service}', [ServiceController::class, 'show'])->name('services.show');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

// Booking routes (accessible to guests and authenticated users)
Route::get('/book', [BookingController::class, 'create'])->name('bookings.create');
Route::post('/book', [BookingController::class, 'store'])->name('bookings.store');

// Authenticated user routes
Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // User bookings
    Route::resource('bookings', BookingController::class)->except(['create', 'store']);
});

// Admin routes (you may want to add proper admin middleware later)
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('dashboard');
    
    // Admin service management
    Route::get('/services', [AdminServiceController::class, 'index'])->name('services.index');
    Route::get('/services/create', [ServiceController::class, 'create'])->name('services.create');
    Route::post('/services', [ServiceController::class, 'store'])->name('services.store');
    Route::get('/services/{service}', [ServiceController::class, 'show'])->name('services.show');
    Route::get('/services/{service}/edit', [ServiceController::class, 'edit'])->name('services.edit');
    Route::put('/services/{service}', [ServiceController::class, 'update'])->name('services.update');
    Route::delete('/services/{service}', [ServiceController::class, 'destroy'])->name('services.destroy');
    
    // Admin booking management
    Route::get('/bookings', [AdminBookingController::class, 'index'])->name('bookings.index');
    
    // Admin user management
    Route::get('/users', [AdminUserController::class, 'index'])->name('users.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
