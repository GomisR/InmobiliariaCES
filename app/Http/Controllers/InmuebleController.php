<?php
<<<<<<< HEAD
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inmueble;
use Illuminate\Http\Request;
=======
namespace App\Http\Controllers;

use App\Models\Inmueble;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

>>>>>>> 3b768a7 (TFG Terminado y desplegado)

class InmuebleController extends Controller
{
    public function index()
    {
        return response()->json(Inmueble::with('administrador')->get());
    }

<<<<<<< HEAD
=======
    //Metodo listar
    public function listar(Request $request)
    {
        $query = Inmueble::query();

        // Aplicar filtros desde el request
        if ($request->filled('precio_min')) {
            $query->where('precio', '>=', $request->precio_min);
        }

        if ($request->filled('precio_max')) {
            $query->where('precio', '<=', $request->precio_max);
        }

        if ($request->filled('tipo')) {
            $query->where('tipo', $request->tipo);
        }

        $inmuebles = $query->select('id', 'titulo', 'descripcion', 'direccion', 'precio', 'tipo', 'imagenes')->get();

        return Inertia::render('Pisos', [
            'inmuebles' => $inmuebles,
            'filters' => $request->only(['precio_min', 'precio_max', 'tipo']),
        ]);
    }

    // Metodo mostrar
        public function mostrar($direccion)
    {
        $inmueble = Inmueble::where('direccion', $direccion)->firstOrFail();

        // Convertimos "via hispanidad" en "ViaHispanidad"
        $slug = Str::slug($direccion);            // "via-hispanidad"
        $componente = Str::studly($slug);         // "ViaHispanidad"

        return Inertia::render("Pisos/{$componente}", [
            'inmueble' => $inmueble,
        ]);
    }

>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string',
            'descripcion' => 'required|string',
            'direccion' => 'required|string',
            'precio' => 'required|numeric',
            'estado' => 'required|in:disponible,vendido,alquilado',
            'tipo' => 'required|in:venta,alquiler',
            'administrador_id' => 'required|exists:usuarios,id',
        ]);

        $inmueble = Inmueble::create($validated);
        return response()->json($inmueble, 201);
    }

    public function show($id)
    {
        return response()->json(Inmueble::with('administrador')->findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $inmueble = Inmueble::findOrFail($id);
        $inmueble->update($request->all());

        return response()->json($inmueble);
    }

    public function destroy($id)
    {
        Inmueble::destroy($id);
        return response()->json(['mensaje' => 'Inmueble eliminado']);
    }
<<<<<<< HEAD
=======

    public function subirImagenes(Request $request, $id)
    {
        $request->validate([
            'imagenes.*' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $inmueble = Inmueble::findOrFail($id);

        // Crear carpeta con la direccion separada por guiones (calle-direccion-de-calle)
        $carpeta = Str::slug($inmueble->direccion);

        $rutas = [];

        foreach ($request->file('imagenes') as $imagen) {
            $path = $imagen->store("images/{$carpeta}", 'public'); // guardamos en storage/app/public/images/...
            $rutas[] = '/storage/' . $path; // se accede desde public/storage/
        }

        $imagenesAnteriores = $inmueble->imagenes ?? [];
        $inmueble->imagenes = array_merge($imagenesAnteriores, $rutas);
        $inmueble->save();

        return redirect()->back()->with('success', 'Imágenes subidas correctamente.');
    }
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
}
