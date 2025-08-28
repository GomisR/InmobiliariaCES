import React, { useRef, useEffect, useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import '../../css/estiloBase.css';
import '../../css/estiloPisos.css';


export default function Pisos({ inmuebles, filters }) {
    const { props } = usePage();

    // Obtener usuario autenticado desde props
    const { auth } = usePage().props;
    const user = auth?.user;
    const isAuthenticated = !!user;
    console.log("Usuario actual:", user);

    const [filtros, setFiltros] = useState({
        precio_min: filters.precio_min || '',
        precio_max: filters.precio_max || '',
        tipo: filters.tipo || '',
    });

    const handleFiltro = () => {
        router.visit(route('pisos'), {
            method: 'get',
            preserveState: true,
            preserveScroll: true,
            data: filtros,
        });
    };



    return (
        <div id="Cuerpo">
            <Head title="Pisos en oferta"/>

            {/* CABECERA */}
            <nav>
                <div><strong>INMOBILIARIA CES</strong></div>
                <div>
                    <Link href="/">Inicio</Link>
                    <Link href="/pisos">Inmuebles</Link>
                    {/*<Link href="/nosotras">Privacidad</Link>*/}
                    <Link href="/#contacto">Contacto</Link>
                    <Link href="/blog">Blog</Link>
                    {/* Menú usuario autenticado */}
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

            {/* FILTRO */}
            <section className="filtros-section">
                <div className="filtros-form">
                    <input
                        type="number"
                        step="25000"
                        placeholder="Precio mínimo"
                        value={filtros.precio_min}
                        onChange={e => setFiltros({...filtros, precio_min: e.target.value})}
                    />
                    <input
                        type="number"
                        step="25000"
                        placeholder="Precio máximo"
                        value={filtros.precio_max}
                        onChange={e => setFiltros({...filtros, precio_max: e.target.value})}
                    />
                    <select
                        value={filtros.tipo}
                        onChange={e => setFiltros({...filtros, tipo: e.target.value})}
                    >
                        <option value="">Todos</option>
                        <option value="venta">Venta</option>
                        <option value="alquiler">Alquiler</option>
                    </select>
                    <button onClick={handleFiltro}>Aplicar</button>
                </div>
            </section>

            {/* LISTADO */}
            <section className="pisos-listado">
                {inmuebles.length === 0 ? (
                    <p>No se encontraron inmuebles con los filtros aplicados.</p>
                ) : (
                    inmuebles.map(piso => (
                        <Link
                            key={piso.id}
                            href={route('pisos.mostrar', piso.direccion)}
                            className="ficha-inmueble"
                        >
                            <div className="ficha-imagen">
                                <img
                                    src={piso.imagenes?.[0]}
                                    alt="Inmueble"
                                />
                            </div>
                            <div className="ficha-contenido">
                                <h3>{piso.titulo}</h3>
                                <p>{piso.descripcion}</p>
                                <p><strong>Tipo:</strong> {piso.tipo}</p>
                                <p>
                                    <strong>Precio:</strong> {parseInt(piso.precio)} {piso.tipo === 'alquiler' ? '€/mes' : '€'}
                                </p>
                            </div>
                        </Link>
                    ))
                )}
            </section>
            {/* FOOTER */}
            <footer className="footer">
                <div>
                    <p><strong>Inmobiliaria CES</strong> {new Date().getFullYear()} — Todos los derechos
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
