<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\GalleryItem
 *
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property string $image_url
 * @property string|null $category
 * @property bool $is_featured
 * @property int $sort_order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem featured()
 * @method static \Database\Factories\GalleryItemFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class GalleryItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'image_url',
        'category',
        'is_featured',
        'sort_order',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include featured gallery items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}