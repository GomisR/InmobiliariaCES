<?php
<<<<<<< HEAD
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
=======
namespace App\Http\Controllers;

>>>>>>> 3b768a7 (TFG Terminado y desplegado)
use App\Models\Movimiento;
use Illuminate\Http\Request;

class MovimientoController extends Controller
{
    public function index()
    {
        return response()->json(Movimiento::with(['usuario', 'inmueble'])->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'usuario_id' => 'required|exists:usuarios,id',
            'inmueble_id' => 'required|exists:inmuebles,id',
            'tipo' => 'required|in:compra,alquiler',
            'fecha' => 'required|date',
        ]);

        $movimiento = Movimiento::create($validated);
        return response()->json($movimiento, 201);
    }

    public function show($id)
    {
        return response()->json(Movimiento::with(['usuario', 'inmueble'])->findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $movimiento = Movimiento::findOrFail($id);
        $movimiento->update($request->all());

        return response()->json($movimiento);
    }

    public function destroy($id)
    {
        Movimiento::destroy($id);
        return response()->json(['mensaje' => 'Movimiento eliminado']);
    }
}
