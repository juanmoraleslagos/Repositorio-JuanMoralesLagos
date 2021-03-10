<?php

namespace App\Http\Controllers;

use App\Dates;
use Illuminate\Http\Request;

class DatesController extends Controller
{
   
    public function index()
    {
        $dates = Dates::all();
        return $dates;
    }

    
    
    public function store(Request $request)
    {
        $dates = new Dates();
        $dates->date_name = $request['date_name'];
        $dates->save();
        return $dates;
    }

    public function update(Request $request)
    {
        $dates = Dates::where('id_date', $request['id_date'])->first();
        $dates->date_name = $request['date_name'];
        $dates->save();
        return $dates;
    }
          
    public function delete(Request $request)
    {
        $dates = Dates::find($request['id_date']);
        $dates->delete();
        return $dates;
    }
}
