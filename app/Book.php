<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title',
        'sellingPrice',
        'loanPrice',
        'ISBN',
        'stock',
        'publisher_id',
        'author_id'
    ];

    public function author() {
        return $this->belongsTo(Author::class);
    }

    public function publisher() {
        return $this->belongsTo(Publisher::class);
    }
}
