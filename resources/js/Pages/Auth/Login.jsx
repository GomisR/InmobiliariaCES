import React, { /* useEffect */ } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
// import { router } from '@inertiajs/react';

import '../../../css/estiloBase.css';
import '../../../css/estiloLogin.css';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onError: () => setData('password', ''),
        });
    };

    return (
        <>
            <Head title="Iniciar sesión"/>
            <h1>Iniciar sesión</h1>

            <form onSubmit={submit} noValidate>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value.trim())}
                        placeholder="Correo electrónico"
                        required
                        autoComplete="username"
                    />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        placeholder="Contraseña"
                        required
                        autoComplete="current-password"
                    />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>

                <div id="CheckBox">
                    <label id="Recordarme" className="recordarme-label">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={e => setData('remember', e.target.checked)}
                        />
                        <p className="recordarme-text">Recordarme</p>
                    </label>
                </div>
                <div>
                    <button type="submit" disabled={processing}>Entrar</button>
                </div>
                <p id="Registro">
                    ¿No tienes cuenta? <Link href={route('register')}>REGÍSTRATE</Link>
                </p>
            </form>

            <div className="inicio-container">
                <Link href="/" className="inicio">
                    Inicio
                </Link>
            </div>
        </>
    );
}
