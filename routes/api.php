<?php
<<<<<<< HEAD
use App\Http\Controllers\Api\PisoController;
use Illuminate\Routing\Route;
=======

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PisoController;


Route::get('/ping', fn () => response()->json(['ok' => true]));
>>>>>>> 3b768a7 (TFG Terminado y desplegado)

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

<<<<<<< HEAD
// Rutas de la API para pisos
Route::get('pisos', [PisoController::class, 'index']);
Route::get('pisos/{id}', [PisoController::class, 'show']);
Route::post('pisos', [PisoController::class, 'store']);
Route::put('pisos/{id}', [PisoController::class, 'update']);
Route::delete('pisos/{id}', [PisoController::class, 'destroy']);
=======
Route::get('/pisos', [PisoController::class, 'index']);
Route::get('/pisos/{id}', [PisoController::class, 'show']);
Route::post('/pisos', [PisoController::class, 'store']);
Route::put('/pisos/{id}', [PisoController::class, 'update']);
Route::delete('/pisos/{id}', [PisoController::class, 'destroy']);
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
