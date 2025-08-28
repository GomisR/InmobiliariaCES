<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Documento;

class DocumentoSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 1; $i <= 5; $i++) {
            Documento::create([
                'administrador_id' => 1,
                'nombre_archivo' => 'documento' . $i . '.pdf',
                'ruta' => '/documentos/doc' . $i . '.pdf',
            ]);
        }
    }
}
