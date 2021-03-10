<?php

namespace App\Http\Controllers;

use App\UserNotaria;
use Illuminate\Http\Request;

class UserNotariaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usernotaria = UserNotaria::all();
        return $usernotaria;
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
        $usernotaria = new UserNotaria();
        $usernotaria->code_username = $request['code_username'];
        $usernotaria->code_notaria = $request['code_notaria'];
        $usernotaria->save();
        return $usernotaria;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UserNotaria  $userNotaria
     * @return \Illuminate\Http\Response
     */
    public function show(UserNotaria $userNotaria)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserNotaria  $userNotaria
     * @return \Illuminate\Http\Response
     */
    public function edit(UserNotaria $userNotaria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserNotaria  $userNotaria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserNotaria $userNotaria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserNotaria  $userNotaria
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserNotaria $userNotaria)
    {
        //
    }
}
