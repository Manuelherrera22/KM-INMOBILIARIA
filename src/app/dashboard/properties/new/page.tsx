'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewPropertyPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        type: 'APARTMENT',
        address: '',
        description: ''
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch('/api/properties', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                router.push('/dashboard/properties')
            } else {
                alert('Error creating property')
            }
        } catch (err) {
            console.error(err)
            alert('Error creating property')
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        background: 'rgba(0,0,0,0.2)',
        border: '1px solid var(--card-border)',
        borderRadius: '8px',
        color: '#fff',
        marginBottom: '1rem',
        fontFamily: 'inherit'
    }

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-lg" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Nueva Propiedad</h1>

            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={labelStyle}>Título del Proyecto</label>
                        <input
                            name="title"
                            required
                            style={inputStyle}
                            placeholder="Ej: Apartamento Vista Mar"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Precio (USD)</label>
                        <input
                            name="price"
                            type="number"
                            required
                            style={inputStyle}
                            placeholder="250000"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={labelStyle}>Tipo de Inmueble</label>
                        <select name="type" style={inputStyle} onChange={handleChange}>
                            <option value="APARTMENT">Apartamento</option>
                            <option value="HOUSE">Casa</option>
                            <option value="COMMERCIAL">Comercial</option>
                            <option value="LAND">Terreno</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>Dirección</label>
                        <input
                            name="address"
                            style={inputStyle}
                            placeholder="Av. Balboa, PH..."
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Descripción / Copywriting</label>
                    <textarea
                        name="description"
                        rows={5}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        placeholder="Detalles que venden..."
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '1rem' }}
                >
                    {loading ? 'Guardando...' : 'Publicar Propiedad'}
                </button>

            </form>
        </div>
    )
}
