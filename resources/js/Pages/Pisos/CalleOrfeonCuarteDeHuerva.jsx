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
                        <p><strong>Superficie:</strong> 90 m²</p>
                        <p><strong>Habitaciones:</strong> 2 hab.</p>
                        <p><strong>Ubicación:</strong> Planta baja</p>
                        <p><strong>Estado:</strong> Piso reformado y luminoso</p>
                    </div>
                    <div>
                        <p><strong>Calefacción:</strong> Individual, gas natural</p>
                        <p><strong>Orientación:</strong> Este</p>
                        <p><strong>Equipamiento:</strong> Aire acondicionado y piscina</p>
                        <p><strong>Condición:</strong> Muy buena</p>
                    </div>
                </div>

                {/* Descripcion del inmueble */}
                <div className="piso-descripcion">
                    <p>
                        Este acogedor piso reformado de 90 m² se encuentra en planta baja y
                        destaca por su luminosidad y excelente estado de conservación.
                        Dispone de 2 habitaciones, calefacción individual a gas natural y
                        aire acondicionado para garantizar el máximo confort durante todo el año.
                        Con una orientación este, ofrece una agradable entrada de luz natural.
                        Además, el edificio cuenta con piscina comunitaria, perfecta para disfrutar
                        en los meses de verano.
                        Una vivienda en muy buenas condiciones, lista para entrar a vivir,
                        ideal para quienes buscan comodidad y calidad.
                    </p>
                </div>
                {/* Mapa */}
                <div className="mapa">
                    <iframe
                        className="mapa-ubicacion"
                        title="Mapa Google"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.080006806594!2d-0.9415664251268837!3d41.59010038339861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59402e81958c45%3A0x4c42eddef6b8df67!2sC.%20del%20Orfe%C3%B3n%2C%202%2C%2050410%20Cuarte%20de%20Huerva%2C%20Zaragoza!5e1!3m2!1ses!2ses!4v1756374001345!5m2!1ses!2ses"
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
