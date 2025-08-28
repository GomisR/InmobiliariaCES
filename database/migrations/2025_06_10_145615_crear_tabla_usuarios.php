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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
<<<<<<< HEAD
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('rol', ['administrador', 'cliente'])->default('cliente');
            $table->timestamps();
        });

=======
            $table->string('telefono');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->enum('rol', ['administrador', 'cliente'])->default('cliente');
            $table->boolean('buscando_piso')->default(false);
            $table->rememberToken();
            $table->timestamps();
        });
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
<<<<<<< HEAD
        //
=======
        Schema::dropIfExists('documentos');
        Schema::dropIfExists('citas');
        Schema::dropIfExists('valoraciones');
        Schema::dropIfExists('movimientos');
        Schema::dropIfExists('inmuebles');
        Schema::dropIfExists('usuarios');
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }
};
