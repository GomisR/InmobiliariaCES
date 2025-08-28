import React, { useEffect } from 'react';

export default function Layout({ children, cssFile }) {
    useEffect(() => {
        if (cssFile) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `/css/${cssFile}.css`; //css en public/css
            link.id = 'dynamic-style';

            // Elimina estilos anteriores si existen
            const existe = document.getElementById('dynamic-style');
            if (existe) {
                existe.remove();
            }

            document.head.appendChild(link);
        }
    }, [cssFile]);

    return <>{children}</>;
}
