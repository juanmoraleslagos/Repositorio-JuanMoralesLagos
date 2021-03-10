<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetailorderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detailorder', function (Blueprint $table) {
            $table->bigIncrements('id_detailorder');
            $table->string('username_detailorder');
            $table->foreign('username_detailorder')->references('user_name')->on('users');
            $table->bigInteger('code_document')->unsigned();
            $table->foreign('code_document')->references('id_document')->on('documents');
            $table->bigInteger('code_datetime')->unsigned();
            $table->foreign('code_datetime')->references('id_datetime')->on('datetime');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detailorder');
    }
}
