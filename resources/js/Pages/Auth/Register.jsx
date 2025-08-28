<<<<<<< HEAD
import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        nombre: '',
=======
import { Head, Link, useForm } from '@inertiajs/react';
import {LoaderCircle} from 'lucide-react';

//import InputError from '@/components/input-error';
import '../../../css/estiloBase.css';
import '../../../css/estiloLogin.css';
import React from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset, setError,  clearErrors } = useForm({
        nombre: '',
        telefono: '',
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        email: '',
        password: '',
        password_confirmation: '',
    });

<<<<<<< HEAD
    const submit = (e) => {
        e.preventDefault();
        post('/register');
=======
    const validate = () => {
        clearErrors();
        let hasError = false;

        const nombre = (data.nombre || '').trim();
        const telefono = (data.telefono || '').trim();
        const email = (data.email || '').trim();
        const password = (data.password || '');
        const password_confirmation = (data.password_confirmation || '');

        //Ningún campo vacio
        if (!nombre) { setError('nombre', 'El nombre es obligatorio.'); hasError = true; }
        if (!telefono) { setError('telefono', 'El teléfono es obligatorio.'); hasError = true; }
        if (!email) { setError('email', 'El correo electrónico es obligatorio.'); hasError = true; }
        if (!password) { setError('password', 'La contraseña es obligatoria.'); hasError = true; }
        if (!password_confirmation) { setError('password_confirmation', 'Debes confirmar la contraseña.'); hasError = true; }

        // teledfono de 9 caracteres
        if (telefono && telefono.length !== 9) {
            setError('telefono', 'El teléfono debe tener 9 caracteres.');
            hasError = true;
        }

        //Contraseñas coinciden
        if (password && password_confirmation && password !== password_confirmation) {
            setError('password', 'Las contraseñas no coinciden.');
            setError('password_confirmation', 'Las contraseñas no coinciden.');
            hasError = true;
        }

        //gmail.com
        if (email && !/^[^\s@]+@gmail\.com$/i.test(email)) {
            setError('email', 'El correo debe ser de Gmail (terminar en @gmail.com).');
            hasError = true;
        }

        return !hasError;
    };

    const submit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        post(route('register'), {
            onFinish: () => reset('password','password_confirmation'),
        });
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    };

    return (
        <>
            <Head title="Registro" />
<<<<<<< HEAD

            <h1>Crear cuenta</h1>

            <form onSubmit={submit}>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={data.nombre}
                        onChange={(e) => setData('nombre', e.target.value)}
                    />
                    {errors.nombre && <div style={{ color: 'red' }}>{errors.nombre}</div>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>

                <div>
                    <label>Confirmar contraseña</label>
                    <input
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                </div>

                <button type="submit" disabled={processing}>
                    Registrarse
                </button>
            </form>
=======
            <h1>Crear cuenta</h1>

            <form onSubmit={submit} noValidate>
                <input
                    type="text"
                    value={data.nombre}
                    onChange={e => setData('nombre', e.target.value)}
                    placeholder="Nombre completo"
                />
                {errors.nombre && <div>{errors.nombre}</div>}

                <input
                    type="text"
                    value={data.telefono}
                    onChange={e => setData('telefono', e.target.value)}
                    placeholder="Telefono"
                    maxLength={9}
                />
                {errors.telefono && <div>{errors.telefono}</div>}

                <input
                    type="email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    placeholder="Correo electrónico"
                />
                {errors.email && <div>{errors.email}</div>}

                <input
                    type="password"
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                    placeholder="Contraseña"
                />
                {errors.password && <div>{errors.password}</div>}

                <input
                    type="password"
                    value={data.password_confirmation}
                    onChange={e => setData('password_confirmation', e.target.value)}
                    placeholder="Confirmar contraseña"
                />
                {errors.password_confirmation && <div>{errors.password_confirmation}</div>}

                <button type="submit" disabled={processing}>
                    Registrarse {processing && <LoaderCircle className="spin" />}
                </button>
            </form>

            <p>
                ¿Ya tienes cuenta? <Link href={route('login')}>Iniciar sesión</Link>
            </p>
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        </>
    );
}
