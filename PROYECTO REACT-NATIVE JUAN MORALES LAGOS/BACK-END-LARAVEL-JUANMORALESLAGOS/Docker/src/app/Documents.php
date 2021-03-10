<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    public $table = 'documents';
    protected $primaryKey = 'id_document';
    protected $keyType = 'integer';
}
