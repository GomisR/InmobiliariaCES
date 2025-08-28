<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RegistroTemporal extends Model
{
    protected $table = 'registro_temporal';

    protected $fillable = ['nombre', 'telefono', 'email', 'password', 'token'];
}
