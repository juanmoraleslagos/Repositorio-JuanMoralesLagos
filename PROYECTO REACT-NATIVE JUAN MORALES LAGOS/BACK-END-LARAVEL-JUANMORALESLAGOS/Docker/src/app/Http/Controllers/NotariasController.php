<?php

namespace App\Http\Controllers;

use App\Notarias;
use Illuminate\Http\Request;

class NotariasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notarias = Notarias::all();
        return $notarias;
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
        $notarias = new Notarias();
        $notarias->number_notaria = $request['number_notaria'];
        $notarias->domicile_notaria = $request['domicile_notaria'];
        $notarias->code_commune = $request['code_commune'];
        $notarias->code_region = $request['code_region'];
        $notarias->phone_notaria = $request['phone_notaria'];
        $notarias->email_notaria = $request['email_notaria'];
        $notarias->code_notary = $request['code_notary'];
        $notarias->save();
        return $notarias;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Notarias  $notarias
     * @return \Illuminate\Http\Response
     */
    public function show(Notarias $notarias)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Notarias  $notarias
     * @return \Illuminate\Http\Response
     */
    public function edit(Notarias $notarias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Notarias  $notarias
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notarias $notarias)
    {
        $notarias = Notarias::where('id_notaria',$request['id_notaria'])->first();
        $notarias->domicile_notaria = $request['domicile_notaria'];
        $notarias->phone_notaria = $request['phone_notaria'];
        $notarias->email_notaria = $request['email_notaria'];
        $notarias->code_notary = $request['code_notary'];
        $notarias->save();
        return $notarias;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Notarias  $notarias
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $notarias = Notarias::find($request['id_notaria']);
        $notarias->delete();
        return $notarias;
    }
}
