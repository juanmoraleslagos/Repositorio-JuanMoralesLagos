<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypeDocuments extends Model
{   
    public $table = 'typedocuments';
    protected $primaryKey = 'id_type_document';
    protected $keyType = 'integer';
}
