<?php
<<<<<<< HEAD
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
=======
namespace App\Http\Controllers;

>>>>>>> 3b768a7 (TFG Terminado y desplegado)
use App\Models\Cita;
use Illuminate\Http\Request;

class CitaController extends Controller
{
    public function index()
    {
        return response()->json(Cita::with(['administrador', 'usuario'])->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'administrador_id' => 'required|exists:usuarios,id',
            'usuario_id' => 'nullable|exists:usuarios,id',
            'fecha_hora' => 'required|date',
            'nota' => 'nullable|string',
        ]);

        $cita = Cita::create($validated);
        return response()->json($cita, 201);
    }

    public function show($id)
    {
        return response()->json(Cita::with(['administrador', 'usuario'])->findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $cita = Cita::findOrFail($id);
        $cita->update($request->all());

        return response()->json($cita);
    }

    public function destroy($id)
    {
        Cita::destroy($id);
        return response()->json(['mensaje' => 'Cita eliminada']);
    }
}
