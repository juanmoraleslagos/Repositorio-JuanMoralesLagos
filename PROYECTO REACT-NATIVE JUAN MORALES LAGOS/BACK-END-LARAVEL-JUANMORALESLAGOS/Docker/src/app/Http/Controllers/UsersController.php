<?php

namespace App\Http\Controllers;

use App\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    
    public function index()
    {
        $users = Users::all();
        return $users;
    }

    public function store(Request $request)
    {
        $users = new Users();
        $users->user_name =  $request['user_name'];
        $users->email_user = $request['email_user'];
        $users->password_user = $request['password_user'];
        $users->save();
        return $users;
    }

            
    public function update(Request $request)
    {
        $users = Users::where('user_name',$request['user_name'])->first();
        $users->email_user = $request['email_user'];        
        $users->password_user = $request['password_user'];
        $users->save();
        return $users;
    }
    
    public function delete(Request $request)
    {
        $users = Users::find($request['user_name']);
        $users->delete();
        return $users;
    }

    public function login(Request $request)
    {
        $user_name = 'none';    
        $users = Users::where('user_name',$request['user_name'])->where('password_user' ,$request['password_user'])->get();
        $cantUsers = count($users);
        if (count($users) > 0) {
            $user_name = $users->first()->user_name;
        }
        return response()->json(['cantUsers'=>$cantUsers,'user_name'=>$user_name]);
    }


    public function searchRecovery(Request $request)
    {
        $user_name = 'none';    
        $users = Users::where('user_name',$request['user_name'])->where('email_user' ,$request['email_user'])->get();
        $cantUsers = count($users);
        if (count($users) > 0) {
            $user_name = $users->first()->user_name;
        }
        return response()->json(['cantUsers'=>$cantUsers,'user_name'=>$user_name]);
    }
    
}
