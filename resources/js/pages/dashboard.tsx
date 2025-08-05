import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { router, usePage } from '@inertiajs/react';
import { Calendar, User, Star, Plus, History } from 'lucide-react';
import { Head } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface PageProps {
    auth: {
        user: User;
    };
    [key: string]: unknown;
}

export default function Dashboard() {
    const { auth } = usePage<PageProps>().props;

    const handleBookNew = () => {
        router.get(route('bookings.create'));
    };

    const handleViewBookings = () => {
        router.get(route('bookings.index'));
    };

    const handleViewServices = () => {
        router.get(route('services.index'));
    };

    return (
        <AppShell>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            💅 Welcome back, {auth.user.name}!
                        </h1>
                        <p className="text-xl text-gray-600">
                            ✨ Ready for your next nail transformation?
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer" onClick={handleBookNew}>
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Plus className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl">Book New Appointment</CardTitle>
                                <CardDescription>Schedule your next nail service</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500">
                                    📅 Book Now
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer" onClick={handleViewBookings}>
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <History className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl">My Bookings</CardTitle>
                                <CardDescription>View your appointment history</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
                                    📋 View History
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer" onClick={handleViewServices}>
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl">Browse Services</CardTitle>
                                <CardDescription>Explore our nail treatments</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button variant="outline" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50">
                                    🎨 View Services
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Account Overview */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Profile Card */}
                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="w-5 h-5 text-pink-500" />
                                    Your Profile
                                </CardTitle>
                                <CardDescription>Your account information</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">
                                            {auth.user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{auth.user.name}</h3>
                                        <p className="text-gray-600">{auth.user.email}</p>
                                    </div>
                                </div>
                                
                                <div className="pt-4 border-t border-pink-100">
                                    <Button 
                                        variant="outline" 
                                        onClick={() => router.get(route('profile.edit'))}
                                        className="w-full border-pink-300 text-pink-600 hover:bg-pink-50"
                                    >
                                        ✏️ Edit Profile
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Stats */}
                        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-pink-500" />
                                    Your Activity
                                </CardTitle>
                                <CardDescription>Your booking statistics</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-pink-500 mb-1">0</div>
                                        <p className="text-sm text-gray-600">Total Bookings</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-rose-500 mb-1">0</div>
                                        <p className="text-sm text-gray-600">Upcoming</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-500 mb-1">0</div>
                                        <p className="text-sm text-gray-600">Completed</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-500 mb-1">$0</div>
                                        <p className="text-sm text-gray-600">Total Spent</p>
                                    </div>
                                </div>
                                
                                <div className="mt-6 pt-4 border-t border-pink-100">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Member since</span>
                                        <span className="font-medium text-gray-800">Recently joined</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Special Offers */}
                    <div className="mt-8">
                        <Card className="border-pink-100 bg-gradient-to-r from-pink-100 to-rose-100">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">🎉 Special Offers</CardTitle>
                                <CardDescription>Don't miss out on these amazing deals!</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center space-y-4">
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        ✨ New Client Special
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Get 20% off your first nail art service! Perfect time to try something new.
                                    </p>
                                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                                        Limited Time Offer
                                    </Badge>
                                </div>
                                
                                <Button 
                                    onClick={handleBookNew}
                                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full"
                                >
                                    💅 Claim Offer & Book Now
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}