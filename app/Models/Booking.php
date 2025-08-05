<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Booking
 *
 * @property int $id
 * @property int|null $user_id
 * @property int $service_id
 * @property int|null $technician_id
 * @property string $customer_name
 * @property string $customer_email
 * @property string $customer_phone
 * @property \Illuminate\Support\Carbon $appointment_date
 * @property string $status
 * @property string|null $notes
 * @property float $total_price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $user
 * @property-read \App\Models\Service $service
 * @property-read \App\Models\Technician|null $technician
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Booking newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking query()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereServiceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereTechnicianId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereCustomerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereCustomerEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereCustomerPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereAppointmentDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereUpdatedAt($value)
 * @method static \Database\Factories\BookingFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Booking extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'service_id',
        'technician_id',
        'customer_name',
        'customer_email',
        'customer_phone',
        'appointment_date',
        'status',
        'notes',
        'total_price',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'appointment_date' => 'datetime',
        'total_price' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user that owns the booking.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the service for this booking.
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }

    /**
     * Get the technician for this booking.
     */
    public function technician(): BelongsTo
    {
        return $this->belongsTo(Technician::class);
    }
}