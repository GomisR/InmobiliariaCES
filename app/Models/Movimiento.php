<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movimiento extends Model
{
    protected $table = 'movimientos';

    protected $fillable = [
        'usuario_id', 'inmueble_id', 'tipo', 'fecha'
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    public function inmueble()
    {
        return $this->belongsTo(Inmueble::class);
    }
}
