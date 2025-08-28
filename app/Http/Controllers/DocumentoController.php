<?php
<<<<<<< HEAD
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
=======
namespace App\Http\Controllers;

>>>>>>> 3b768a7 (TFG Terminado y desplegado)
use App\Models\Documento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentoController extends Controller
{
    public function index()
    {
        return response()->json(Documento::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'administrador_id' => 'required|exists:usuarios,id',
            'archivo' => 'required|file|max:2048'
        ]);

        $archivo = $request->file('archivo');
        $ruta = $archivo->store('documentos');

        $documento = Documento::create([
            'administrador_id' => $validated['administrador_id'],
            'nombre_archivo' => $archivo->getClientOriginalName(),
            'ruta' => $ruta,
        ]);

        return response()->json($documento, 201);
    }

    public function show($id)
    {
        return response()->json(Documento::findOrFail($id));
    }

    public function destroy($id)
    {
        $documento = Documento::findOrFail($id);
        Storage::delete($documento->ruta);
        $documento->delete();

        return response()->json(['mensaje' => 'Documento eliminado']);
    }
}
