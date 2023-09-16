<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clicks extends Model
{
    use Notifiable, HasFactory;

    protected $fillable = [
        'category',
        'user_id'
    ];
}
