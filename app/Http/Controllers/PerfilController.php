<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class PerfilController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // Si es admin mostrar los usuarios que buscan pisos
        $usuariosEnBusqueda = $user->rol === 'administrador'
            ? Usuario::where('buscando_piso', true)->select('id', 'nombre', 'email', 'telefono', 'rol')->get()
            : [];

        return Inertia::render('Perfil', [
            'usuariosEnBusqueda' => $usuariosEnBusqueda
        ]);
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        $user->nombre = $validated['nombre'];

        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save();

        return redirect()->back()->with('mensaje', 'Perfil actualizado correctamente.');
    }

    public function quiereBusqueda(Request $request)
    {
        $user = Auth::user();
        $user->buscando_piso = !$user->buscando_piso;
        $user->save();

        return redirect()->back();
    }
}
