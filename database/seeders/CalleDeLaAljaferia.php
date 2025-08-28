<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inmueble;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class CalleDeLaAljaferia extends Seeder
{
    public function run(): void
    {
        $direccion = 'Calle de la Aljaferia';
        $url = Str::slug($direccion); // "calle-de-la-aljaferia"

        //Obtener imagnees
        $archivos = Storage::disk('public')->files("images/{$url}");

        // Obtener todas las imagenes desde la carpeta
        $archivos = Storage::disk('public')->files("images/{$url}");

        $imagenes = array_map(fn($ruta) => '/storage/' . $ruta, $archivos);

        \App\Models\Inmueble::create([
            'titulo' => 'Piso reformado en Calle de la Aljaferia',
            'descripcion' => 'Piso Reformado pegado al palacio de la Aljafería',
            'direccion' => $direccion,
            'precio' => 175000,
            'estado' => 'disponible',
            'tipo' => 'venta',
            'administrador_id' => 1,
            'imagenes' => $imagenes,
        ]);
    }
}
