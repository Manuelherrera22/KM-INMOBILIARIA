import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/ContactForm'

// Force dynamic rendering for up-to-date data
export const dynamic = 'force-dynamic'

// SEO Metadata Generator
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const property = await prisma.property.findUnique({ where: { id } })

    if (!property) return { title: 'Propiedad No Encontrada' }

    return {
        title: `${property.title} | KMINMOBILIARIA`,
        description: `Propiedad exclusiva en venta. ${property.address}. Precio: $${property.price}`,
        openGraph: {
            title: property.title,
            description: 'Descubre esta propiedad exclusiva en KMINMOBILIARIA.',
            images: ['/og-image-placeholder.jpg'], // In a real app, this would be the property image
        }
    }
}

async function getProperty(id: string) {
    try {
        return await prisma.property.findUnique({
            where: { id },
            include: { metrics: true }
        })
    } catch (error) {
        return null
    }
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const property = await getProperty(id)

    if (!property) return notFound()

    return (
        <main style={{ background: '#050505', minHeight: '100vh', color: '#F5F5F0' }}>
            {/* Navigation Override (Minimal) */}
            <nav style={{
                position: 'absolute', top: 0, left: 0, width: '100%',
                padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10
            }}>
                <Link href="/" style={{ fontWeight: 'bold', letterSpacing: '0.1em' }}>KM.</Link>
                <Link href="/propiedades" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid var(--primary)' }}>
                    &larr; Volver a la Colección
                </Link>
            </nav>

            {/* 1. HERO: Full Screen Immersive */}
            <section style={{
                height: '80vh',
                background: '#111',
                display: 'flex',
                alignItems: 'end',
                padding: '0 0 4rem 2rem',
                position: 'relative',
                borderBottom: '1px solid #222'
            }}>
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
                        alt="Property Hero"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #050505 0%, transparent 100%)' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0' }}>
                    <span style={{
                        background: 'var(--primary)', color: '#000', padding: '4px 12px',
                        fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600'
                    }}>
                        {property.type}
                    </span>
                    <h1 className="animate-fade-up" style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        lineHeight: '1',
                        marginTop: '1rem',
                        maxWidth: '900px'
                    }}>
                        {property.title}
                    </h1>
                    <p className="animate-fade-up animate-delay-100" style={{
                        fontSize: '1.25rem', color: '#888', marginTop: '1rem',
                        fontFamily: 'var(--font-heading)', fontStyle: 'italic'
                    }}>
                        {property.address}
                    </p>
                </div>
            </section>

            {/* 2. EDITORIAL CONTENT LAYOUT */}
            <div className="container" style={{ padding: '6rem 2rem', maxWidth: '1400px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '6rem' }}>

                    {/* Left Column: Narrative & Details */}
                    <div>
                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Sobre la Propiedad</h2>
                            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem' }}>
                                {property.description || "Esta propiedad representa una oportunidad única en el mercado. Diseñada para aquellos que valoran la privacidad, el diseño y la ubicación estratégica. Cada detalle ha sido considerado para ofrecer una experiencia de vida inigualable."}
                            </p>
                            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}>
                                La arquitectura se integra perfectamente con el entorno, creando espacios que invitan tanto a la relajación como al entretenimiento. Una verdadera joya en nuestra colección exclusiva.
                            </p>
                        </div>

                        {/* Visual Gallery Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '4rem' }}>
                            <div style={{ height: '300px', overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" alt="Interior 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ height: '300px', overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop" alt="Interior 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ gridColumn: 'span 2', height: '400px', overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" alt="Exterior Pool" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Specs Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', padding: '2rem', border: '1px solid #222' }}>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Precio</span>
                                <span style={{ fontSize: '1.5rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(property.price)}
                                </span>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Estado</span>
                                <span style={{ fontSize: '1.2rem', color: '#fff' }}>
                                    {property.status === 'ACTIVE' ? 'Disponible' : property.status}
                                </span>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>ID Referencia</span>
                                <span style={{ fontSize: '1.2rem', color: '#fff' }}>#{property.id.slice(0, 8).toUpperCase()}</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Visitas</span>
                                <span style={{ fontSize: '1.2rem', color: '#fff' }}>{property.metrics.reduce((acc: number, curr: any) => acc + curr.views, 0)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Inquiry Form */}
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'sticky', top: '2rem' }}>
                            <div style={{ padding: '3rem', border: '1px solid var(--primary)', background: '#0a0a0a' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Interesado?</h3>
                                <p style={{ color: '#888', marginBottom: '2rem', fontSize: '0.9rem' }}>
                                    Solicite un dossier privado o agende una visita exclusiva.
                                </p>

                                <a
                                    href={`https://wa.me/593962725040?text=Hola,%20me%20interesa%20la%20propiedad%20${property.title}`}
                                    target="_blank"
                                    className="btn btn-primary"
                                    style={{ width: '100%', marginBottom: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}
                                >
                                    Contactar por WhatsApp
                                </a>

                                <div style={{ textAlign: 'center', margin: '1.5rem 0', color: '#444' }}>— O —</div>

                                <ContactForm context="PROPERTY" propertyId={property.id} propertyTitle={property.title} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
