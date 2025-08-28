<?php
<<<<<<< HEAD
=======

>>>>>>> 3b768a7 (TFG Terminado y desplegado)
namespace App\Http\Controllers;

use App\Models\Valoracion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ValoracionController extends Controller
{
<<<<<<< HEAD
=======
    // Devuelve todas las valoraciones como JSON
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    public function index()
    {
        $valoraciones = Valoracion::with('usuario')->get();
        $media = Valoracion::avg('puntuacion');

        return response()->json([
            'valoraciones' => $valoraciones,
            'media' => round($media, 2),
        ]);
    }

<<<<<<< HEAD
=======
    // Guardar nueva valoracion
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'puntuacion' => 'required|integer|min:1|max:5',
<<<<<<< HEAD
            'comentario' => 'nullable|string',
        ]);

        $valoracion = new Valoracion();
        $valoracion->usuario_id = auth()->id();
        $valoracion->puntuacion = $validated['puntuacion'];
        $valoracion->comentario = $validated['comentario'] ?? null;
        $valoracion->save();

        return response()->json($valoracion, 201);
    }


    public function show($id)
    {
        $valoracion = Valoracion::with('usuario')->findOrFail($id);
        return response()->json($valoracion);    }

    public function update(Request $request, $id)
    {
        $valoracion = Valoracion::findOrFail($id);
        $request->validate([
=======
            'comentario' => 'nullable|string|max:1000',
        ]);

        Valoracion::create([
            'usuario_id' => Auth::id(),
            'puntuacion' => $validated['puntuacion'],
            'comentario' => $validated['comentario'],
        ]);

        return redirect()->back()->with('success', 'Gracias por tu valoración.');
    }

    // Mostrar valoracion
    public function show($id)
    {
        $valoracion = Valoracion::with('usuario')->findOrFail($id);
        return response()->json($valoracion);
    }

    // Actualizar Valoracion
    public function update(Request $request, $id)
    {
        $valoracion = Valoracion::findOrFail($id);

        $validated = $request->validate([
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
            'puntuacion' => 'integer|min:1|max:5',
            'comentario' => 'nullable|string|max:1000',
        ]);

<<<<<<< HEAD
        $valoracion->update($request->only('puntuacion', 'comentario'));

        return response()->json($valoracion);
    }

=======
        $valoracion->update($validated);

        return redirect()->back()->with('success', 'Valoración actualizada.');
    }

    // Eliminar valoracion
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    public function destroy($id)
    {
        $valoracion = Valoracion::findOrFail($id);
        $valoracion->delete();

<<<<<<< HEAD
        return response()->json(['message' => 'Valoración eliminada']);
=======
        return redirect()->back()->with('success', 'Valoración eliminada.');
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }
}
