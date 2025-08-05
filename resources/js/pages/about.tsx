import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { router } from '@inertiajs/react';
import { Heart, Award, Users, Clock, MapPin, Phone, Mail, Star } from 'lucide-react';

export default function About() {
    const handleBookNow = () => {
        router.get(route('bookings.create'));
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-pink-100 to-rose-100 py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                            💖 About <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Luxe Nails</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                            Where artistry meets luxury in the world of nail care
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                    ✨ Our Story
                                </h2>
                                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        Founded in 2018, Luxe Nails began as a dream to create a sanctuary where 
                                        beauty meets relaxation. Our founder, Maria Santos, envisioned a space where 
                                        every client could experience the perfect blend of luxury and artistry.
                                    </p>
                                    <p>
                                        What started as a small boutique salon has grown into the premier nail art 
                                        destination in the city. We pride ourselves on staying ahead of the latest 
                                        trends while maintaining the timeless elegance that defines us.
                                    </p>
                                    <p>
                                        Every nail tells a story, and we're here to help you tell yours with 
                                        creativity, precision, and care.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl shadow-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl mb-4">💅</div>
                                        <p className="text-gray-600 text-lg font-medium">Since 2018</p>
                                        <p className="text-gray-600">Creating Beautiful Nails</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-16 px-4 bg-white/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                🌟 What We Believe In
                            </h2>
                            <p className="text-xl text-gray-600">
                                The values that guide everything we do
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">Passion</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        We love what we do, and it shows in every detail of our work
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">Excellence</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        We strive for perfection in every service and client interaction
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">Community</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Building lasting relationships with our clients and community
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto">
                                        <Star className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">Innovation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Always exploring new techniques and trending designs
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                👥 Meet Our Team
                            </h2>
                            <p className="text-xl text-gray-600">
                                Skilled artists dedicated to making you look and feel amazing
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl font-bold">MS</span>
                                    </div>
                                    <CardTitle>Maria Santos</CardTitle>
                                    <CardDescription>Founder & Master Nail Artist</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4">
                                        With over 15 years of experience, Maria specializes in intricate nail art and luxury treatments.
                                    </p>
                                    <div className="flex justify-center">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl font-bold">JL</span>
                                    </div>
                                    <CardTitle>Jessica Lee</CardTitle>
                                    <CardDescription>Senior Nail Technician</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4">
                                        Expert in gel extensions and creative designs. Jessica brings fresh ideas to every appointment.
                                    </p>
                                    <div className="flex justify-center">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl font-bold">AR</span>
                                    </div>
                                    <CardTitle>Anna Rodriguez</CardTitle>
                                    <CardDescription>Nail Art Specialist</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4">
                                        Known for her detailed hand-painted designs and seasonal nail art collections.
                                    </p>
                                    <div className="flex justify-center">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Location & Contact */}
                <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                📍 Visit Our Salon
                            </h2>
                            <p className="text-xl text-gray-600">
                                Located in the heart of the beauty district
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12">
                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Get In Touch</CardTitle>
                                    <CardDescription>We'd love to hear from you</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-pink-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Address</h4>
                                            <p className="text-gray-600">123 Beauty Street, Nail District<br />City, State 12345</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-pink-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Phone</h4>
                                            <p className="text-gray-600">(555) 123-NAIL</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-pink-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Email</h4>
                                            <p className="text-gray-600">hello@luxenails.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-pink-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Hours</h4>
                                            <p className="text-gray-600">
                                                Mon-Sat: 9:00 AM - 7:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="space-y-6">
                                <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">💡 Why Choose Us?</h3>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                                Premium quality products and tools
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                                Highly trained and certified technicians
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                                Strict hygiene and safety protocols
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                                Personalized service and attention
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                                Latest trends and techniques
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <div className="text-center">
                                    <Button 
                                        onClick={handleBookNow}
                                        className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        💅 Book Your Visit Today
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppShell>
    );
}