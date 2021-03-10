<?php

namespace App\Http\Controllers;

use App\DocumentPdf;
use Illuminate\Http\Request;

class DocumentPdfController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $documentpdf = DocumentPdf::all();
        return $documentpdf;
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
        $documentpdf = new DocumentPdf();
        $documentpdf->document_pdf = $request['document_pdf'];
        $documentpdf->username_documentpdf = $request['username_documentpdf'];
        $documentpdf->code_typedocument = $request['code_typedocument'];
        $documentpdf->save();
        return $documentpdf;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DocumentPdf  $documentPdf
     * @return \Illuminate\Http\Response
     */
    public function show(DocumentPdf $documentPdf)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\DocumentPdf  $documentPdf
     * @return \Illuminate\Http\Response
     */
    public function edit(DocumentPdf $documentPdf)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DocumentPdf  $documentPdf
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DocumentPdf $documentPdf)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DocumentPdf  $documentPdf
     * @return \Illuminate\Http\Response
     */
    public function destroy(DocumentPdf $documentPdf)
    {
        //
    }
}
