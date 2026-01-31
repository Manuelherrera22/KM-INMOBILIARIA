'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function EditPropertyPage() {
    const router = useRouter()
    const params = useParams()
    const id = params.id as string

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        type: 'APARTMENT',
        address: '',
        description: '',
        status: 'ACTIVE'
    })
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    // Fetch existing data
    useEffect(() => {
        if (!id) return
        fetch(`/api/properties/${id}`)
            .then(res => res.json())
            .then(data => {
                setFormData({
                    title: data.title,
                    price: data.price.toString(),
                    type: data.type,
                    address: data.address || '',
                    description: data.description || '',
                    status: data.status
                })
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [id])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)

        try {
            const res = await fetch(`/api/properties/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                router.push('/dashboard/properties')
            } else {
                alert('Error actualizando propiedad')
            }
        } catch (err) {
            console.error(err)
            alert('Error actualizando propiedad')
        } finally {
            setSaving(false)
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

    if (loading) return <div style={{ padding: '2rem', color: 'var(--text-muted)' }}>Cargando datos...</div>

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-lg" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Editar Propiedad</h1>

            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={labelStyle}>Título del Proyecto</label>
                        <input
                            name="title"
                            required
                            style={inputStyle}
                            value={formData.title}
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
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={labelStyle}>Tipo</label>
                        <select name="type" style={inputStyle} value={formData.type} onChange={handleChange}>
                            <option value="APARTMENT">Apartamento</option>
                            <option value="HOUSE">Casa</option>
                            <option value="COMMERCIAL">Comercial</option>
                            <option value="LAND">Terreno</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>Estado</label>
                        <select name="status" style={inputStyle} value={formData.status} onChange={handleChange}>
                            <option value="DRAFT">Borrador</option>
                            <option value="ACTIVE">En Venta (Activo)</option>
                            <option value="UNDER_OFFER">Bajo Oferta</option>
                            <option value="SOLD">Vendido / Cerrado</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>Dirección</label>
                        <input
                            name="address"
                            style={inputStyle}
                            value={formData.address}
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
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    disabled={saving}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '1rem' }}
                >
                    {saving ? 'Guardando Cambios...' : 'Actualizar Propiedad'}
                </button>

            </form>
        </div>
    )
}
