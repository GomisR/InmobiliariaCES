<?php
<<<<<<< HEAD
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
=======
namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\RegistroTemporal;

>>>>>>> 3b768a7 (TFG Terminado y desplegado)

class UsuarioController extends Controller
{
    public function index()
    {
        return response()->json(Usuario::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string',
<<<<<<< HEAD
=======
            'telefono' => 'required|string',
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
            'email' => 'required|email|unique:usuarios,email',
            'password' => 'required|min:6',
            'rol' => 'required|in:cliente,administrador'
        ]);

        $validated['password'] = Hash::make($validated['password']);
        $usuario = Usuario::create($validated);

        return response()->json($usuario, 201);
    }

    public function show($id)
    {
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario);
    }

    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($id);

<<<<<<< HEAD
        $usuario->update($request->only(['nombre', 'email', 'rol']));
=======
        $usuario->update($request->only(['nombre', 'telefono', 'email', 'rol']));
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        return response()->json($usuario);
    }

    public function destroy($id)
    {
        Usuario::destroy($id);
        return response()->json(['mensaje' => 'Usuario eliminado']);
    }
<<<<<<< HEAD
=======

    public function verificarCorreo($token)
    {
        $registro = RegistroTemporal::where('token', $token)->first();

        if (!$registro) {
            return redirect()->route('login')->with('error', 'Token inválido.');
        }

        // Crear usuario desde los datos temporales
        Usuario::create([
            'nombre' => $registro->nombre,
            'telefono' => $registro->telefono,
            'email' => $registro->email,
            'password' => $registro->password,
            'rol' => 'cliente',
            'email_verified_at' => now(),
        ]);

        $registro->delete();

        return redirect()->route('login')->with('success', 'Correo verificado. Ya puedes iniciar sesión.');
    }
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
}
