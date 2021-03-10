<?php

namespace App\Http\Controllers;

use App\Administrators;
use Illuminate\Http\Request;

class AdministratorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $administrators = Administrators::all();
        return $administrators;
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $administrators = new Administrators();
        $administrators->rut_administrators = $request['rut_administrators'];
        $administrators->password_administrators = $request['password_administrators'];
        $administrators->save();
        return $administrators;
    }    
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Administrators  $administrators
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $administrators = Administrators::where('rut_administrators',$request['rut_administrators'])->first();
        $administrators->password_administrators = $request['password_administrators'];
        $administrators->save();
        return $administrators;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Administrators  $administrators
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $administrators = Administrators::find($request['rut_administrators']);
        $administrators->delete();
        return $administrators;
    }

    public function login(Request $request)
    {
        $rut_administrators = 'none';
        $administrators = Administrators::where('rut_administrators',$request['rut_administrators'])-> where('password_administrators',$request['password_administrators'])->get();
        $cantAdministrators = count($administrators);
        if (count($administrators) >0){
            $rut_administrators = $administrators->first()->rut_administrators;
        }
        return response()->json(['cantAdministrators'=>$cantAdministrators,'rut_administrators'=>$rut_administrators]);
    }
}


