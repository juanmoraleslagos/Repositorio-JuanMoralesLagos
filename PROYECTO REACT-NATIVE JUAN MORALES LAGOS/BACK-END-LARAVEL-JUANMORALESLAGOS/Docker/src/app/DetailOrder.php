<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetailOrder extends Model
{
    protected $primaryKey = 'id_detailorder';
    protected $keyType = 'integer';

    public $table = "detailorder";
}
