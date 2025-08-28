import React, { useEffect, useState } from 'react';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import {route} from "ziggy-js";
import '../../css/estiloBase.css';
import '../../css/estiloBlog.css';


export default function Blog() {
    const { props } = usePage();
    const user = props.auth?.user;
    const isAuthenticated = !!user;
    const [valoraciones, setValoraciones] = useState([]);
    const [media, setMedia] = useState(null);


    const { data, setData, post, processing, errors, reset } = useForm({
        puntuacion: '',
        comentario: ''
    });

    useEffect(() => {
        fetch('/valoraciones')
            .then(res => res.json())
            .then(data => {
                setValoraciones(data.valoraciones);
                setMedia(data.media);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('valoraciones.store'), {
            onSuccess: () => {
                reset();
                fetch('/valoraciones')
                    .then(res => res.json())
                    .then(data => {
                        setValoraciones(data.valoraciones);
                        setMedia(data.media);
                    });
            }
        });
    };

    const renderStars = (count) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < count ? '★' : '☆'}</span>
        ));
    };

    return (

        <div>
            <Head title="Blog - Valoraciones"/>

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

            <h1>Opiniones de nuestros clientes</h1>

            {/* Valoracion media */}
            {media !== null && (
                <div className="valoracion-media">
                    <p>Puntuación media: <strong>{media} / 5</strong></p>
                    <div className="estrellas-media">{renderStars(Math.round(media))}</div>
                </div>
            )}

            {user && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="puntuacion">Puntuación (1-5):</label>
                        <input
                            id="puntuacion"
                            type="number"
                            min="1"
                            max="5"
                            value={data.puntuacion}
                            onChange={e => setData('puntuacion', e.target.value)}
                            required
                        />
                        {errors.puntuacion && <p style={{color: 'red'}}>{errors.puntuacion}</p>}
                    </div>

                    <div>
                        <label htmlFor="comentario">Comentario (opcional):</label>
                        <textarea
                            id="comentario"
                            placeholder="¿Qué opinas sobre nuestro servicio?"
                            value={data.comentario}
                            onChange={e => setData('comentario', e.target.value)}
                            rows="4"
                        />
                        {errors.comentario && <p style={{color: 'red'}}>{errors.comentario}</p>}
                    </div>

                    <button type="submit" disabled={processing}>
                        Publicar valoración
                    </button>
                </form>
            )}

            <div className="valoraciones-contenedor">
                {valoraciones.map((valoracion) => (
                    <div key={valoracion.id} className="ficha-valoracion">
                        <strong>{valoracion.usuario?.nombre}</strong>
                        <div>{renderStars(valoracion.puntuacion)}</div>
                        <p>{valoracion.comentario}</p>
                    </div>
                ))}
            </div>
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
