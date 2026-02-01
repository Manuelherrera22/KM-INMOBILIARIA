export default function PrivacyPage() {
    return (
        <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#ccc', fontFamily: 'var(--font-inter)' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '2rem' }}>Política de Privacidad</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>1. Introducción</h2>
                <p style={{ lineHeight: '1.6' }}>
                    En KM PLATAFORMA INMOBILIARIA, valoramos su privacidad y nos comprometemos a proteger sus datos personales.
                    Esta política explica cómo recopilamos, usamos y resguardamos su información cuando visita nuestro sitio web o utiliza nuestros servicios.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>2. Recopilación de Datos</h2>
                <p style={{ lineHeight: '1.6' }}>
                    Podemos recopilar información personal como su nombre, correo electrónico y número de teléfono cuando usted voluntariamente la proporciona a través de nuestros formularios de contacto.
                    También recopilamos datos técnicos automáticamente mediante cookies para mejorar su experiencia de navegación.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>3. Uso de la Información</h2>
                <p style={{ lineHeight: '1.6' }}>
                    Utilizamos sus datos para:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    <li>Procesar sus consultas inmobiliarias.</li>
                    <li>Mejorar la funcionalidad de nuestra plataforma.</li>
                    <li>Enviarle información relevante sobre propiedades (solo si ha dado su consentimiento).</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>4. Seguridad</h2>
                <p style={{ lineHeight: '1.6' }}>
                    Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado, la pérdida o la alteración.
                </p>
            </section>

            <p style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#666' }}>Última actualización: Enero 2026</p>
        </main>
    )
}
