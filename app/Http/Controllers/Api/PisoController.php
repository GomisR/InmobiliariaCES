<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Piso;
use Illuminate\Http\Request;

class PisoController extends Controller
{
    // Mostrar todos los pisos
    public function index()
    {
        $pisos = Piso::all();
        return response()->json($pisos);
    }

    // Mostrar un piso específico
    public function show($id)
    {
        $piso = Piso::findOrFail($id);
        return response()->json($piso);
    }

    // Crear un nuevo piso
    public function store(Request $request)
    {
        $request->validate([
            'calle' => 'required|string|max:255',
            'precio' => 'required|numeric',
            'descripcion' => 'required|string',
            'comunidad_autonoma_id' => 'nullable|exists:comunidades,id',
        ]);

        $piso = Piso::create($request->all());
        return response()->json($piso, 201);
    }

    // Actualizar un piso existente
    public function update(Request $request, $id)
    {
        $piso = Piso::findOrFail($id);
        $piso->update($request->all());
        return response()->json($piso);
    }

    // Eliminar un piso
    public function destroy($id)
    {
        $piso = Piso::findOrFail($id);
        $piso->delete();
        return response()->json(null, 204);
    }
}

