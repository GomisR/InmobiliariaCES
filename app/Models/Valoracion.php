<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Valoracion extends Model
{
    protected $table = 'valoraciones';

    protected $fillable = [
        'usuario_id', 'puntuacion', 'comentario'
    ];

    public function usuario()
    {
<<<<<<< HEAD
        return $this->belongsTo(Usuario::class);
=======
        return $this->belongsTo(Usuario::class, 'usuario_id');
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }
}
