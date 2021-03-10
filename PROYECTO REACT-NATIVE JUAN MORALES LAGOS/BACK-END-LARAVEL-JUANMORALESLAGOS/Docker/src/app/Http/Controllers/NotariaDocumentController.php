<?php

namespace App\Http\Controllers;

use App\NotariaDocument;
use Illuminate\Http\Request;

class NotariaDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notariadocument = NotariaDocument::all();
        return $notariadocument;
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
        $notariadocument = new NotariaDocument();
        $notariadocument->code_notaria = $request['code_notaria'];
        $notariadocument->code_document = $request['code_document'];
        $notariadocument->save();
        return $notariadocument;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\NotariaDocument  $notariaDocument
     * @return \Illuminate\Http\Response
     */
    public function show(NotariaDocument $notariaDocument)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\NotariaDocument  $notariaDocument
     * @return \Illuminate\Http\Response
     */
    public function edit(NotariaDocument $notariaDocument)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\NotariaDocument  $notariaDocument
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NotariaDocument $notariaDocument)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\NotariaDocument  $notariaDocument
     * @return \Illuminate\Http\Response
     */
    public function destroy(NotariaDocument $notariaDocument)
    {
        //
    }
}
