<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotarysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notarys', function (Blueprint $table) {
            $table->bigIncrements('id_notary');
            $table->string('rut_notary');
            $table->string('first_name_notary');
            $table->string('second_name_notary');
            $table->string('surname_notary');
            $table->string('second_surname_notary');
            $table->bigInteger('code_gender')->unsigned();
            $table->foreign('code_gender')->references('id_gender')->on('genders');
            $table->bigInteger('phone_notary');
            $table->string('email_notary');
            $table->string('password_notary');
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
        Schema::dropIfExists('notarys');
    }
}
