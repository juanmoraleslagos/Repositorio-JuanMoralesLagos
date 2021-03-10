<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    
    protected $primaryKey = 'user_name';
    protected $keyType = 'string';

    protected $fillable = [
        'user_name', 'email_user',
    ];

    protected $hidden = [
        'password_user','remember_token',
    ];
}
