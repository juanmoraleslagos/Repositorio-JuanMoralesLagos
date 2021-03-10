<?php

namespace App\Http\Controllers;

use App\Times;
use Illuminate\Http\Request;

class TimesController extends Controller
{
    
    public function index()
    {
        $times = Times::all();
        return $times;
    }

        
    public function store(Request $request)
    {
        $times = new Times();
        $times->time_name = $request['time_name'];
        $times->save();
        return $times;
    }
    
    
    public function update(Request $request)
    {
        $times = Times::where('id_time', $request['id_time'])->first();
        $times->time_name = $request['time_name'];
        $times->save();
        return $times;
    }

   
    public function delete(Request $request)
    {
        $times = Times::find($request['id_time']);
        $times->delete();
        return $times;
    }
}
