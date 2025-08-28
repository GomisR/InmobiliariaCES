import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
<<<<<<< HEAD
=======
import react from '@vitejs/plugin-react';
import path from 'path';
>>>>>>> 3b768a7 (TFG Terminado y desplegado)

export default defineConfig({
    plugins: [
        laravel({
<<<<<<< HEAD
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
=======
            input: [
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            ziggy: path.resolve('vendor/tightenco/ziggy'),
        },
    },
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
});
