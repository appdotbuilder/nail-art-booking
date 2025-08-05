<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'service_id' => 'required|exists:services,id',
            'technician_id' => 'nullable|exists:technicians,id',
            'customer_name' => 'required|string|max:255',
            'customer_email' => 'required|email|max:255',
            'customer_phone' => 'required|string|max:20',
            'appointment_date' => 'required|date|after:now',
            'notes' => 'nullable|string|max:1000',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'service_id.required' => 'Please select a service.',
            'service_id.exists' => 'The selected service is invalid.',
            'customer_name.required' => 'Customer name is required.',
            'customer_email.required' => 'Email address is required.',
            'customer_email.email' => 'Please provide a valid email address.',
            'customer_phone.required' => 'Phone number is required.',
            'appointment_date.required' => 'Please select an appointment date and time.',
            'appointment_date.after' => 'Appointment must be scheduled for a future date and time.',
        ];
    }
}