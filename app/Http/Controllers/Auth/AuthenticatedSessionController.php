<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
<<<<<<< HEAD
use Illuminate\View\View;
=======
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
>>>>>>> 3b768a7 (TFG Terminado y desplegado)

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
<<<<<<< HEAD
    public function create(): View
    {
        return view('auth.login');
=======
    public function create(): Response
    {
        return Inertia::render('Auth/Login');
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
<<<<<<< HEAD
        $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        if (Auth::attempt($request->only('email', 'password'), $request->boolean('remember'))) {
            $request->session()->regenerate();

            // Redirecciona al index si el login es exitoso
            return redirect()->route('index');
        }

        return back()->withErrors([
            'email' => trans('auth.failed'),
        ]);
=======
        // Validar y exigir que el email exista en BD
        $request->validate([
            'email' => ['required', 'string', 'email', 'exists:usuarios,email'],
            'password' => ['required', 'string'],
        ], [
            'email.exists' => 'El correo no está registrado.',
        ]);

        // Intentar login
        if (! Auth::attempt($request->only('email', 'password'), $request->boolean('remember'))) {
            throw ValidationException::withMessages([
                'password' => 'La contraseña es incorrecta.',
            ]);
        }

        // Éxito: regenerar sesión y redirigir al index
        $request->session()->regenerate();

        return redirect()->intended(route('index'));
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
<<<<<<< HEAD

=======
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
