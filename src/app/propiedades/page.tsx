import { prisma } from '@/lib/prisma'
import Link from 'next/link'

// Ensure we get fresh data
export const dynamic = 'force-dynamic'

async function getActiveProperties() {
    try {
        return await prisma.property.findMany({
            where: { status: 'ACTIVE' },
            orderBy: { createdAt: 'desc' },
            include: { metrics: true }
        })
    } catch (error) {
        console.error(error)
        return []
    }
}

export default async function CatalogPage() {
    const properties = await getActiveProperties()

    return (
        <main style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
            {/* Header */}
            <div style={{
                padding: '10rem 1rem 6rem',
                background: 'radial-gradient(circle at top center, #1e293b 0%, #0f172a 100%)',
                textAlign: 'center',
                marginBottom: '4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '500px', background: 'radial-gradient(ellipse, rgba(16,185,129,0.15), transparent 70%)', pointerEvents: 'none' }}></div>

                <h1 className="heading-lg animate-fade-up" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Catálogo Exclusivo</h1>
                <p className="animate-fade-up animate-delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                    Explora nuestra colección de inmuebles verificados.
                </p>
            </div>

            <div className="container">
                {/* Filters Placeholder */}
                <div className="glass-panel" style={{
                    display: 'inline-flex', gap: '0.5rem', padding: '0.5rem', borderRadius: '99px',
                    marginBottom: '4rem', left: '50%', position: 'relative', transform: 'translateX(-50%)'
                }}>
                    <span className="btn" style={{ background: '#10b981', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '99px' }}>Todos</span>
                    <span className="btn" style={{ background: 'transparent', color: 'var(--text-muted)', padding: '0.5rem 1.5rem' }}>Apartamentos</span>
                    <span className="btn" style={{ background: 'transparent', color: 'var(--text-muted)', padding: '0.5rem 1.5rem' }}>Casas</span>
                </div>

                {properties.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                        No hay propiedades publicadas en este momento.
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
                        {properties.map((p, i) => (
                            <Link key={p.id} href={`/p/${p.id}`} className="glass-panel" style={{
                                display: 'flex', flexDirection: 'column', overflow: 'hidden',
                                textDecoration: 'none', color: 'inherit',
                                animation: `fade-in-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
                                animationDelay: `${i * 100}ms`,
                                opacity: 0,
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                {/* Cover Image Placeholder */}
                                <div style={{ height: '260px', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', position: 'relative' }}>
                                    <span style={{ opacity: 0.3, letterSpacing: '2px' }}>IMAGEN DEL PROYECTO</span>
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)' }}></div>
                                </div>

                                <div style={{ padding: '2rem', flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', lineHeight: '1.2' }}>{p.title}</h3>
                                    </div>

                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem' }}>
                                        {p.address || 'Ubicación no disponible'}
                                    </p>

                                    <div style={{ marginTop: 'auto', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>
                                            {p.type}
                                        </span>
                                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', letterSpacing: '-0.02em' }}>
                                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(p.price)}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
