export default function CookiesPage() {
    return (
        <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#ccc', fontFamily: 'var(--font-inter)' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '2rem' }}>Política de Cookies</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>1. ¿Qué son las Cookies?</h2>
                <p style={{ lineHeight: '1.6' }}>
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.
                    Son ampliamente utilizadas para hacer que los sitios funcionen de manera eficiente y proporcionar información a los propietarios del sitio.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>2. Tipos de Cookies que Usamos</h2>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    <li><strong>Esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
                    <li><strong>Analíticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio (ej. Google Analytics).</li>
                    <li><strong>Funcionales:</strong> Permiten recordar sus preferencias (como el idioma o la región).</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>3. Gestión de Cookies</h2>
                <p style={{ lineHeight: '1.6' }}>
                    Puede controlar y/o eliminar las cookies según desee a través de la configuración de su navegador.
                    Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de este sitio web.
                </p>
            </section>

            <p style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#666' }}>Última actualización: Enero 2026</p>
        </main>
    )
}
