import React, { useEffect, useState, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import '../../../css/estiloBase.css';
import '../../../css/piso.css';

const CalleMiguelDeCervantes = () => {

    const { props } = usePage();
    const inmueble = props.inmueble;
    const user = props.auth?.user;
    const isAuthenticated = !!user;
    const contactoRef = useRef(null);

    if (!inmueble) return <p>No se encontró el inmueble.</p>;

    return (
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
                                <Link href="/perfil">Perfil</Link>
                                <Link href={route('logout')} method="post" as="button">Cerrar sesión</Link>
                            </div>
                        </div>
                    ) : (
                        <Link href={route('login')}>Log in</Link>
                    )}
                </div>
            </nav>
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
                        <p><strong>Superficie:</strong> 65 m²</p>
                        <p><strong>Habitaciones:</strong> 3 hab.</p>
                        <p><strong>Ubicación:</strong> Planta 2ª exterior con ascensor</p>
                        <p><strong>Estado:</strong> Piso sin amueblar</p>
                    </div>
                    <div>
                        <p><strong>Calefacción:</strong> Gas natural</p>
                        <p><strong>Orientación:</strong> Sur</p>
                        <p><strong>Año de construcción:</strong> 1965</p>
                        <p><strong>Equipamiento:</strong> Muebles de la cocina</p>
                        <p><strong>Condición:</strong> Segunda mano/buen estado</p>
                    </div>
                </div>

                {/* Descripcion del inmueble */}
                <div className="piso-descripcion">
                    <p>
                        Una vivienda luminosa, práctica y bien ubicada,
                        lista para adaptarse a tu estilo de vida o convertirse en una inversión rentable.
                        La Almozara te lo pone fácil:
                        el Parque de la Aljafería a un paso, buena conexión con el centro y
                        todo lo que necesitas en tu día a día sin renunciar a la tranquilidad.
                    </p>
                </div>
                {/* Mapa */}
                <div className="mapa">
                    <iframe
                        className="mapa-ubicacion"
                        title="Mapa Google"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.68281509925!2d-0.8970943251225958!3d41.65722117921644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914c78ed074f9%3A0xbf44dd263e026e18!2sC.%20de%20la%20Aljafer%C3%ADa%2C%2012%2C%2050004%20Zaragoza!5e1!3m2!1ses!2ses!4v1756379493948!5m2!1ses!2ses"
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
            </div>
        </div>
    );
};

export default CalleMiguelDeCervantes;
