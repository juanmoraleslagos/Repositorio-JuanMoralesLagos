<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InsertTypeGendersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('genders')->insert(
            [
                ['name_gender' => 'Masculino','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_gender' => 'Femenino','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],                     
          ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
