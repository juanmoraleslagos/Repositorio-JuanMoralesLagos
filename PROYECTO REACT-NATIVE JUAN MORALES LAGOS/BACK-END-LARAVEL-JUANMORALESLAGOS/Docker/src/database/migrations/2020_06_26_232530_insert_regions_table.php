<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InsertRegionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('regions')->insert(
            [
                ['name_region' => 'Region de Arica y Parinacota','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Tarapaca','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Antofagasta','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Atacama','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Coquimbo','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Valparaiso','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region Metropolitana de Santiago','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region del Libertador General Bernardo OHiggins','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region del Maule','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region del Ñuble','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region del Biobio','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de La Araucania','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Los Rios','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Los Lagos','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Aysen del General Carlos Ibáñez del Campo','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],
                ['name_region' => 'Region de Magallanes y la Antartica Chilena','created_at'=>DB::raw('CURRENT_TIMESTAMP'),'updated_at'=>DB::raw('CURRENT_TIMESTAMP')],                
              
               
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
