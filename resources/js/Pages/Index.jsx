import React, { useRef, useEffect, useState } from 'react';
import { Head, useForm, Link, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

import '../../css/estiloBase.css';
import '../../css/estiloIndex.css';

export default function Index() {
    const contactoRef = useRef(null);

    const { auth } = usePage().props;
    const user = auth?.user;
    const isAuthenticated = !!user;

    const [politicaError, setPoliticaError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [nombreError, setNombreError] = useState('');
    const [telefonoError, setTelefonoError] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [verPolitica, setVerPolitica] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: '',
        politica: false,
        comunicaciones: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let valido = true;

        if (!data.nombre.trim()) { setNombreError('El nombre es obligatorio.'); valido = false; } else { setNombreError(''); }
        if (!/^[0-9]+$/.test(data.telefono)) { setTelefonoError('Telefono no válido'); valido = false; } else { setTelefonoError(''); }

        const correoValido = /^[a-zA-Z0-9]+@gmail\.com$/.test(data.email);
        if (!correoValido) { setEmailError("Trabajamos con @gmail.com"); return; } else { setEmailError(''); }

        if (!data.politica) { setPoliticaError('Debes aceptar la política de privacidad.'); return; } else { setPoliticaError(''); }

        if (!data.mensaje.trim()) { setMensajeError('El mensaje es obligatorio.'); valido = false; } else { setMensajeError(''); }

        if (!valido) return;

        post('/contacto', {
            onSuccess: () => {
                reset();
                setNombreError(''); setTelefonoError(''); setEmailError(''); setMensajeError(''); setPoliticaError('');
            }
        });
    };

    useEffect(() => {
        if (window.location.hash === '#contacto') {
            contactoRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        const elementos = document.querySelectorAll('.subida');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, { threshold: 0.1 });

        elementos.forEach(el => observer.observe(el));
        return () => elementos.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div id="Cuerpo" className="page-index">
            <Head title="Inmobiliaria CES" />

            {/* CABECERA */}
            <nav>
                <div><strong>INMOBILIARIA CES</strong></div>
                <div>
                    <Link href="/">Inicio</Link>
                    <Link href="/pisos">Inmuebles</Link>
                    <Link href="/#contacto">Contacto</Link>
                    <Link href="/blog">Blog</Link>
                    {isAuthenticated ? (
                        <div className="desplegable">
                            <button className="desplegable-nombre">{user.nombre}</button>
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

            {/* PRINCIPAL */}
            <section className="titulo">
                <h1 id="TituloPrincipal">¿Quieres vender o alquilar tu inmueble?</h1>
                <p id="Eslogan"><span id="Ces">Confía en CES</span> para una experiencia personalizada</p>
            </section>

            {/* QUIÉNES SOMOS */}
            <section id="info-mano" className="subida">
                <div className="info">
                    <h2>¿Por qué deberías confiar en nosotras?</h2>
                    <p>CES es una inmobiliaria local, con profesionales con más de 10 años en el sector. Privacidad
                        trabajamos con un trato personalizado a cada cliente.</p>
                    <p><strong>Personalización:</strong> Buscamos el cliente que mejor encaje con tus intereses.</p>
                    <p><strong>Experiencia:</strong> Llevamos trabajando en este sector más de 10 años</p>
                    <p><strong>Honestidad:</strong> Ofrecemos información clara e imparcial para ayudarte a tomar
                        decisiones con confianza.</p>
                    <p><strong>Compromiso:</strong> Acompañamos cada proceso con atención y dedicación, asegurando una
                        experiencia cercana y eficaz.</p>
                    <p><strong>Transparencia:</strong> Mantenemos una comunicación abierta en todo momento para que
                        sepas exactamente en qué punto del proceso estás.</p>

                </div>
                {/* ImagenMano */}
                <div className="imagenMano">
                    <img
                        src="/storage/images/index/ImagenMano.png"
                        alt="Mano entregando llaves"
                        style={{width: '100%', height: 'auto', display: 'block'}}
                    />
                </div>
            </section>

            {/* EdificioAlto */}
            <section id="edificio-ventajas" className="subida">
                <div className="edificioAlto">
                    <img src="/storage/images/index/EdificioAlto.png" alt="Edificio alto"
                         style={{width: '100%', height: '100vh', display: 'block'}}
                    />
                </div>

                {/* VENTAJAS */}
                <div className="ventajas">
                    <h2>Nuestras ventajas</h2>
                    <ul>
                        <li>Hemos aprendido formas de trabajo de diferentes inmobiliarias, y hemos creado un modelo
                            propio más humano y eficiente.
                        </li>
                        <li>Más de 500 clientes satisfechos que nos recomiendan.</li>
                        <li>Gestionamos nosotras todo el papeleo, incidencias y burocracia para que tú no tengas que
                            preocuparte por nada.
                        </li>
                        <li>Atención completamente personalizada según tus necesidades y situación.</li>
                        <li>Amplio conocimiento del mercado inmobiliario local.</li>
                        <li>Asesoramiento legal y financiero durante todo el proceso.</li>
                        <li>Transparencia total en cada etapa de la compra o alquiler.</li>
                    </ul>
                </div>
            </section>

            {/* NOSOTRAS */}
            <section id="Nosotras">
                <div className={`contenedorGirado ${flipped ? 'girado' : ''}`} onClick={() => setFlipped(!flipped)}>
                    <div className="imagenNosotras">
                        <h2 id="TituloNosotrasAnimado">¿QUIERES SABER MÁS SOBRE NOSOTRAS?</h2>
                        <img src="/storage/images/index/Nosotras.png" alt="Privacidad" />
                    </div>

                    <div className="textoNosotras fondoNosotras">
                        <h1>Todo sobre Nosotras</h1>
                        <p>
                            Somos dos mujeres apasionadas por el mundo inmobiliario, con más de diez años de experiencia
                            ayudando a personas a encontrar mucho más que una casa: su hogar.
                            Después de trabajar durante años en diferentes agencias, decidimos dar un paso valiente y
                            crear
                            Inmobiliaria CES, un proyecto con alma que pone en el centro a las personas. Aquí no hay
                            prisas
                            ni procesos fríos: te escuchamos, te entendemos y te acompañamos en cada paso del camino.
                            Sabemos lo que se siente al comprar o vender una vivienda. Por eso lo hacemos fácil, claro y
                            con
                            corazón. Apostamos por una inmobiliaria más humana, más cercana y más honesta.
                            Trabajamos contigo de tú a tú, sin tecnicismos vacíos ni promesas imposibles. Te explicamos
                            todo
                            con transparencia, resolvemos tus dudas con paciencia y celebramos contigo cuando llegamos
                            al
                            final del proceso. Porque si tú ganas, nosotras también.
                            Estamos demostrando que se puede hacer inmobiliaria con profesionalidad, pero también con
                            empatía, sensibilidad y compromiso real.
                            Nuestros telefonos de contacto son los siguientes: +34669052244 le atenderá Celia y
                            +34683125643 le atenderá Sandra<br/>
                            Bienvenida/o a CES.
                        </p>
                    </div>
                </div>
            </section>

            {/* FORMULARIO DE CONTACTO */}
            <section
                id="contacto"
                ref={contactoRef}
                style={{
                    backgroundImage: "url('/storage/images/index/Salon.png')"
                }}
            >
                <h2 id="FormTitulo">Estaremos encantadas de ayudarte</h2>
                <form id="Formulario" onSubmit={handleSubmit}>
                    <div id="FormVarios">
                        <div id="FormNombre">
                            <input
                                placeholder="Nombre"
                                value={data.nombre}
                                onChange={e => setData('nombre', e.target.value)}
                            />
                            {nombreError && <p style={{ color: 'red', fontSize: '0.8rem' }}>{nombreError}</p>}
                        </div>
                        <div id="FormTelf">
                            <input
                                placeholder="Teléfono"
                                value={data.telefono}
                                onChange={e => setData('telefono', e.target.value)}
                            />
                            {telefonoError && <p style={{ color: 'red', fontSize: '0.8rem' }}>{telefonoError}</p>}
                        </div>
                        <div id="FormCorreo">
                            <input
                                placeholder="Correo electrónico"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                            />
                            {emailError && <p style={{ color: 'red', fontSize: '0.8rem' }}>{emailError}</p>}
                        </div>
                    </div>
                    <textarea
                        id="FormMensaje"
                        rows="4"
                        placeholder="Mensaje"
                        value={data.mensaje}
                        onChange={e => setData('mensaje', e.target.value)}
                    ></textarea>
                    {mensajeError && <p style={{ color: 'red', fontSize: '0.8rem' }}>{mensajeError}</p>}

                    <div className="marcadores">
                        <label id="FormPolitica">
                            <input
                                type="checkbox"
                                checked={data.politica}
                                onChange={e => setData('politica', e.target.checked)}
                            />
                            <p>
                                He leído y acepto la {' '}
                                <a
                                    href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        setVerPolitica(true);
                                    }}
                                    style={{
                                        textDecoration: 'underline',
                                        cursor: 'pointer'
                                    }}
                                >
                                    política de privacidad
                                </a>
                            </p>
                        </label>
                        {politicaError && <p style={{color: 'red', fontSize: '0.8rem'}}>{politicaError}</p>}

                        <label id="FormComunicaciones">
                            <input
                                type="checkbox"
                                checked={data.comunicaciones}
                                onChange={e => setData('comunicaciones', e.target.checked)}
                            /> Acepto recibir comunicación electrónica
                        </label>
                    </div>
                    <button id="FormEnviar" type="submit" disabled={processing}>ENVIAR</button>
                </form>
            </section>

            {/* POLITICA */}
            {verPolitica && (
                <div className="politica-overlay">
                    <div className="politica-modal">
                        <button className="politica-cerrar" onClick={() => setVerPolitica(false)}>&times;</button>
                        <h2>Política de Privacidad</h2>
                        <p>
                        En Inmobiliaria CES nos tomamos muy en serio tu privacidad.<br/><br/>
                        Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos
                        personales cuando te pones en contacto con nosotras, ya sea a través de este sitio web, por
                        teléfono, correo electrónico o en persona.<br/><br/>
                        <strong>1. ¿Quién es la responsable del tratamiento de tus datos?</strong><br/>
                        Somos Inmobiliaria CES, dos profesionales del sector inmobiliario con más de diez años de
                        experiencia. Nos puedes contactar a través de nuestro formulario de contacto, por correo
                        electrónico o personalmente en nuestras oficinas.<br/><br/>
                        <strong>2. ¿Qué datos recogemos?</strong><br/>
                        Solo recogemos los datos que nos proporcionas directamente, como tu nombre, teléfono, correo
                        electrónico y cualquier información que decidas compartir con nosotras en el formulario de
                        contacto.<br/><br/>
                        <strong>3. ¿Con qué finalidad tratamos tus datos?</strong><br/>
                        Utilizamos tus datos exclusivamente para responder a tus consultas, enviarte información
                        relacionada con los inmuebles o servicios que solicitas, y mantener una comunicación clara y
                        útil contigo.<br/><br/>
                        <strong>4. ¿Cuánto tiempo conservamos tus datos?</strong><br/>
                        Conservaremos tus datos únicamente el tiempo necesario para gestionar tu solicitud o
                        mientras exista una relación comercial o de interés por tu parte.<br/><br/>
                        <strong>5. ¿Compartimos tus datos?</strong><br/>
                        No compartimos tus datos con terceros, salvo obligación legal o si es imprescindible para la
                        prestación de un servicio que nos hayas solicitado expresamente (por ejemplo, gestionar una
                        cita con un notario).<br/><br/>
                        <strong>6. ¿Cuáles son tus derechos?</strong><br/>
                        Puedes ejercer tus derechos de acceso, rectificación, cancelación, oposición, limitación del
                        tratamiento y portabilidad en cualquier momento. Para ello, solo tienes que contactarnos y
                        atenderemos tu solicitud con la mayor transparencia.<br/><br/>
                        <strong>7. Seguridad</strong><br/>
                        Aplicamos medidas técnicas y organizativas para proteger tus datos personales y evitar
                        accesos no autorizados o mal uso de la información.<br/><br/>
                        <strong>8. Cambios en la política</strong><br/>
                        Nos reservamos el derecho a actualizar esta Política de Privacidad. Si realizamos algún
                        cambio importante, lo comunicaremos a través de esta página.<br/><br/>
                        Gracias por confiar en nosotras. En Inmobiliaria CES creemos en una inmobiliaria más humana,
                        cercana y transparente.<br/><br/>
                        Si tienes cualquier duda sobre esta política, no dudes en escribirnos.
                    </p>
                    </div>
                </div>
            )}

            {/* FOOTER */}
            <footer className="footer">
                <div>
                    <p><strong>Inmobiliaria CES</strong> &copy; {new Date().getFullYear()} — Todos los derechos reservados.</p>
                    <p>Nos comprometemos a ofrecer un servicio cercano, profesional y honesto. Estamos aquí para ayudarte.</p>
                    <p>+34669052244 (Celia) y +34683125643 (Sandra)</p>
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
