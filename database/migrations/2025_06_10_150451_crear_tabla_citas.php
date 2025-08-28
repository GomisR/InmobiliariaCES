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
        Schema::create('citas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('administrador_id');
            $table->unsignedBigInteger('usuario_id')->nullable();
            $table->timestamp('fecha_hora');
            $table->text('nota')->nullable();
            $table->timestamps();

            $table->foreign('administrador_id')->references('id')->on('usuarios');
            $table->foreign('usuario_id')->references('id')->on('usuarios');
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
