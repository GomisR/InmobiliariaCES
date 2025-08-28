<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Movimiento;

class MovimientoSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 1; $i <= 5; $i++) {
            Movimiento::create([
                'usuario_id' => 1,
                'inmueble_id' => 1,
                'tipo' => $i % 2 === 0 ? 'compra' : 'alquiler',
                'fecha' => now(),
            ]);
        }
    }
}
