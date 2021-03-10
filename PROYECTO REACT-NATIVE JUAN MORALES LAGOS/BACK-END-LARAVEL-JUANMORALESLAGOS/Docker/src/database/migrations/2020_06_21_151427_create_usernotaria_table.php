<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsernotariaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usernotaria', function (Blueprint $table) {
            $table->string('code_username');
            $table->foreign('code_username')->references('user_name')->on('users');
            $table->string('code_notaria')->references('id_notaria')->on('notaria');
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
        Schema::dropIfExists('usernotaria');
    }
}
