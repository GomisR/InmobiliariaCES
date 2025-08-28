<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inmueble;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
<<<<<<< HEAD
class CalleRoma extends Seeder
=======
class CalleRomaSeeder extends Seeder
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
{
    public function run(): void
    {
        $direccion = 'Calle Roma';
        $slug = Str::slug($direccion);

        // Obtener todas las imágenes desde la carpeta en el disco
        $archivos = Storage::disk('public')->files("images/{$slug}");

        $imagenes = array_map(fn($ruta) => '/storage/' . $ruta, $archivos);

        \App\Models\Inmueble::create([
            'titulo' => 'Piso en Calle Roma',
            'descripcion' => 'En urb. Parque Roma, luminoso y bien ubicado',
            'direccion' => $direccion,
            'precio' => 269000,
            'estado' => 'disponible',
            'tipo' => 'venta',
            'administrador_id' => 1,
            'imagenes' => $imagenes,
        ]);
    }
}
