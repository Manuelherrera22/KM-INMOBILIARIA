import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import CatalogFilters from '@/components/CatalogFilters'
import WhatsAppFloating from '@/components/WhatsAppFloating'

// Ensure we get fresh data
export const dynamic = 'force-dynamic'

async function getActiveProperties() {
    try {
        return await prisma.property.findMany({
            where: { status: 'ACTIVE' },
            orderBy: { createdAt: 'desc' },
            take: 20 // Limit to 20 for exclusivity as requested
        })
    } catch (error) {
        console.error(error)
        return []
    }
}

export default async function CatalogPage() {
    const properties = await getActiveProperties()

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '6rem', background: '#050505', color: '#fff' }}>
            {/* Nav */}
            <nav style={{
                position: 'fixed', top: 0, left: 0, width: '100%',
                padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100,
                background: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #111'
            }}>
                <Link href="/" style={{ color: '#fff', fontWeight: '800', letterSpacing: '0.05em', fontSize: '1.2rem', textDecoration: 'none' }}>KM.</Link>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/" style={{ color: '#ccc', fontSize: '0.9rem' }}>INICIO</Link>
                    <Link href="/propiedades" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600' }}>CATÁLOGO</Link>
                </div>
            </nav>

            {/* Header */}
            <div style={{
                padding: '10rem 1rem 4rem',
                textAlign: 'center',
                marginBottom: '2rem'
            }}>
                <h1 className="heading-lg animate-fade-up" style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Inversiones & Activos</h1>
                <p className="animate-fade-up animate-delay-100" style={{ color: '#888', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    Selección exclusiva. Máximo 20 propiedades activas.
                </p>
            </div>

            <div className="container" style={{ maxWidth: '1400px' }}>
                {/* Filters (Client Component) */}
                <div style={{ opacity: 0.9 }}>
                    {/* Filters (Client Component) */}
                    <CatalogFilters />
                </div>

                {properties.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#666' }}>
                        Inventario agotado. Contáctenos para lista de espera.
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '4rem' }}>
                        {properties.map((p: any, i: number) => (
                            <Link key={p.id} href={`/p/${p.id}`} className="glass-panel" style={{
                                display: 'flex', flexDirection: 'column', overflow: 'hidden',
                                textDecoration: 'none', color: 'inherit',
                                border: 'none', background: 'transparent',
                                animation: `fade-in-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
                                animationDelay: `${i * 100}ms`,
                                opacity: 0
                            }}>
                                {/* Huge High-Res Image */}
                                <div style={{ height: '500px', position: 'relative', marginBottom: '1.5rem', borderRadius: '4px', overflow: 'hidden' }}>
                                    <img
                                        src={`https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop`}
                                        alt="Luxury Property"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                                        className="hover-scale-img"
                                    />
                                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#000', color: '#fff', padding: '4px 10px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                        {p.type}
                                    </div>
                                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'var(--primary)', color: '#000', padding: '4px 10px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                        {p.status === 'ACTIVE' ? 'DISPONIBLE' : p.status}
                                    </div>
                                </div>

                                {/* Concise "Fintech" Data Grid */}
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#fff', maxWidth: '70%' }}>{p.title}</h3>
                                        <span style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(p.price)}
                                        </span>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid #222', paddingTop: '1rem' }}>
                                        <div>
                                            <span style={{ display: 'block', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>Ubicación</span>
                                            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>{p.address}</span>
                                        </div>
                                        <div>
                                            <span style={{ display: 'block', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>Metros</span>
                                            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>-- m²</span>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span style={{ display: 'block', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}> Dormitorios</span>
                                            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>--</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <WhatsAppFloating />
        </main>
    )
}
