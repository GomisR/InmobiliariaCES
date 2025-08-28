<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    protected $table = 'citas';

    protected $fillable = [
        'administrador_id', 'usuario_id', 'fecha_hora', 'nota'
    ];

    public function administrador()
    {
        return $this->belongsTo(Usuario::class, 'administrador_id');
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }
}
