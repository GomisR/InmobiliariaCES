<?php

<<<<<<< HEAD
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Piso;
=======
namespace App\Http\Controllers;

use App\Models\Inmueble;
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
use Illuminate\Http\Request;

class PisoController extends Controller
{
    // Mostrar todos los pisos
    public function index()
    {
<<<<<<< HEAD
        $pisos = Piso::all();
=======
        $pisos = Inmueble::all();
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        return response()->json($pisos);
    }

    // Mostrar un piso específico
    public function show($id)
    {
<<<<<<< HEAD
        $piso = Piso::findOrFail($id);
=======
        $piso = Inmueble::findOrFail($id);
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
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

<<<<<<< HEAD
        $piso = Piso::create($request->all());
=======
        $piso = Inmueble::create($request->all());
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        return response()->json($piso, 201);
    }

    // Actualizar un piso existente
    public function update(Request $request, $id)
    {
<<<<<<< HEAD
        $piso = Piso::findOrFail($id);
=======
        $piso = Inmueble::findOrFail($id);
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        $piso->update($request->all());
        return response()->json($piso);
    }

    // Eliminar un piso
    public function destroy($id)
    {
<<<<<<< HEAD
        $piso = Piso::findOrFail($id);
=======
        $piso = Inmueble::findOrFail($id);
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        $piso->delete();
        return response()->json(null, 204);
    }
}

