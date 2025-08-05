<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Inertia\Inertia;

class AdminServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::orderBy('category')
            ->orderBy('name')
            ->paginate(15);

        return Inertia::render('admin/services/index', [
            'services' => $services
        ]);
    }
}