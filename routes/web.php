<?php

<<<<<<< HEAD
use App\Http\Controllers\ComunidadAutonomaController;
use App\Http\Controllers\PisoController;
use Illuminate\Support\Facades\Route;

//INDEX
Route::get('/', function () {
    return view('index');
})->name('index') ;
//INICIO SESION
Route::get("login", function () {
    return view('login');
})->name('login')->middleware('guest');

//REGISTRO
Route::get("register", function () {
    return view('register');
})->name('register');

//PISOS
Route::get("calleConstitucion1", function () {
    return view('calleConstitucion1');
})->name('calleConstitucion1');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__.'/auth.php';

Route::resource("observaciones", ObservacionesController::class);
Route::post('/contacto', [ObservacionesController::class, 'store'])->name('For');


//Pisos
Route::get('pisos', [PisoController::class, 'index'])->name('pisos.index');

Route::resource("pisos", PisoController::class);

//ComunidadesAutonomas
Route::resource('comunidades', ComunidadAutonomaController::class);
=======
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ValoracionController;
use App\Http\Controllers\InmuebleController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use App\Models\RegistroTemporal;
use App\Models\Usuario;
use App\Http\Controllers\ContactoController;
use App\Http\Controllers\PerfilController;


// Index
//Route::get('/', fn () => Inertia::render('Index'))->name('index');
Route::get('/', function (Request $request) {
    return Inertia::render('Index');
})->name('index');

// Mostrar formulario de registro
Route::get('/register', [RegisteredUserController::class, 'create'])->middleware('guest')->name('register');
Route::post('/register', [RegisteredUserController::class, 'store']);

// Mostrar formulario de login
Route::get('/login', [LoginController::class, 'showLoginForm'])->middleware('guest')->name('login');
Route::post('/login', [LoginController::class, 'login']);

// Logout
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth')->name('logout');

//Perfil
Route::middleware(['auth'])->group(function () {
    Route::get('/perfil', [PerfilController::class, 'index'])->name('perfil');

    Route::patch('/perfil', [PerfilController::class, 'update'])->name('perfil.update');

    Route::patch('/perfil/busqueda', [PerfilController::class, 'quiereBusqueda'])->name('perfil.quiereBusqueda');
});
// Inmuebles
Route::get('/pisos', [InmuebleController::class, 'listar'])->name('pisos');

//Piso
Route::get('/pisos/{direccion}', [InmuebleController::class, 'mostrar'])->name('pisos.mostrar');

// Politica de privacidad
Route::get('/privacidad', fn () => Inertia::render('Privacidad'))->name('privacidad');
/*
Route::get('/privacidad', function (Request $request) {
    return Inertia::render('Privacidad');
})->name('privacidad');
*/
// Blog solo para usuarios logueados
Route::middleware(['auth', 'verified'])->group(function () {
    //Route::get('/blog', fn () => Inertia::render('Blog'))->name('blog');
    Route::get('/blog', function (Request $request) {
        return Inertia::render('Blog');
    })->name('blog');
    // Blog comentarios solo para usuarios logueados
    Route::get('/valoraciones', [ValoracionController::class, 'index'])->name('valoraciones.index');
    Route::post('/valoraciones', [ValoracionController::class, 'store'])->name('valoraciones.store');
});

//Registrar usuario (Correo de verificacion)
// Muestra el aviso de verificación
Route::get('/email/verify', function () {
    return Inertia::render('Auth/VerificarEmail');
})->middleware('auth')->name('verification.notice');

// Procesa el clic del enlace del correo
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill(); // Marca el email como verificado
    return redirect('/'); // redirigirlo al index
})->middleware(['auth', 'signed'])->name('verification.verify');

// Reenvía el email de verificación manualmente
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('message', '¡Correo de verificación reenviado!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

//Registro temporal
Route::get('/verificar/{token}', function ($token) {
    //Buscar el registro temporal usando el token recibido del correo
    $registro = RegistroTemporal::where('token', $token)->firstOrFail();

    //Crear usuario definitivo
    $usuario = Usuario::create([
        'nombre' => $registro->nombre,
        'telefono' => $registro->telefono,
        'email' => $registro->email,
        'password' => $registro->password,
        'rol' => 'cliente',
        'email_verified_at' => now(), // marcra el email como verificado
    ]);

    //Eliminar el registro temporal para que no se reutilice
    $registro->delete();

    //Iniciar sesión automáticamente al usuario creado
    Auth::login($usuario);
    request()->session()->regenerate();

    return redirect('/')->with('success', '¡Tu cuenta ha sido verificada y ya has iniciado sesión!');
})->name('verificar');

//Formulario de contacto
Route::post('/contacto', [ContactoController::class, 'store'])->name('contacto.enviar');

>>>>>>> 3b768a7 (TFG Terminado y desplegado)
