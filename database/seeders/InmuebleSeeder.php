<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inmueble;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class InmuebleSeeder extends Seeder
{
    public function run(): void
    {
        /*
        for ($i = 1; $i <= 5; $i++) {
            Inmueble::create([
                'titulo' => 'Inmueble ' . $i,
                'descripcion' => 'Descripción de prueba ' . $i,
                'direccion' => 'Calle Falsa ' . $i,
                'precio' => rand(50000, 200000),
                'estado' => 'disponible',
                'tipo' => $i % 2 === 0 ? 'venta' : 'alquiler',
                'administrador_id' => 1,
                'imagenes' => [
                    "/images/foto{$i}_1.jpg",
                    "/images/foto{$i}_2.jpg",
                    "/images/foto{$i}_3.jpg"
                ]
            ]);
        }

        $direccion = 'Calle Miguel de Cervantes';
        $slug = Str::slug($direccion); // "calle-miguel-de-cervantes"

        // Obtener todas las imágenes desde la carpeta en el disco
        $archivos = Storage::disk('public')->files("images/{$slug}");

        $imagenes = array_map(fn($ruta) => '/storage/' . $ruta, $archivos);

        \App\Models\Inmueble::create([
            'titulo' => 'Piso reformado en Calle Cervantes',
            'descripcion' => 'Piso Reformado Integralmente en 2010 - 4ª Planta',
            'direccion' => $direccion,
            'precio' => 200000,
            'estado' => 'disponible',
            'tipo' => 'venta',
            'administrador_id' => 1,
            'imagenes' => $imagenes,
        ]);

        */
    }
}
