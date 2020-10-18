<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserSession extends Model
{
    use HasFactory;

    protected $table = 'sessions';
    protected $primaryKey = 'user_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'user_id',
        'ip_address',
        'user_agent',
        'payload',
        'last_activity',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'ip_address',
        'user_agent',
        'payload',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'ip_address' => 'integer',
        'payload' => 'array',
    ];

    protected $guarded = [];

    final public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id', 'user');
    }

    final public function account()
    {
        return $this->hasOneThrough('App\Account' , 'App\User');
    }
}
