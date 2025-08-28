<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Usuario;

class UsuarioSeeder extends Seeder
{
    public function run(): void
    {
        Usuario::create([
            'nombre' => 'Administrador',
            'telefono' => '555555555',
            'email' => 'infocesrealestate2@gmail.com',
            'password' => bcrypt('admin123'),
            'rol' => 'administrador',
        ]);

        for ($i = 1; $i <= 5; $i++) {
            Usuario::create([
                'nombre' => 'Nombre Ejemplo ' . $i,
                'telefono' => '555555555',
                'email' => 'usuario' . $i . '@gmail.com',
                'password' => bcrypt('password'),
                'rol' => 'cliente',
                'buscando_piso' => $i % 2 === 0,
            ]);
        }
    }
}
