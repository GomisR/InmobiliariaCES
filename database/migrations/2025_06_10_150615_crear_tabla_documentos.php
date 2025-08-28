<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('documentos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('administrador_id');
            $table->string('nombre_archivo');
<<<<<<< HEAD
            //$table->string('ruta');
=======
            $table->string('ruta');
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
            $table->timestamps();

            $table->foreign('administrador_id')->references('id')->on('usuarios');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
