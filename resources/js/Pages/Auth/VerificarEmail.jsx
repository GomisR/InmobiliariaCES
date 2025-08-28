import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function VerificarEmail() {
    const { status } = usePage().props;
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <>
            <Head title="Verifica tu correo" />
            <div className="max-w-xl mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Verificación de correo</h1>

                <p className="mb-4">
                    Gracias por registrarte. Antes de continuar, revisa tu correo y haz clic en el enlace de verificación.
                </p>
                <p className="mb-4">
                    ¿No recibiste el email?
                </p>

                {status === 'verification-link-sent' && (
                    <div className="text-green-600 mb-4">
                        Se ha enviado un nuevo enlace de verificación a tu correo electrónico.
                    </div>
                )}

                <form onSubmit={submit}>
                    <button type="submit" disabled={processing} className="bg-blue-600 text-white px-4 py-2 rounded">
                        Reenviar correo de verificación
                    </button>
                </form>

                <div className="mt-4">
                    <Link href={route('logout')} method="post" className="text-sm text-gray-500 underline">
                        Cerrar sesión
                    </Link>
                </div>
            </div>
        </>
    );
}
