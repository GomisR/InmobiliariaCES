<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inmueble extends Model
{
    protected $table = 'inmuebles';

<<<<<<< HEAD
    protected $fillable = [
        'titulo', 'descripcion', 'direccion', 'precio', 'estado', 'tipo', 'administrador_id'
=======
    protected $casts = [
        'imagenes' => 'array',
    ];

    protected $fillable = [
        'titulo', 'descripcion', 'direccion', 'precio', 'estado', 'tipo',
        'administrador_id', 'imagenes'
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    ];

    public function administrador()
    {
        return $this->belongsTo(Usuario::class, 'administrador_id');
    }

    public function movimientos()
    {
        return $this->hasMany(Movimiento::class);
    }
<<<<<<< HEAD
=======

>>>>>>> 3b768a7 (TFG Terminado y desplegado)
}
