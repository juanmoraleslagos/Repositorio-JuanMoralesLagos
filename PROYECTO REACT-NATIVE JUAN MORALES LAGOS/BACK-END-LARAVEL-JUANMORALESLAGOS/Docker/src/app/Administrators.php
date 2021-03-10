<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrators extends Model
{
    protected $primaryKey = 'rut_administrators';
    protected $keyType = 'string';

    protected $fillable = [
        'rut_administrators',
    ];

    protected $hidden = [
        'password_administrators','remember_token',
    ];
}
