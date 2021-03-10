<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('backs', function (Blueprint $table) {
            $table->bigIncrements('id_back');
            $table->integer('code_notary');
            $table->integer('code_document');
            $table->integer('code_datail_document');
            $table->time('time_order');
            $table->date('date_order');
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
        Schema::dropIfExists('backs');
    }
}
