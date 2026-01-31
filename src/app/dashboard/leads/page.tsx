'use client'

import { useEffect, useState } from 'react'

type Lead = {
    id: string
    name: string
    email: string | null
    phone: string | null
    status: string
    property?: {
        title: string
    }
    createdAt: string
}

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/leads')
            .then(res => res.json())
            .then(data => {
                setLeads(data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'NEW': return { border: '1px solid #fff', color: '#fff' }
            case 'CONTACTED': return { border: '1px solid var(--primary)', color: 'var(--primary)' }
            case 'CLOSED': return { background: 'var(--primary)', color: '#000', border: '1px solid var(--primary)' }
            default: return { border: '1px solid #444', color: '#888' }
        }
    }

    return (
        <div>
            <div style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>Gestión de Leads</h1>
                <p style={{ color: '#666', letterSpacing: '0.05em' }}>Seguimiento de clientes potenciales de alto valor.</p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.9rem' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #333', textAlign: 'left' }}>
                            <th style={{ padding: '1.5rem 0', fontWeight: '400', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Nombre</th>
                            <th style={{ padding: '1.5rem 0', fontWeight: '400', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Contacto</th>
                            <th style={{ padding: '1.5rem 0', fontWeight: '400', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Interés</th>
                            <th style={{ padding: '1.5rem 0', fontWeight: '400', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Estado</th>
                            <th style={{ padding: '1.5rem 0', fontWeight: '400', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan={5} style={{ padding: '4rem', textAlign: 'center', color: '#666' }}>Cargando leads...</td></tr>
                        ) : leads.length === 0 ? (
                            <tr><td colSpan={5} style={{ padding: '4rem', textAlign: 'center', color: '#666' }}>No hay leads registrados aún.</td></tr>
                        ) : (
                            leads.map(lead => (
                                <tr key={lead.id} style={{ borderBottom: '1px solid #111' }}>
                                    <td style={{ padding: '1.5rem 0', fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>{lead.name}</td>
                                    <td style={{ padding: '1.5rem 0', color: '#ccc' }}>
                                        <div style={{ marginBottom: '0.25rem' }}>{lead.email}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#666' }}>{lead.phone}</div>
                                    </td>
                                    <td style={{ padding: '1.5rem 0', color: 'var(--primary)' }}>
                                        {lead.property?.title || 'General'}
                                    </td>
                                    <td style={{ padding: '1.5rem 0' }}>
                                        <span style={{
                                            ...getStatusStyle(lead.status),
                                            padding: '4px 12px',
                                            fontSize: '0.7rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            fontWeight: '600'
                                        }}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.5rem 0', color: '#666', fontSize: '0.8rem' }}>
                                        {new Date(lead.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
