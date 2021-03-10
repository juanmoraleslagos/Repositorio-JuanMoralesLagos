<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DateTime extends Model
{
    protected $primaryKey = 'id_datetime';
    protected $keyType = 'integer';

    public $table = "datetime";

}
