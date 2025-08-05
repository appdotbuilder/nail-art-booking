import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Calendar, Clock, User } from 'lucide-react';

interface Service {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    duration: number;
}

interface Technician {
    id: number;
    name: string;
    specialization: string;
    bio?: string;
}

interface Props {
    services: Service[];
    technicians: Technician[];
    [key: string]: unknown;
}

export default function BookingCreate({ services, technicians }: Props) {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    
    const { data, setData, post, processing, errors } = useForm({
        service_id: '',
        technician_id: '',
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        appointment_date: '',
        notes: '',
    });

    const handleServiceChange = (serviceId: string) => {
        const service = services.find(s => s.id === parseInt(serviceId));
        setSelectedService(service || null);
        setData('service_id', serviceId);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('bookings.store'));
    };

    // Generate time slots (9 AM to 7 PM, every 30 minutes)
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour <= 19; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                if (hour === 19 && minute > 0) break; // Stop at 7:00 PM
                const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                slots.push(timeString);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                {/* Header */}
                <section className="bg-gradient-to-r from-pink-100 to-rose-100 py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            📅 Book Your Appointment
                        </h1>
                        <p className="text-xl text-gray-600">
                            Schedule your perfect nail treatment with our expert technicians
                        </p>
                    </div>
                </section>

                {/* Booking Form */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Service Selection */}
                                <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 text-pink-500" />
                                            Select Service
                                        </CardTitle>
                                        <CardDescription>
                                            Choose the service you'd like to book
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <Label htmlFor="service_id">Service *</Label>
                                            <Select value={data.service_id} onValueChange={handleServiceChange}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue placeholder="Choose a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {services.map((service) => (
                                                        <SelectItem key={service.id} value={service.id.toString()}>
                                                            <div className="flex justify-between items-center w-full">
                                                                <span>{service.name}</span>
                                                                <span className="text-pink-600 font-medium ml-2">
                                                                    ${service.price}
                                                                </span>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <InputError message={errors.service_id} className="mt-2" />
                                        </div>

                                        {selectedService && (
                                            <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                                                <h4 className="font-semibold text-gray-800 mb-2">{selectedService.name}</h4>
                                                <p className="text-gray-600 text-sm mb-2">{selectedService.description}</p>
                                                <div className="flex justify-between text-sm">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {selectedService.duration} minutes
                                                    </span>
                                                    <span className="font-semibold text-pink-600">
                                                        ${selectedService.price}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <Label htmlFor="technician_id">Preferred Technician (Optional)</Label>
                                            <Select value={data.technician_id} onValueChange={(value) => setData('technician_id', value)}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue placeholder="Any available technician" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="">Any available technician</SelectItem>
                                                    {technicians.map((technician) => (
                                                        <SelectItem key={technician.id} value={technician.id.toString()}>
                                                            <div>
                                                                <div className="font-medium">{technician.name}</div>
                                                                <div className="text-sm text-gray-500">{technician.specialization}</div>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Date & Time Selection */}
                                <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-pink-500" />
                                            Date & Time
                                        </CardTitle>
                                        <CardDescription>
                                            Pick your preferred appointment slot
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <Label htmlFor="appointment_date">Date *</Label>
                                            <Input
                                                id="appointment_date"
                                                type="date"
                                                value={data.appointment_date.split('T')[0] || ''}
                                                onChange={(e) => {
                                                    const date = e.target.value;
                                                    const time = data.appointment_date.split('T')[1] || '09:00';
                                                    setData('appointment_date', `${date}T${time}`);
                                                }}
                                                min={new Date().toISOString().split('T')[0]}
                                                className="mt-1"
                                            />
                                            <InputError message={errors.appointment_date} className="mt-2" />
                                        </div>

                                        <div>
                                            <Label htmlFor="appointment_time">Time *</Label>
                                            <Select 
                                                value={data.appointment_date.split('T')[1] || ''} 
                                                onValueChange={(time) => {
                                                    const date = data.appointment_date.split('T')[0] || new Date().toISOString().split('T')[0];
                                                    setData('appointment_date', `${date}T${time}`);
                                                }}
                                            >
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue placeholder="Select time" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {timeSlots.map((time) => (
                                                        <SelectItem key={time} value={time}>
                                                            {new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
                                                                hour: 'numeric',
                                                                minute: '2-digit',
                                                                hour12: true
                                                            })}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                Business Hours
                                            </h4>
                                            <p className="text-blue-700 text-sm">
                                                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Customer Information */}
                            <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <User className="w-5 h-5 text-pink-500" />
                                        Your Information
                                    </CardTitle>
                                    <CardDescription>
                                        We need these details to confirm your appointment
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="customer_name">Full Name *</Label>
                                            <Input
                                                id="customer_name"
                                                type="text"
                                                value={data.customer_name}
                                                onChange={(e) => setData('customer_name', e.target.value)}
                                                placeholder="Enter your full name"
                                                className="mt-1"
                                            />
                                            <InputError message={errors.customer_name} className="mt-2" />
                                        </div>

                                        <div>
                                            <Label htmlFor="customer_phone">Phone Number *</Label>
                                            <Input
                                                id="customer_phone"
                                                type="tel"
                                                value={data.customer_phone}
                                                onChange={(e) => setData('customer_phone', e.target.value)}
                                                placeholder="(555) 123-4567"
                                                className="mt-1"
                                            />
                                            <InputError message={errors.customer_phone} className="mt-2" />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="customer_email">Email Address *</Label>
                                        <Input
                                            id="customer_email"
                                            type="email"
                                            value={data.customer_email}
                                            onChange={(e) => setData('customer_email', e.target.value)}
                                            placeholder="your.email@example.com"
                                            className="mt-1"
                                        />
                                        <InputError message={errors.customer_email} className="mt-2" />
                                    </div>

                                    <div>
                                        <Label htmlFor="notes">Special Requests or Notes (Optional)</Label>
                                        <Textarea
                                            id="notes"
                                            value={data.notes}
                                            onChange={(e) => setData('notes', e.target.value)}
                                            placeholder="Any special requests, allergies, or preferences..."
                                            className="mt-1"
                                            rows={3}
                                        />
                                        <InputError message={errors.notes} className="mt-2" />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Submit Button */}
                            <div className="text-center">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                                >
                                    {processing ? (
                                        <>⏳ Booking...</>
                                    ) : (
                                        <>✨ Confirm Booking</>
                                    )}
                                </Button>
                                <p className="text-sm text-gray-500 mt-4">
                                    📧 You'll receive a confirmation email once your booking is confirmed
                                </p>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </AppShell>
    );
}