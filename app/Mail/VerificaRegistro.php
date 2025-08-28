<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerificaRegistro extends Mailable
{
    use Queueable, SerializesModels;

    public $token;

    /**
     * Crear nueva instancia del mensaje.
     */
    public function __construct($token)
    {
        $this->token = $token;
    }

    /**
     * Construir el mensaje con la vista personalizada
     */
    public function build()
    {
        return $this->subject('Verificación de Cuenta - Inmobiliaria CES')
        ->view('emails.verificacion');
    }
}
