<?php

namespace App\Http\Controllers;

use App\Regions;
use Illuminate\Http\Request;

class RegionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $regions = Regions::all();
        return $regions;
    }
 
    
    public function store(Request $request)
    {
        $regions = new Regions();
        $regions->name_region = $request['name_region'];
        $regions->save();
        return $regions;
    }

   
    public function update(Request $request)
    {
        $regions = Regions::where('id_region', $request['id_region'])->first();
        $regions->name_region = $request['name_region'];
        $regions->save();
        return $regions;
    }

    public function delete(Request $request)
    {
        $regions = Regions::find($request['id_region']);
        $regions->delete();
        return $regions;
    }
}
