<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inmueble;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class CalleOrfeonCuarteDeHuerva extends Seeder
{
    public function run(): void
    {
        $direccion = 'Calle Orfeon Cuarte de Huerva';
        $url = Str::slug($direccion); // "calle-orfeon-cuarte-de-huerva"

        //Obtener imagnees
        $archivos = Storage::disk('public')->files("images/{$url}");

        // Obtener todas las imagenes desde la carpeta
        $archivos = Storage::disk('public')->files("images/{$url}");

        $imagenes = array_map(fn($ruta) => '/storage/' . $ruta, $archivos);

        \App\Models\Inmueble::create([
            'titulo' => 'Piso reformado en Calle Orfeon Cuarte de Huerva',
            'descripcion' => 'Piso reformado y luminoso de 90 m²',
            'direccion' => $direccion,
            'precio' => 175000,
            'estado' => 'disponible',
            'tipo' => 'venta',
            'administrador_id' => 1,
            'imagenes' => $imagenes,
        ]);
    }
}
