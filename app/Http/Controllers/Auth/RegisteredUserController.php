<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
<<<<<<< HEAD
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\View\View;
=======
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Models\RegistroTemporal;
use App\Mail\VerificaRegistro;
>>>>>>> 3b768a7 (TFG Terminado y desplegado)

class RegisteredUserController extends Controller
{
    /**
<<<<<<< HEAD
     * Display the registration view.
     */
    public function create(): View
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->route('index');
=======
     * Muestra la vista del formulario de registro.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Registra un nuevo usuario.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'telefono' => ['required', 'string', 'max:12'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:usuarios'],
            'password' => ['required', 'confirmed', 'min:6'],
        ]);

        $token = Str::random(60);

        if (RegistroTemporal::where('email', $request->email)->exists()) {
            return redirect()->back()->with('error', 'Este correo ya está pendiente de verificación.');
        }

        RegistroTemporal::create([
            'nombre' => $request->nombre,
            'telefono' => $request->telefono,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'token' => $token,
        ]);

        Mail::to($request->email)->send(new VerificaRegistro($token));

        return redirect()->route('login')->with('success', 'Te hemos enviado un correo de verificación.');
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }
}
