<?php

namespace App\Http\Controllers;

use App\TypeDocuments;
use Illuminate\Http\Request;

class TypeDocumentsController extends Controller
{
    
    public function index()
    {
        $typedocuments = TypeDocuments::all();
        return $typedocuments;
    }       
    
}
