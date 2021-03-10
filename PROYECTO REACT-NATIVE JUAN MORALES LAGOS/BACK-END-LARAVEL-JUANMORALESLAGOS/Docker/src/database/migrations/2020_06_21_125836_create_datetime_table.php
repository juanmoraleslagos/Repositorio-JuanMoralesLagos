<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDatetimeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datetime', function (Blueprint $table) {
            $table->bigIncrements('id_datetime');
            $table->bigInteger('code_date')->unsigned();
            $table->foreign('code_date')->references('id_date')->on('dates');
            $table->bigInteger('code_time')->unsigned();
            $table->foreign('code_time')->references('id_time')->on('times');
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
        Schema::dropIfExists('datetime');
    }
}
