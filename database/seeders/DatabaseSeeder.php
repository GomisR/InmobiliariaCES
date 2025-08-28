<?php

namespace Database\Seeders;

<<<<<<< HEAD
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
=======
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
<<<<<<< HEAD
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $this->call([
            ComunidadAutonomaSeeder::class,
            PisoSeeder::class,
        ]);
=======
        // Ejecutar todos los seeders necesarios
        $this->call([
            UsuarioSeeder::class,
            CitaSeeder::class,
            DocumentoSeeder::class,
            CalleCervantesSeeder::class,
            ViaHispanidadSeeder::class,
            CalleRomaSeeder::class,
            //InmuebleSeeder::class,
            MovimientoSeeder::class,
            ValoracionSeeder::class,
        ]);

>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }
}
