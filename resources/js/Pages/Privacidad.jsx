<<<<<<< HEAD
import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import '../../css/estiloNosotras.css';
import { route } from 'ziggy-js';
import { Ziggy } from '../ziggy';

export default function Nosotras() {
    const { props } = usePage();
    const isAuthenticated = !!props?.auth?.user;

    return (
        <div>
            <Head title="Nosotras - Inmobiliaria CES" />

            {/* CABECERA */}
            <nav>
                <div><strong>INMOBILIARIA<br />CES</strong></div>
                <div>
                    <Link href="/">Inicio</Link>
                    <Link href="/pisos">Inmuebles</Link>
                    <Link href="/nosotras">Nosotras</Link>
                    <Link href="/#contacto">Contacto</Link>
                    <Link href="/blog">Blog</Link>
                    {isAuthenticated ? (
                        <div className="dropdown">
                            <button className="dropdown-toggle">{props.auth.user.nombre}</button>
                            <div className="dropdown-menu">
                                <Link href={route('profile', undefined, false, Ziggy)}>Perfil</Link>
                                <Link href={route('logout', undefined, false, Ziggy)} method="post" as="button">Cerrar sesión</Link>
                            </div>
                        </div>
                    ) : (
                        <Link href={route('login', undefined, false, Ziggy)}>Log in</Link>
                    )}
                </div>
            </nav>

            {/* FONDO INICIAL CON TÍTULO */}
            <section style={{
                backgroundImage: "url('/images/fondo-nosotras.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                fontSize: '3rem'
            }}>
                <h1>Todo sobre Nosotras</h1>
            </section>

            {/* CONTENIDO PRINCIPAL */}
            <section style={{ display: 'flex', padding: '4rem', gap: '2rem' }}>
                <div style={{ flex: '1', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    <p>
                        Somos dos mujeres apasionadas por el mundo inmobiliario, con más de diez años de experiencia ayudando a personas a encontrar mucho más que una casa: su hogar.
                        Después de trabajar durante años en diferentes agencias, decidimos dar un paso valiente y crear Inmobiliaria CES, un proyecto con alma que pone en el centro a las personas. Aquí no hay prisas ni procesos fríos: te escuchamos, te entendemos y te acompañamos en cada paso del camino.
                        Sabemos lo que se siente al comprar o vender una vivienda. Por eso lo hacemos fácil, claro y con corazón. Apostamos por una inmobiliaria más humana, más cercana y más honesta.
                        Trabajamos contigo de tú a tú, sin tecnicismos vacíos ni promesas imposibles. Te explicamos todo con transparencia, resolvemos tus dudas con paciencia y celebramos contigo cuando llegamos al final del proceso. Porque si tú ganas, nosotras también.
                        Estamos demostrando que se puede hacer inmobiliaria con profesionalidad, pero también con empatía, sensibilidad y compromiso real. Estábamos artas de trabajar con el estilo de muchas agencias. Vender a cualquier cliente sin compromiso y una finalidad más allá de ganar dinero.
                        Defendemos furtemente nuestro estilo de trabajo, ya que creemos que si el cliente queda satisfecho es publicidad durante años. Nuestro objetivo es dar exactamente lo que busca a quien lo busca. De esta forma salimos ganando todos.
                        Bienvenida/o a CES.
                    </p>
                </div>
                <div style={{ flex: '1' }}>
                    <img src="/images/nosotras.jpg" alt="Nosotras" style={{ width: '100%', borderRadius: '1rem' }} />
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ backgroundColor: '#222', color: 'white', padding: '2rem', textAlign: 'center' }}>
                &copy; {new Date().getFullYear()} Inmobiliaria CES - Todos los derechos reservados
=======

import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import '../../css/estiloBase.css';
import '../../css/estiloPrivacidad.css';
import { route } from 'ziggy-js';


export default function Privacidad() {
    const { props } = usePage();
    const isAuthenticated = !!props?.auth?.user;

    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <div>
            <Head title="Privacidad - Inmobiliaria CES" />

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
            <h1>Nuestra política de privacidad</h1>
            <section>
                <div>
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
            </section>

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
>>>>>>> 3b768a7 (TFG Terminado y desplegado)
            </footer>
        </div>
    );
}
