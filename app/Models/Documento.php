<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    protected $table = 'documentos';

    protected $fillable = [
        'administrador_id', 'nombre_archivo', 'ruta'
    ];

    public function administrador()
    {
        return $this->belongsTo(Usuario::class, 'administrador_id');
    }
}
