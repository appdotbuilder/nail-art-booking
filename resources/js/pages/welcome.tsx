import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { type SharedData } from '@/types';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { Star, Calendar, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const handleBookNow = () => {
        router.get(route('bookings.create'));
    };

    const handleViewServices = () => {
        router.get(route('services.index'));
    };

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                {/* Navigation */}
                <header className="p-6">
                    <nav className="flex items-center justify-between max-w-7xl mx-auto">
                        <div className="text-2xl font-bold">
                            💅 <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Luxe Nails</span>
                        </div>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-full border border-pink-300 px-6 py-2 text-sm text-pink-600 hover:bg-pink-50 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-full px-6 py-2 text-sm text-gray-600 hover:text-pink-600 transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-full border border-pink-300 px-6 py-2 text-sm text-pink-600 hover:bg-pink-50 transition-colors"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="mb-8">
                            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">
                                💅 <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Luxe Nails</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-gray-600 mb-2">
                                ✨ Premium Nail Art & Beauty Salon ✨
                            </p>
                            <p className="text-lg text-gray-500">
                                Where artistry meets luxury in the world of nail care
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Button 
                                onClick={handleBookNow}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-10 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                📅 Book Appointment
                            </Button>
                            <Button 
                                onClick={handleViewServices}
                                variant="outline"
                                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-10 py-4 text-xl rounded-full"
                            >
                                🎨 View Services
                            </Button>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative mx-auto max-w-4xl">
                            <div className="aspect-video bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-8xl mb-6">💅✨🌸</div>
                                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Professional Nail Services</h2>
                                    <p className="text-gray-600">Manicures • Pedicures • Nail Art • Extensions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                ⭐ Why Choose Luxe Nails?
                            </h2>
                            <p className="text-xl text-gray-600">
                                Experience the difference with our premium services
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow text-center">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Sparkles className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Expert Artists</h3>
                                    <p className="text-gray-600">
                                        Skilled technicians with years of experience in nail art and design
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow text-center">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Star className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                                    <p className="text-gray-600">
                                        Only the finest products and tools for lasting, beautiful results
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow text-center">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calendar className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                                    <p className="text-gray-600">
                                        Simple online booking system with flexible scheduling options
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow text-center">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Client Care</h3>
                                    <p className="text-gray-600">
                                        Personalized service and attention to every detail of your experience
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Services Preview */}
                <section className="py-16 px-4 bg-white/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                🎨 Our Services
                            </h2>
                            <p className="text-xl text-gray-600">
                                From classic treatments to creative nail art
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="border-pink-100 bg-white/60 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="text-5xl mb-4">💅</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Manicure & Pedicure</h3>
                                    <p className="text-gray-600 text-sm">Classic and premium treatments for beautiful hands and feet</p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/60 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="text-5xl mb-4">🎨</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Nail Art Services</h3>
                                    <p className="text-gray-600 text-sm">Creative designs, patterns, and custom artwork</p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/60 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="text-5xl mb-4">✨</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Nail Extensions</h3>
                                    <p className="text-gray-600 text-sm">Length and strength solutions for perfect nails</p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/60 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="text-5xl mb-4">🩹</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Treatment & Repair</h3>
                                    <p className="text-gray-600 text-sm">Healing treatments for damaged or weak nails</p>
                                </CardContent>
                            </Card>
                        </div>
                        
                        <div className="text-center mt-8">
                            <Button 
                                onClick={handleViewServices}
                                variant="outline"
                                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg rounded-full"
                            >
                                View All Services <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Account Creation CTA */}
                {!auth.user && (
                    <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                👤 Join Our Beauty Community
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Create an account to manage your bookings, view history, and get exclusive offers
                            </p>
                            
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">📱</div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Management</h3>
                                        <p className="text-gray-600">Track your appointments and booking history in one place</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">🎁</div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Offers</h3>
                                        <p className="text-gray-600">Get access to special discounts and member-only promotions</p>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        ✨ Create Account
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center justify-center border border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full transition-colors"
                                    >
                                        🔑 Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact Info */}
                <section className="py-12 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            📞 Ready to Book? Contact Us!
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-3xl mb-2">📱</div>
                                <h4 className="font-semibold text-gray-800">Call Us</h4>
                                <p className="text-gray-600">(555) 123-NAIL</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🕒</div>
                                <h4 className="font-semibold text-gray-800">Hours</h4>
                                <p className="text-gray-600">Mon-Sat 9AM-7PM</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">📍</div>
                                <h4 className="font-semibold text-gray-800">Location</h4>
                                <p className="text-gray-600">Beauty District</p>
                            </div>
                        </div>
                        
                        <Button 
                            onClick={handleBookNow}
                            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            💅 Book Your Appointment Today
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}