<?php

namespace App\Http\Controllers;

use App\Notarys;
use Illuminate\Http\Request;

class NotarysController extends Controller
{
    
    public function index()
    {
        $notarys = Notarys::all();
        return $notarys;
    }
  

   
    public function store(Request $request)
    {
        $notarys = new Notarys();
        $notarys->rut_notary = $request['rut_notary'];
        $notarys->first_name_notary = $request['first_name_notary'];
        $notarys->second_name_notary = $request['second_name_notary'];
        $notarys->surname_notary = $request['surname_notary'];
        $notarys->second_surname_notary = $request['second_surname_notary'];
        $notarys->code_gender = $request['code_gender'];
        $notarys->phone_notary = $request['phone_notary'];
        $notarys->email_notary = $request['email_notary'];
        $notarys->password_notary = $request['password_notary'];
        $notarys->save();
        return $notarys;
    }
       
    public function update(Request $request)
    {
        $notarys = Notarys::where('id_notary',$request['id_notary'])->first();
        $notarys->phone_notary = $request['phone_notary'];
        $notarys->email_notary = $request['email_notary'];
        $notarys->password_notary = $request['password_notary'];
        $notarys->save();
        return $notarys;        
    }

   
    public function delete(Request $request)
    {
        $notarys = Notarys::find($request['id_notary']);
        $notarys->delete();
        return $notarys;
    }

    public function login (Request $request)
    {
        $rut_notary = 'none';
        $notarys = Notarys::where('rut_notary',$request['rut_notary'])->where('password_notary',$request['password_notary'])->get();
        $cantNotarys = count($notarys);
        if (count($notarys) >0){
            $rut_notary = $notarys->first()->rut_notary;
        }
        return response()->json(['cantNotarys'=>$cantNotarys,'rut_notary'=>$rut_notary]);
    }
}
