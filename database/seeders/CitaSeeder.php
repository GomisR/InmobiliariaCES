<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cita;

class CitaSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 1; $i <= 5; $i++) {
            Cita::create([
                'administrador_id' => 1,
                'usuario_id' => 1,
                'fecha_hora' => now(),
                'nota' => 'Nota ejemplo ' . $i,
            ]);
        }
    }
}
