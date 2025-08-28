<?php
<<<<<<< HEAD

=======
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
<<<<<<< HEAD
    /**
     * Run the migrations.
     */
=======
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    public function up(): void
    {
        Schema::create('valoraciones', function (Blueprint $table) {
            $table->id();
<<<<<<< HEAD
            $table->unsignedBigInteger('usuario_id');
            $table->tinyInteger('puntuacion'); // de 1 a 5
            $table->text('comentario')->nullable();
            $table->timestamps();

            $table->foreign('usuario_id')->references('id')->on('usuarios');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
=======
            $table->foreignId('usuario_id')
                ->constrained('usuarios')
                ->onDelete('cascade'); // Borrar valoraciones si se elimina el usuario
            $table->tinyInteger('puntuacion')->unsigned(); // De 1 a 5
            $table->text('comentario')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('valoraciones');
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }
};
