<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDocumentpdfTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documentpdf', function (Blueprint $table) {
            $table->bigIncrements('id_documentpdf');
            $table->longText('document_pdf');
            $table->string('username_documentpdf');
            $table->foreign('username_documentpdf')->references('user_name')->on('users');
            $table->bigInteger('code_typedocument')->unsigned();
            $table->foreign('code_typedocument')->references('id_type_document')->on('typedocuments');
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
        Schema::dropIfExists('documentpdf');
    }
}
