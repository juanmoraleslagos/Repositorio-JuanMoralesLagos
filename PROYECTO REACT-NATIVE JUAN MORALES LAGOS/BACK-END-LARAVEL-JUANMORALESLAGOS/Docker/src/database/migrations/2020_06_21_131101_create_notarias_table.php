<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotariasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notarias', function (Blueprint $table) {
            $table->bigIncrements('id_notaria');
            $table->integer('number_notaria');
            $table->string('domicile_notaria');
            $table->bigInteger('code_commune')->unsigned();
            $table->foreign('code_commune')->references('id_commune')->on('communes');
            $table->bigInteger('code_region')->unsigned();
            $table->foreign('code_region')->references('id_region')->on('regions');
            $table->integer('phone_notaria');
            $table->string('email_notaria');
            $table->biginteger('code_notary')->unsigned();
            $table->foreign('code_notary')->references('id_notary')->on('notarys');
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
        Schema::dropIfExists('notarias');
    }
}
