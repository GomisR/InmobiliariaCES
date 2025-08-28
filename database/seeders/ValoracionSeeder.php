<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Valoracion;

class ValoracionSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 1; $i <= 5; $i++) {
            Valoracion::create([
                'usuario_id' => 1,
                'puntuacion' => rand(1, 5),
                'comentario' => 'Comentario ' . $i,
            ]);
        }
    }
}
