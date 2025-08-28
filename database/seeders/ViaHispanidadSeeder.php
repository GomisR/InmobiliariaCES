<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inmueble;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
<<<<<<< HEAD
class CalleCervantesSeeder extends Seeder
{
    public function run(): void
    {
        $direccion = 'Calle Miguel de Cervantes';
        $slug = Str::slug($direccion); // "calle-miguel-de-cervantes"
=======
class ViaHispanidadSeeder extends Seeder
{
    public function run(): void
    {
        $direccion = 'Via Hispanidad';
        $slug = Str::slug($direccion);
>>>>>>> 3b768a7 (TFG Terminado y desplegado)

        // Obtener todas las imágenes desde la carpeta en el disco
        $archivos = Storage::disk('public')->files("images/{$slug}");

        $imagenes = array_map(fn($ruta) => '/storage/' . $ruta, $archivos);

        \App\Models\Inmueble::create([
<<<<<<< HEAD
            'titulo' => 'Piso reformado en Calle Cervantes',
            'descripcion' => 'Piso Reformado Integralmente en 2010 - 4ª Planta',
            'direccion' => $direccion,
            'precio' => 200000,
            'estado' => 'disponible',
            'tipo' => 'venta',
=======
            'titulo' => 'Chalet en Via Hispanidad',
            'descripcion' => 'Vivienda unifamiliar lista para entrar a vivir',
            'direccion' => $direccion,
            'precio' => 3500,
            'estado' => 'disponible',
            'tipo' => 'alquiler',
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
            'administrador_id' => 1,
            'imagenes' => $imagenes,
        ]);
    }
}
