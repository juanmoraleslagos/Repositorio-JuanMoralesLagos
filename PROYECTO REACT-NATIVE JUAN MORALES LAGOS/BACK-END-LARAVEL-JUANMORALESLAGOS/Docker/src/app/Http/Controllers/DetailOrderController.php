<?php

namespace App\Http\Controllers;

use App\DetailOrder;
use Illuminate\Http\Request;

class DetailOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $detailorder = DetailOrder::all();
        return $detailorder;
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
        $detailorder = new DetailOrder();
        $detailorder->username_detailorder = $request['username_detailorder'];
        $detailorder->code_document = $request['code_document'];
        $detailorder->code_datetime = $request['code_datetime'];
        $detailorder->save();
        return $detailorder;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DetailOrder  $detailOrder
     * @return \Illuminate\Http\Response
     */
    public function show(DetailOrder $detailOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\DetailOrder  $detailOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(DetailOrder $detailOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DetailOrder  $detailOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DetailOrder $detailOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DetailOrder  $detailOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(DetailOrder $detailOrder)
    {
        //
    }
}
