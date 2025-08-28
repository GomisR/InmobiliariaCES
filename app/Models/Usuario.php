<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
<<<<<<< HEAD

class Usuario extends Authenticatable
=======
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\VerificarCorreoPersonalizado;


class Usuario extends Authenticatable implements MustVerifyEmail
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
{
    use HasApiTokens, Notifiable;

    protected $table = 'usuarios';

    protected $fillable = [
<<<<<<< HEAD
        'nombre', 'email', 'password', 'rol'
    ];

    protected $hidden = ['password'];
=======
        'nombre',
        'telefono',
        'email',
        'password',
        'rol',
        'email_verified_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerificarCorreoPersonalizado());
    }
>>>>>>> 3b768a7 (TFG Terminado y desplegado)

    public function inmuebles()
    {
        return $this->hasMany(Inmueble::class, 'administrador_id');
    }

    public function movimientos()
    {
        return $this->hasMany(Movimiento::class);
    }

    public function valoraciones()
    {
        return $this->hasMany(Valoracion::class);
    }

    public function citas()
    {
        return $this->hasMany(Cita::class, 'usuario_id');
    }

    public function citasComoAdmin()
    {
        return $this->hasMany(Cita::class, 'administrador_id');
    }

    public function documentos()
    {
        return $this->hasMany(Documento::class, 'administrador_id');
    }
}
