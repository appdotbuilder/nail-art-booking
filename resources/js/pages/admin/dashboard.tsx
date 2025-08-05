import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react';
import { Users, Calendar, Scissors, TrendingUp, Clock } from 'lucide-react';

interface Stats {
    total_bookings: number;
    pending_bookings: number;
    confirmed_bookings: number;
    total_services: number;
    active_services: number;
    total_technicians: number;
    active_technicians: number;
    total_users: number;
}

interface Booking {
    id: number;
    customer_name: string;
    customer_email: string;
    appointment_date: string;
    status: string;
    total_price: number;
    service: {
        name: string;
        category: string;
    };
    technician?: {
        name: string;
    };
    user?: {
        name: string;
    };
}

interface Props {
    stats: Stats;
    recentBookings: Booking[];
    [key: string]: unknown;
}

export default function AdminDashboard({ stats, recentBookings }: Props) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'confirmed':
                return 'bg-green-100 text-green-800';
            case 'completed':
                return 'bg-blue-100 text-blue-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            👑 Admin Dashboard
                        </h1>
                        <p className="text-xl text-gray-600">
                            ✨ Manage your nail salon operations
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                                <Calendar className="h-4 w-4 text-pink-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-800">{stats.total_bookings}</div>
                                <p className="text-xs text-gray-600">
                                    {stats.pending_bookings} pending
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Services</CardTitle>
                                <Scissors className="h-4 w-4 text-pink-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-800">{stats.active_services}</div>
                                <p className="text-xs text-gray-600">
                                    of {stats.total_services} total
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Technicians</CardTitle>
                                <Users className="h-4 w-4 text-pink-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-800">{stats.active_technicians}</div>
                                <p className="text-xs text-gray-600">
                                    active staff members
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                                <TrendingUp className="h-4 w-4 text-pink-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-800">{stats.total_users}</div>
                                <p className="text-xs text-gray-600">
                                    registered clients
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <Button 
                            onClick={() => router.get(route('admin.services.create'))}
                            className="h-16 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-semibold text-lg"
                        >
                            ➕ Add Service
                        </Button>
                        <Button 
                            onClick={() => router.get(route('admin.bookings.index'))}
                            variant="outline"
                            className="h-16 border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold text-lg"
                        >
                            📋 View Bookings
                        </Button>
                        <Button 
                            onClick={() => router.get(route('admin.services.index'))}
                            variant="outline"
                            className="h-16 border-purple-300 text-purple-600 hover:bg-purple-50 font-semibold text-lg"
                        >
                            🎨 Manage Services
                        </Button>
                        <Button 
                            onClick={() => router.get(route('admin.users.index'))}
                            variant="outline"
                            className="h-16 border-green-300 text-green-600 hover:bg-green-50 font-semibold text-lg"
                        >
                            👥 View Users
                        </Button>
                    </div>

                    {/* Recent Bookings */}
                    <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-pink-500" />
                                Recent Bookings
                            </CardTitle>
                            <CardDescription>
                                Latest appointment requests and bookings
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {recentBookings.length > 0 ? (
                                <div className="space-y-4">
                                    {recentBookings.map((booking) => (
                                        <div key={booking.id} className="flex items-center justify-between p-4 border border-pink-100 rounded-lg hover:bg-pink-50/50 transition-colors">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h4 className="font-semibold text-gray-800">{booking.customer_name}</h4>
                                                    <Badge className={getStatusColor(booking.status)}>
                                                        {booking.status}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-1">{booking.service.name}</p>
                                                <p className="text-xs text-gray-500">
                                                    {new Date(booking.appointment_date).toLocaleDateString()} at {new Date(booking.appointment_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-semibold text-gray-800">${booking.total_price}</div>
                                                {booking.technician && (
                                                    <p className="text-xs text-gray-500">with {booking.technician.name}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">📅</div>
                                    <p className="text-gray-500 text-lg">No bookings yet</p>
                                    <p className="text-gray-400">Recent bookings will appear here</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppShell>
    );
}