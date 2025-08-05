import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react';
import { Star, Clock, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

interface Service {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    duration: number;
    image_url?: string;
}

interface Testimonial {
    id: number;
    customer_name: string;
    content: string;
    rating: number;
    image_url?: string;
}

interface GalleryItem {
    id: number;
    title: string;
    description?: string;
    image_url: string;
    category?: string;
}

interface Props {
    featuredServices: Service[];
    testimonials: Testimonial[];
    galleryItems: GalleryItem[];
    [key: string]: unknown;
}

export default function Home({ featuredServices, testimonials, galleryItems }: Props) {
    const handleBookNow = () => {
        router.get(route('bookings.create'));
    };

    const handleViewServices = () => {
        router.get(route('services.index'));
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                {/* Hero Section with Slider */}
                <section className="relative bg-gradient-to-r from-pink-100 to-rose-100 py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                            💅 <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Luxe Nails</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            ✨ Transform your nails into works of art with our premium nail services ✨
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Button 
                                onClick={handleBookNow}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                📅 Book Appointment
                            </Button>
                            <Button 
                                onClick={handleViewServices}
                                variant="outline"
                                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full"
                            >
                                🎨 View Services
                            </Button>
                        </div>
                        
                        {/* Hero Image Placeholder */}
                        <div className="relative mx-auto max-w-4xl">
                            <div className="aspect-video bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">💅✨🌸</div>
                                    <p className="text-gray-600 text-lg">Professional Nail Art & Beauty Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Services */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                🎨 Our Premium Services
                            </h2>
                            <p className="text-xl text-gray-600">
                                Discover our range of professional nail treatments
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredServices.length > 0 ? featuredServices.map((service) => (
                                <Card key={service.id} className="border-pink-100 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2">
                                            <Badge variant="secondary" className="bg-pink-100 text-pink-600">
                                                {service.category}
                                            </Badge>
                                            <span className="text-2xl font-bold text-rose-500">
                                                ${service.price}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl text-gray-800">{service.name}</CardTitle>
                                        <CardDescription className="flex items-center text-gray-600">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {service.duration} minutes
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <Button 
                                            onClick={handleBookNow}
                                            className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500"
                                        >
                                            Book This Service
                                        </Button>
                                    </CardContent>
                                </Card>
                            )) : (
                                <div className="col-span-full text-center py-12">
                                    <div className="text-6xl mb-4">🎨</div>
                                    <p className="text-gray-500 text-lg">Our amazing services will be displayed here soon!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-16 px-4 bg-white/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                📸 Nail Art Gallery
                            </h2>
                            <p className="text-xl text-gray-600">
                                See our beautiful work and get inspired
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {galleryItems.length > 0 ? galleryItems.map((item) => (
                                <div key={item.id} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">💅</div>
                                            <p className="text-sm text-gray-600 px-2">{item.title}</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white text-sm font-medium px-4 text-center">{item.description}</p>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-full text-center py-12">
                                    <div className="text-6xl mb-4">📸</div>
                                    <p className="text-gray-500 text-lg">Our stunning nail art gallery coming soon!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                💬 What Our Clients Say
                            </h2>
                            <p className="text-xl text-gray-600">
                                Real reviews from happy customers
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.length > 0 ? testimonials.map((testimonial) => (
                                <Card key={testimonial.id} className="border-pink-100 bg-white/80 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold">
                                                {testimonial.customer_name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{testimonial.customer_name}</h3>
                                                <div className="flex">
                                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 italic">"{testimonial.content}"</p>
                                    </CardContent>
                                </Card>
                            )) : (
                                <div className="col-span-full text-center py-12">
                                    <div className="text-6xl mb-4">⭐</div>
                                    <p className="text-gray-500 text-lg">Amazing customer reviews coming soon!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Quick Booking Form */}
                <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            📅 Ready to Book?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Schedule your appointment today and treat yourself to beautiful nails
                        </p>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <Phone className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                                    <p className="text-gray-600">(555) 123-NAIL</p>
                                </div>
                                <div className="text-center">
                                    <Clock className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                                    <h3 className="font-semibold text-gray-800">Hours</h3>
                                    <p className="text-gray-600">Mon-Sat 9AM-7PM</p>
                                </div>
                                <div className="text-center">
                                    <MapPin className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                                    <h3 className="font-semibold text-gray-800">Location</h3>
                                    <p className="text-gray-600">Beauty District</p>
                                </div>
                            </div>
                            
                            <Button 
                                onClick={handleBookNow}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                💅 Book Your Appointment Now
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Social Media Links */}
                <section className="py-12 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            📱 Follow Us
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Stay updated with our latest nail art creations
                        </p>
                        
                        <div className="flex justify-center gap-6">
                            <Button variant="outline" className="rounded-full p-4 border-pink-200 hover:bg-pink-50">
                                <Instagram className="w-6 h-6 text-pink-500" />
                            </Button>
                            <Button variant="outline" className="rounded-full p-4 border-pink-200 hover:bg-pink-50">
                                <Facebook className="w-6 h-6 text-pink-500" />
                            </Button>
                            <Button variant="outline" className="rounded-full p-4 border-pink-200 hover:bg-pink-50">
                                <Twitter className="w-6 h-6 text-pink-500" />
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </AppShell>
    );
}