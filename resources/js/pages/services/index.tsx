import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react';
import { Clock } from 'lucide-react';

interface Service {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    duration: number;
    image_url?: string;
}

interface Props {
    services: Record<string, Service[]>;
    [key: string]: unknown;
}

export default function ServicesIndex({ services }: Props) {
    const handleBookService = (serviceId: number) => {
        router.get(route('bookings.create'), { service_id: serviceId });
    };

    const categoryEmojis: Record<string, string> = {
        'Manicure & Pedicure': '💅',
        'Nail Art Services': '🎨',
        'Nail Extensions': '✨',
        'Treatment & Repair': '🩹',
        'default': '💄'
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                {/* Header */}
                <section className="bg-gradient-to-r from-pink-100 to-rose-100 py-16 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            🎨 Our Services
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our comprehensive range of professional nail services, 
                            from classic manicures to intricate nail art designs
                        </p>
                    </div>
                </section>

                {/* Services by Category */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        {Object.keys(services).length > 0 ? (
                            Object.entries(services).map(([category, categoryServices]) => (
                                <div key={category} className="mb-16">
                                    <div className="text-center mb-12">
                                        <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                                            <span className="text-5xl">
                                                {categoryEmojis[category] || categoryEmojis.default}
                                            </span>
                                            {category}
                                        </h2>
                                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {categoryServices.map((service) => (
                                            <Card key={service.id} className="border-pink-100 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:scale-105">
                                                <CardHeader>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <Badge variant="secondary" className="bg-pink-100 text-pink-600">
                                                            {service.category}
                                                        </Badge>
                                                        <div className="text-right">
                                                            <span className="text-2xl font-bold text-rose-500">
                                                                ${service.price}
                                                            </span>
                                                            <div className="flex items-center text-gray-500 text-sm mt-1">
                                                                <Clock className="w-4 h-4 mr-1" />
                                                                {service.duration}min
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <CardTitle className="text-xl text-gray-800 group-hover:text-pink-600 transition-colors">
                                                        {service.name}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                    
                                                    <div className="flex gap-3">
                                                        <Button 
                                                            onClick={() => handleBookService(service.id)}
                                                            className="flex-1 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white rounded-full"
                                                        >
                                                            💅 Book Now
                                                        </Button>
                                                        <Button 
                                                            variant="outline"
                                                            onClick={() => router.get(route('services.show', service.id))}
                                                            className="border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full"
                                                        >
                                                            View Details
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20">
                                <div className="text-8xl mb-6">🎨</div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    Services Coming Soon!
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                    We are preparing an amazing selection of professional nail services for you. 
                                    Check back soon to see our full range of treatments!
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                    <Card className="border-pink-100 bg-white/60">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl mb-3">💅</div>
                                            <h3 className="font-semibold text-gray-800">Manicure & Pedicure</h3>
                                            <p className="text-sm text-gray-600 mt-2">Classic and premium treatments</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-pink-100 bg-white/60">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl mb-3">🎨</div>
                                            <h3 className="font-semibold text-gray-800">Nail Art Services</h3>
                                            <p className="text-sm text-gray-600 mt-2">Creative designs & patterns</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-pink-100 bg-white/60">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl mb-3">✨</div>
                                            <h3 className="font-semibold text-gray-800">Nail Extensions</h3>
                                            <p className="text-sm text-gray-600 mt-2">Length & strength solutions</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-pink-100 bg-white/60">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl mb-3">🩹</div>
                                            <h3 className="font-semibold text-gray-800">Treatment & Repair</h3>
                                            <p className="text-sm text-gray-600 mt-2">Healing & restoration</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            ✨ Ready for Beautiful Nails?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Book your appointment today and let our expert technicians pamper you
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={() => router.get(route('bookings.create'))}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                📅 Book Appointment
                            </Button>
                            <Button 
                                onClick={() => router.get(route('home'))}
                                variant="outline"
                                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full"
                            >
                                🏠 Back to Home
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </AppShell>
    );
}