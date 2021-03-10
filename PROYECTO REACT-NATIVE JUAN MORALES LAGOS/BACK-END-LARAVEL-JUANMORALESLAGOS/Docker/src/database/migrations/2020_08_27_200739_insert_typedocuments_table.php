<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InsertTypedocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('typedocuments')->insert(
            [
                ['name_typedocument' => 'Autorizaciones','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_typedocument' => 'Vehículos','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_typedocument' => 'Poderes Bancarios','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_typedocument' => 'Poderes','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_typedocument' => 'Revocación Poderes','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_typedocument' => 'Declaración','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_typedocument' => 'Contratos y Otros','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_typedocument' => 'Laboral','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_typedocument' => 'Extranjeros','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
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
