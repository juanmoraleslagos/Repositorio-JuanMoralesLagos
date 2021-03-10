<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotariadocumentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notariadocument', function (Blueprint $table) {
            $table->bigInteger('code_notaria')->unsigned();
            $table->foreign('code_notaria')->references('id_notaria')->on('notarias');
            $table->bigInteger('code_document')->unsigned();
            $table->foreign('code_document')->references('id_document')->on('documents');
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
        Schema::dropIfExists('notariadocument');
    }
}
