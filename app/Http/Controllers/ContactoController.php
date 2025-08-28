<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactoRecibido;


class ContactoController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'telefono' => 'nullable|string|max:20',
            'email' => 'required|email',
            'mensaje' => 'required|string',
            'politica' => 'accepted',
            'comunicaciones' => 'nullable|boolean',
        ]);

        Mail::to('infocesrealestate@gmail.com')->send(new ContactoRecibido($validated));

        return redirect()->back()->with('success', '¡Gracias por tu mensaje! Te responderemos pronto.');
    }
}
