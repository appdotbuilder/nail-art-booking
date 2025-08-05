<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Testimonial
 *
 * @property int $id
 * @property string $customer_name
 * @property string $content
 * @property int $rating
 * @property string|null $image_url
 * @property bool $is_featured
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial query()
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial whereCustomerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial whereRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Testimonial featured()
 * @method static \Database\Factories\TestimonialFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Testimonial extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'customer_name',
        'content',
        'rating',
        'image_url',
        'is_featured',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'rating' => 'integer',
        'is_featured' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include featured testimonials.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}