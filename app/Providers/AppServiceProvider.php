<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
<<<<<<< HEAD
=======
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
>>>>>>> 3b768a7 (TFG Terminado y desplegado)

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
<<<<<<< HEAD
        //
=======
        $this->app->bind('path.public', function () {
            return base_path('public_html');
        });
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
<<<<<<< HEAD
        //
=======
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user(),
                ];
            },
            'mensaje' => function () {
                return session('mensaje');
            },
        ]);
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    }
}
