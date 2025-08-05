import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react';
import { Calendar, Clock, Plus, Eye, Edit, Trash2 } from 'lucide-react';

interface Service {
    id: number;
    name: string;
    category: string;
}

interface Technician {
    id: number;
    name: string;
}

interface Booking {
    id: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    appointment_date: string;
    status: string;
    notes?: string;
    total_price: number;
    service: Service;
    technician?: Technician;
}

interface PaginationData {
    data: Booking[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    bookings: PaginationData;
    [key: string]: unknown;
}

export default function BookingsIndex({ bookings }: Props) {
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

    const handleView = (bookingId: number) => {
        router.get(route('bookings.show', bookingId));
    };

    const handleEdit = (bookingId: number) => {
        router.get(route('bookings.edit', bookingId));
    };

    const handleDelete = (bookingId: number) => {
        if (confirm('Are you sure you want to cancel this booking?')) {
            router.delete(route('bookings.destroy', bookingId));
        }
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                📋 My Bookings
                            </h1>
                            <p className="text-xl text-gray-600">
                                Manage your nail appointment history
                            </p>
                        </div>
                        <Button 
                            onClick={() => router.get(route('bookings.create'))}
                            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white mt-4 md:mt-0"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            New Booking
                        </Button>
                    </div>

                    {/* Bookings List */}
                    {bookings.data.length > 0 ? (
                        <div className="space-y-6">
                            {bookings.data.map((booking) => (
                                <Card key={booking.id} className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                                            <div className="flex items-center gap-3 mb-2 md:mb-0">
                                                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                                                    <Calendar className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-xl">{booking.service.name}</CardTitle>
                                                    <CardDescription className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4" />
                                                        {new Date(booking.appointment_date).toLocaleDateString()} at {new Date(booking.appointment_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Badge className={getStatusColor(booking.status)}>
                                                    {booking.status}
                                                </Badge>
                                                <span className="text-xl font-bold text-gray-800">
                                                    ${booking.total_price}
                                                </span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">
                                                    <span className="font-medium">Category:</span> {booking.service.category}
                                                </p>
                                                {booking.technician && (
                                                    <p className="text-sm text-gray-600 mb-1">
                                                        <span className="font-medium">Technician:</span> {booking.technician.name}
                                                    </p>
                                                )}
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-medium">Contact:</span> {booking.customer_phone}
                                                </p>
                                            </div>
                                            {booking.notes && (
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">
                                                        <span className="font-medium">Notes:</span>
                                                    </p>
                                                    <p className="text-sm text-gray-500 italic">{booking.notes}</p>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            <Button
                                                onClick={() => handleView(booking.id)}
                                                variant="outline"
                                                size="sm"
                                                className="border-blue-300 text-blue-600 hover:bg-blue-50"
                                            >
                                                <Eye className="w-4 h-4 mr-1" />
                                                View Details
                                            </Button>
                                            {(booking.status === 'pending' || booking.status === 'confirmed') && (
                                                <>
                                                    <Button
                                                        onClick={() => handleEdit(booking.id)}
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-green-300 text-green-600 hover:bg-green-50"
                                                    >
                                                        <Edit className="w-4 h-4 mr-1" />
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleDelete(booking.id)}
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-red-300 text-red-600 hover:bg-red-50"
                                                    >
                                                        <Trash2 className="w-4 h-4 mr-1" />
                                                        Cancel
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                            <CardContent className="text-center py-16">
                                <div className="text-8xl mb-6">📅</div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    No Bookings Yet
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                    Ready to treat yourself to beautiful nails? Book your first appointment and start your nail transformation journey!
                                </p>
                                <Button 
                                    onClick={() => router.get(route('bookings.create'))}
                                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full"
                                >
                                    💅 Book Your First Appointment
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {/* Pagination */}
                    {bookings.last_page > 1 && (
                        <div className="flex justify-center mt-8">
                            <div className="flex gap-2">
                                {Array.from({ length: bookings.last_page }, (_, i) => i + 1).map((page) => (
                                    <Button
                                        key={page}
                                        variant={page === bookings.current_page ? "default" : "outline"}
                                        onClick={() => router.get(route('bookings.index'), { page })}
                                        className={page === bookings.current_page ? 
                                            "bg-gradient-to-r from-pink-500 to-rose-500" : 
                                            "border-pink-300 text-pink-600 hover:bg-pink-50"
                                        }
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    );
}