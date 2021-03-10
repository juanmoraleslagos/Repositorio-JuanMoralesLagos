<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notarys extends Model
{
    
    protected $primaryKey = 'id_notary';
    protected $keyType = 'integer';

    protected $fillable = [
        'rut_notary', 'first_name_notary','second_name_notary','surname_notary','second_surname_notary','code_gender','phone_notary','email_notary',
    ];

    protected $hidden = [
        'password_notary','remember_token',
    ];

}