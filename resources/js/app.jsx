import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import '../css/app.css';
import '../css/estiloBase.css';
/*
import '../css/estiloIndex.css';
import '../css/estiloLogin.css';
import '../css/estiloBlog.css';
import '../css/estiloNosotras.css';
import '../css/estiloPerfil.css';
import '../css/estiloPisos.css';
import '../css/estiloPrivacidad.css';
import '../css/piso.css';
*/


createInertiaApp({
    resolve: name =>
        resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
