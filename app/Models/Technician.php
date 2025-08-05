<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Technician
 *
 * @property int $id
 * @property string $name
 * @property string $specialization
 * @property string|null $bio
 * @property string|null $image_url
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Booking> $bookings
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Technician newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Technician newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Technician query()
 * @method static \Illuminate\Database\Eloquent\Builder|Technician whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Technician whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Technician whereSpecialization($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Technician whereBio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Technician whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Technician whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Technician whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Technician whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Technician active()
 * @method static \Database\Factories\TechnicianFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Technician extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'specialization',
        'bio',
        'image_url',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the bookings for this technician.
     */
    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }

    /**
     * Scope a query to only include active technicians.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}