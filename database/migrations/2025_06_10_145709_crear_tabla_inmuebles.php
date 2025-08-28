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
        Schema::create('inmuebles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('administrador_id');
            $table->string('titulo');
            $table->text('descripcion');
            $table->string('direccion');
            $table->decimal('precio', 10, 2);
            $table->enum('estado', ['disponible', 'vendido', 'alquilado'])->default('disponible');
            $table->enum('tipo', ['venta', 'alquiler']);
<<<<<<< HEAD
            $table->timestamps();

=======
            $table->json('imagenes')->nullable();
            $table->timestamps();
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
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
