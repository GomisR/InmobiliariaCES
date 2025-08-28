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

const ViaHispanidad = () => {

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
=======
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {inmueble.imagenes.map((img, i) => (
                    <div key={i}>
                        <img src={img} alt={`Imagen ${i + 1}`}/>
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
                    </div>
                ))}
            </Carousel>

<<<<<<< HEAD
            {/* Titulo y descripcion */}
            <h1 className="text-3xl font-bold mt-6 mb-2">{inmueble.titulo}</h1>
            <p className="text-gray-700 mb-4">{inmueble.descripcion}</p>

            {/* Info del piso */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-sm leading-6">
=======
            <h1 className="piso-titulo">{inmueble.titulo}</h1>
            <p className="piso-descripcion">{inmueble.descripcion}</p>

            <div className="piso-info">
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
                <div>
                    <p><strong>Tipo:</strong> {inmueble.tipo.toLocaleString()}</p>
                    <p><strong>Estado:</strong> {inmueble.estado.toLocaleString()}</p>
                    <p><strong>Precio:</strong> {parseInt(inmueble.precio).toLocaleString()} €/mes</p>
                    <p><strong>Superficie:</strong> 285 m²</p>
                    <p><strong>Habitaciones:</strong> 3 hab.</p>
                    <p><strong>Baños:</strong> 4</p>
                    <p><strong>Extras:</strong> Terraza y Plaza de garaje incluida en el alquiler</p>
                    <p><strong>Estado:</strong> Perfecto</p>
                </div>
                <div>
                    <p><strong>Calefacción:</strong> Individual, gas natural</p>
                    <p><strong>Orientación:</strong> Sur</p>
                    <p><strong>Año de construcción:</strong> 2018</p>
                    <p><strong>Equipamiento:</strong> Aire acondicionado, cocina equipada</p>
                </div>
            </div>

<<<<<<< HEAD
            {/* Descripcion del inmueble */}
            <div className="mt-6 text-justify text-gray-800 leading-7">
                <p>
                    Vivienda Unifamiliar Lista para Entrar a Vivir
                    Te presentamos esta encantadora casa, perfecta para familias que buscan comodidad y calidad de vida. La propiedad cuenta con:
                    4 Habitaciones: Espacios amplios y luminosos, ideales para el descanso y la convivencia familiar.
                    Salón de 48 m²: Un gran espacio para compartir momentos inolvidables, perfecto para reuniones y momentos de relax.
                    Jardín de 42 m²: Un oasis privado donde disfrutar al aire libre y relajarse en un entorno natural.
                    Garaje para 2 Plazas: Comodidad y seguridad para tus vehículos.
                    Ubicada en una urbanización exclusiva de tan solo 8 vecinos, la comunidad ofrece bajos costes de mantenimiento y una ubicación inmejorable. Esta vivienda está lista para entrar a vivir, combinando modernidad y confort en cada detalle.
                </p>
            </div>
=======
            <div className="piso-descripcion">
                <p>
                    Vivienda Unifamiliar Lista para Entrar a Vivir.
                    Te presentamos esta encantadora casa, perfecta para familias que buscan comodidad y calidad de vida.
                    La propiedad cuenta con 4 Habitaciones: espacios amplios y luminosos, ideales para el descanso y la
                    convivencia familiar.
                    Salón de 48 m²: un gran espacio para compartir momentos inolvidables, perfecto para reuniones y
                    relax.
                    Jardín de 42 m²: un oasis privado donde disfrutar al aire libre y relajarse en un entorno natural.
                    Garaje para 2 Plazas: comodidad y seguridad para tus vehículos.
                    Ubicada en una urbanización exclusiva de tan solo 8 vecinos, la comunidad ofrece bajos costes de
                    mantenimiento y una ubicación inmejorable.
                    Esta vivienda está lista para entrar a vivir, combinando modernidad y confort en cada detalle.
                </p>
            </div>
            {/* Mapa */}
            <div className="mapa">
                <iframe
                    className="mapa-ubicacion"
                    title="Mapa Google"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.689582693463!2d-0.9284694849505486!3d41.64029837924025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59149aaaf56f15%3A0xfbb5422873cf69d9!2sV%C3%ADa%20Hispanidad%2C%20Zaragoza!5e0!3m2!1ses!2ses!4v1721394470000!5m2!1ses!2ses"
                    loading="lazy"
                    allowFullScreen="">
                </iframe>
            </div>
            <footer className="footer">
                <div>
                    <p><strong>Inmobiliaria CES</strong> {new Date().getFullYear()} — Todos los derechos reservados.</p>
                    <p>Nos comprometemos a ofrecer un servicio cercano, profesional y honesto...</p>
                    <p>Nuestros telefonos de contacto son los siguientes:<br/>
                        +34669052244 (Celia) y/o +34683125643 (Sandra)</p>
                    <div className="footer-links">
                        <Link href="/privacidad">Política de Privacidad</Link>
                        <Link href="/#contacto">Contacto</Link>
                        <Link href="/blog">Blog</Link>
                    </div>
                </div>
            </footer>
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
        </div>
    );
};

export default ViaHispanidad;
