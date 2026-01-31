'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type Property = {
    id: string
    title: string
    price: number
    status: string
    type: string
    views?: number
}

export default function PropertiesPage() {
    const [properties, setProperties] = useState<Property[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/properties')
            .then(res => res.json())
            .then(data => {
                setProperties(data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>Mis Propiedades</h1>
                    <p style={{ color: '#888', letterSpacing: '0.05em' }}>Gestiona tu inventario exclusivo.</p>
                </div>
                <Link href="/dashboard/properties/new" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
                    + Nueva Propiedad
                </Link>
            </div>

            {loading ? (
                <div style={{ color: '#666' }}>Cargando catálogo...</div>
            ) : properties.length === 0 ? (
                <div style={{ padding: '4rem', textAlign: 'center', border: '1px solid #222', background: '#0a0a0a' }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: '#ccc', fontFamily: 'var(--font-heading)' }}>No hay propiedades en el inventario.</p>
                    <Link href="/dashboard/properties/new" className="btn btn-primary">
                        Crear Primera Propiedad
                    </Link>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {properties.map(p => (
                        <PropertyCard key={p.id} property={p} />
                    ))}
                </div>
            )}
        </div>
    )
}

function PropertyCard({ property }: { property: Property }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: '#0a0a0a', border: '1px solid #222' }}>
            <div style={{ height: '220px', position: 'relative' }}>
                <img
                    src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop`}
                    alt="Property Thumbnail"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #0a0a0a 0%, transparent 80%)' }}></div>
                {/* Status Badge */}
                <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: property.status === 'ACTIVE' ? 'var(--primary)' : '#333',
                    color: property.status === 'ACTIVE' ? '#000' : '#888',
                    padding: '4px 8px',
                    fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
                }}>
                    {property.status}
                </div>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', color: '#fff' }}>{property.title}</h3>
                <p style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(property.price)}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #222', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{property.type}</span>
                    <span style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{property.views || 0} Visitas</span>
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                    <Link href={`/dashboard/properties/${property.id}/edit`} className="btn" style={{ flex: 1, color: '#fff', border: '1px solid #333', fontSize: '0.75rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Editar
                    </Link>
                    <Link href={`/p/${property.id}`} className="btn" style={{ flex: 1, color: 'var(--primary)', border: '1px solid var(--primary)', fontSize: '0.75rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Ver Page
                    </Link>
                </div>
            </div>
        </div>
    )
}
