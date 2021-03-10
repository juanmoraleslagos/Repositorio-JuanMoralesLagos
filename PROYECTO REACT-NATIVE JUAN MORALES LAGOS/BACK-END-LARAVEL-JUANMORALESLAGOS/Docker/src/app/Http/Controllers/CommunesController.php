<?php

namespace App\Http\Controllers;

use App\Communes;
use Illuminate\Http\Request;

class CommunesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $communes = Communes::all();
        return $communes;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $communes = new Communes();
        $communes->name_commune = $request['name_commune'];
        $communes->code_region = $request['code_region'];
        $communes->save();
        return $communes;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Communes  $communes
     * @return \Illuminate\Http\Response
     */
    public function show(Communes $communes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Communes  $communes
     * @return \Illuminate\Http\Response
     */
    public function edit(Communes $communes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Communes  $communes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Communes $communes)
    {
        //
    }

    
    public function delete(Request $request)
    {
        $communes = Communes::find($request['id_commune']);
        $communes->delete();
        return $communes;
    }
}
