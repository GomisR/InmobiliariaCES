<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inmueble;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class CalleCervantesSeeder extends Seeder
{
    public function run(): void
    {
        $direccion = 'Calle Miguel de Cervantes';
        $slug = Str::slug($direccion); // "calle-miguel-de-cervantes"

        //Obtener imagnees
        $archivos = Storage::disk('public')->files("images/{$slug}");

        $imagenes = collect($archivos)->map(function ($ruta) {
            $full = '/storage/' . $ruta;

            //Convertir a UTF-8 si no lo está
            $enc = mb_detect_encoding($full, ['UTF-8', 'ISO-8859-1', 'Windows-1252'], true);
            if ($enc !== 'UTF-8') {
                $full = mb_convert_encoding($full, 'UTF-8', $enc ?: 'UTF-8');
            }

            // Normalizar forma unicode
            if (class_exists(\Normalizer::class)) {
                $full = \Normalizer::normalize($full, \Normalizer::FORM_C);
            }

            return $full;
        })->all();

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
    }
}
