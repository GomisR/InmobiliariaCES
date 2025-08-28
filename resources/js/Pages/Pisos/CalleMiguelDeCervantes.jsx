import React, { useEffect, useState, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
<<<<<<< HEAD
=======
import '../../../css/estiloBase.css';
import '../../../css/piso.css';
>>>>>>> 3b768a7 (TFG Terminado y desplegado)

const CalleMiguelDeCervantes = () => {

    const { props } = usePage();
    const inmueble = props.inmueble;
    const user = props.auth?.user;
<<<<<<< HEAD
=======
    const isAuthenticated = !!user;
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
    const contactoRef = useRef(null);

    if (!inmueble) return <p>No se encontró el inmueble.</p>;

    return (
<<<<<<< HEAD
        <div className="max-w-5xl mx-auto p-4">
            <nav>
                <div><strong>INMOBILIARIA<br/>CES</strong></div>
                <div>
                    <Link href="/">Inicio</Link>
                    <Link href="/pisos">Inmuebles</Link>
                    <Link href="/nosotras">Nosotras</Link>
                    <Link href="/#contacto">Contacto</Link>
                    <Link href="/blog">Blog</Link>
                    {user ? (
                        <div className="dropdown">
                            <button className="dropdown-toggle">{user.nombre}</button>
                            <div className="dropdown-menu">
=======
        <div id="Cuerpo">
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
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
                                <Link href="/perfil">Perfil</Link>
                                <Link href={route('logout')} method="post" as="button">Cerrar sesión</Link>
                            </div>
                        </div>
                    ) : (
                        <Link href={route('login')}>Log in</Link>
                    )}
                </div>
            </nav>
<<<<<<< HEAD

            {/* Carrusel de imágenes */}
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {inmueble.imagenes.map((img, i) => (
                    <div key={i}>
                        <img src={img} alt={`Imagen ${i + 1}`} />
                    </div>
                ))}
            </Carousel>

            {/* Titulo y descripcion */}
            <h1 className="text-3xl font-bold mt-6 mb-2">{inmueble.titulo}</h1>
            <p className="text-gray-700 mb-4">{inmueble.descripcion}</p>

            {/* Info del piso */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-sm leading-6">
                <div>
                    <p><strong>Tipo:</strong> {inmueble.tipo.toLocaleString()}</p>
                    <p><strong>Estado:</strong> {inmueble.estado.toLocaleString()}</p>
                    <p><strong>Precio:</strong> {parseFloat(inmueble.precio).toLocaleString()} €</p>
                    <p><strong>Superficie:</strong> 85 m²</p>
                    <p><strong>Habitaciones:</strong> 3 hab.</p>
                    <p><strong>Ubicación:</strong> Planta 3ª exterior sin ascensor</p>
                    <p><strong>Estado:</strong> Piso reformado en 2010</p>
                </div>
                <div>
                    <p><strong>Calefacción:</strong> Individual, gas natural</p>
                    <p><strong>Orientación:</strong> Sur</p>
                    <p><strong>Año de construcción:</strong> 1936</p>
                    <p><strong>Equipamiento:</strong> Aire acondicionado, cocina equipada</p>
                    <p><strong>Condición:</strong> Muy buena</p>
                </div>
            </div>

            {/* Descripcion del inmueble */}
            <div className="mt-6 text-justify text-gray-800 leading-7">
                <p>
                    Este encantador piso reformado en 2010 se encuentra en una cuarta planta alzada, sin ascensor, en
                    una de las zonas más demandadas de la ciudad, a solo unos pasos de la Gran Vía y la calle Sagasta...
                </p>
=======
            <div className="cuerpo">
                {/* Carrusel de imágenes */}
                <Carousel showThumbs={false} autoPlay infiniteLoop>
                    {inmueble.imagenes.map((img, i) => (
                        <div key={i}>
                            <img src={img} alt={`Imagen ${i + 1}`}/>
                        </div>
                    ))}
                </Carousel>

                {/* Titulo y descripcion */}
                <h1 className="piso-titulo">{inmueble.titulo}</h1>
                <p className="piso-descripcion">{inmueble.descripcion}</p>

                {/* Info del piso */}
                <div className="piso-info">
                    <div>
                        <p><strong>Tipo:</strong> {inmueble.tipo.toLocaleString()}</p>
                        <p><strong>Estado:</strong> {inmueble.estado.toLocaleString()}</p>
                        <p><strong>Precio:</strong> {parseFloat(inmueble.precio).toLocaleString()} €</p>
                        <p><strong>Superficie:</strong> 85 m²</p>
                        <p><strong>Habitaciones:</strong> 3 hab.</p>
                        <p><strong>Ubicación:</strong> Planta 3ª exterior sin ascensor</p>
                        <p><strong>Estado:</strong> Piso reformado en 2010</p>
                    </div>
                    <div>
                        <p><strong>Calefacción:</strong> Individual, gas natural</p>
                        <p><strong>Orientación:</strong> Sur</p>
                        <p><strong>Año de construcción:</strong> 1936</p>
                        <p><strong>Equipamiento:</strong> Aire acondicionado, cocina equipada</p>
                        <p><strong>Condición:</strong> Muy buena</p>
                    </div>
                </div>

                {/* Descripcion del inmueble */}
                <div className="piso-descripcion">
                    <p>
                        Este encantador piso reformado en 2010 se encuentra en una cuarta planta alzada, sin ascensor, en
                        una de las zonas más demandadas de la ciudad, a solo unos pasos de la Gran Vía y la calle Sagasta.
                        Con una excelente distribución, cuenta con tres dormitorios, salón luminoso, cocina totalmente equipada
                        y baño reformado. Perfecto para quienes buscan una vivienda lista para entrar a vivir en el corazón de Zaragoza.
                    </p>
                </div>
                {/* Mapa */}
                <div className="mapa">
                    <iframe
                        className="mapa-ubicacion"
                        title="Mapa Google"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.036498757783!2d-0.889674084604505!3d41.64786777924043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914e1b6c63e8b%3A0x847158f1db61f3b1!2sC.%20de%20Miguel%20de%20Cervantes%2C%2050001%20Zaragoza!5e0!3m2!1ses!2ses!4v1721317151123!5m2!1ses!2ses"
                        loading="lazy"
                        allowFullScreen="">
                    </iframe>
                </div>
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
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
            </div>
        </div>
    );
};

export default CalleMiguelDeCervantes;
