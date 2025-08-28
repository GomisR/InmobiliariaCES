import React, { useEffect,useState } from 'react';
import { useForm, usePage, Link } from '@inertiajs/react';
import {route} from "ziggy-js";
import '../../css/estiloBase.css';
import '../../css/estiloPerfil.css';

export default function Perfil() {
    const { auth, usuariosEnBusqueda = [] } = usePage().props;
    const user = auth.user;
    const esAdmin = user.rol === 'administrador';
    const isAuthenticated = !!user;

    const initialCalendarEmail = user.calendar_email ?? user.email ?? '';

    // Formulario de actualización
    const { data, setData, patch, processing, errors, reset } = useForm({
        nombre: user.nombre || '',
        password: '',
        password_confirmation: '',
        buscando: !!user.buscando_piso,
        calendar_email: initialCalendarEmail,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('perfil.update'), {
            onSuccess: () => {
                setMensajeExito('Perfil actualizado correctamente.');
                setData('password', '');
                setData('password_confirmation', '');
                setTimeout(() => setMensajeExito(''), 10000); // Oculta despues de 10 segundos
            }
        });
    };

    const quiereBusqueda = () => {
        setData('buscando', !data.buscando);
        patch(route('perfil.quiereBusqueda'));
    };

    const [mensajeExito, setMensajeExito] = useState('');

    //Calendario
    const calendarioSrc = esAdmin && data.calendar_email
        ? `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(data.calendar_email)}&ctz=Europe/Madrid`
        : null;

    return (
        <div id="Cuerpo">
            {/* CABECERA */}
            <nav>
                <div><strong>INMOBILIARIA CES</strong></div>
                <div>
                    <Link href="/">Inicio</Link>
                    <Link href="/pisos">Inmuebles</Link>
                    <Link href="/#contacto">Contacto</Link>
                    <Link href="/blog">Blog</Link>
                    {/* Menu usuario autenticado */}
                    {isAuthenticated ? (
                        <div className="desplegable">
                            <button className="desplegable-nombre">
                                {user.nombre}
                            </button>
                            <div className="desplegable-menu">
                                <Link href="/perfil">Perfil</Link>
                                <Link href={route('logout')} method="post" as="button">Cerrar sesión</Link>
                            </div>
                        </div>
                    ) : (
                        <Link href={route('login')}>Log in</Link>
                    )}
                </div>
            </nav>

            <h1>Hola {user?.nombre}</h1>

            {/* Clientes */}
            {!esAdmin && (
                <div id="BusquedaPiso">
                    <p> Si estas interesado en encontrar el piso perfecto para tí háznoslo saber</p>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            checked={data.buscando}
                            onChange={quiereBusqueda}
                        />
                        Estoy en búsqueda de pisos
                    </label>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nuevo nombre de usuario:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={data.nombre}
                        onChange={e => setData('nombre', e.target.value)}
                    />
                    {errors.nombre && <p>{errors.nombre}</p>}
                </div>

                <div>
                    <label>Nueva contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label>Confirmar nueva contraseña:</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={e => setData('password_confirmation', e.target.value)}
                    />
                </div>

                {esAdmin && (
                    <div>
                        <label>Gmail de Google Calendar:</label>
                        <input id="GmailCalendario"
                            type="email"
                            name="calendar_email"
                            value={data.calendar_email}
                            onChange={e => setData('calendar_email', e.target.value)}
                            placeholder="correo@gmail.com"
                        />
                        {errors.calendar_email && <p style={{color:'red'}}>{errors.calendar_email}</p>}
                    </div>
                )}

                <button type="submit" disabled={processing}>
                    Guardar cambios
                </button>
            </form>

            {/* Administradores */}
            {esAdmin && (
                <div>
                    <h2>Usuarios en búsqueda de pisos</h2>
                    {usuariosEnBusqueda.length > 0 ? (
                        <table border="1" cellPadding="8">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {usuariosEnBusqueda.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.nombre}</td>
                                    <td>{u.email}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No hay usuarios buscando piso en este momento.</p>
                    )}
                </div>
            )}

            {/* Calendario de Google */}
            {esAdmin && calendarioSrc && (
                <section style={{ marginTop: '2rem' }}>
                    <h2>Mi Calendario</h2>
                    <iframe
                        title="Calendario de Google"
                        src={calendarioSrc}
                        style={{ border: 0, width: '100%', height: '600px' }}
                        frameBorder="0"
                        scrolling="no"
                    />
                </section>
            )}

            {/* FOOTER */}
            <footer className="footer">
                <div>
                    <p><strong>Inmobiliaria CES</strong> &copy; {new Date().getFullYear()} — Todos los derechos
                        reservados.</p>
                    <p>Nos comprometemos a ofrecer un servicio cercano, profesional y honesto. Estamos aquí para
                        ayudarte.</p>
                    <p>Nuestros telefonos de contacto son los siguientes:<br/>
                        +34669052244 (Celia) y/o +34683125643 (Sandra)
                    </p>
                    <div className="footer-links">
                        <Link href="/privacidad">Política de Privacidad</Link>
                        <Link href="/#contacto">Contacto</Link>
                        <Link href="/blog">Blog</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
