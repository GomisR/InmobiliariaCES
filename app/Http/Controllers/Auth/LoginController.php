<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\MustVerifyEmail;


class LoginController extends Controller
{
    public function showLoginForm()
    {
        return inertia('Auth/Login'); // tu vista de login con Inertia
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->filled('remember'))) {
            if (!Auth::user()->hasVerifiedEmail()) {
                Auth::logout();
                return back()->withErrors(['email' => 'Debes verificar tu correo electrónico.']);
            }            return redirect()->intended('/');
        }

        return back()->withErrors([
            'email' => 'Credenciales incorrectas',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
