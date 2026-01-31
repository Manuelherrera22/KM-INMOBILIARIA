'use client'

import { useState } from 'react'

interface ContactFormProps {
    propertyId?: string
    propertyTitle?: string
    context?: 'LANDING' | 'PROPERTY'
}

export default function ContactForm({ propertyId, propertyTitle, context = 'LANDING' }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('LOADING')

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    propertyId,
                    message: propertyTitle
                        ? `Interés en: ${propertyTitle}. ${formData.message}`
                        : formData.message
                })
            })

            if (res.ok) {
                setStatus('SUCCESS')
                setFormData({ name: '', phone: '', email: '', message: '' })
            } else {
                setStatus('ERROR')
            }
        } catch (err) {
            console.error(err)
            setStatus('ERROR')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    if (status === 'SUCCESS') {
        return (
            <div className="animate-fade-up" style={{
                padding: '2rem', textAlign: 'center', border: '1px solid var(--primary)',
                background: 'rgba(212, 175, 55, 0.05)'
            }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>✨</span>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '0.5rem' }}>
                    Solicitud Recibida
                </h3>
                <p style={{ color: '#aaa' }}>
                    Su consulta ha llegado a nuestro Private Office. <br />
                    Un asesor se pondrá en contacto con usted en breve.
                </p>
                <button
                    onClick={() => setStatus('IDLE')}
                    style={{
                        marginTop: '1.5rem', background: 'transparent', border: 'none',
                        color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer'
                    }}
                >
                    Enviar otra consulta
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: context === 'LANDING' ? '2rem' : '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: context === 'LANDING' ? '1fr 1fr' : '1fr', gap: context === 'LANDING' ? '2rem' : '1rem' }}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={context === 'LANDING' ? "NOMBRE COMPLETO" : "Nombre"}
                    style={{
                        background: 'transparent', border: 'none', borderBottom: '1px solid #333',
                        padding: '1rem 0', color: '#fff', outline: 'none', fontFamily: 'var(--font-body)',
                        width: '100%'
                    }}
                    required
                    disabled={status === 'LOADING'}
                />
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={context === 'LANDING' ? "TELÉFONO" : "Teléfono"}
                    style={{
                        background: 'transparent', border: 'none', borderBottom: '1px solid #333',
                        padding: '1rem 0', color: '#fff', outline: 'none', fontFamily: 'var(--font-body)',
                        width: '100%'
                    }}
                    required
                    disabled={status === 'LOADING'}
                />
            </div>
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={context === 'LANDING' ? "CORREO ELECTRÓNICO" : "Email"}
                style={{
                    background: 'transparent', border: 'none', borderBottom: '1px solid #333',
                    padding: '1rem 0', color: '#fff', outline: 'none', fontFamily: 'var(--font-body)',
                    width: '100%'
                }}
                required
                disabled={status === 'LOADING'}
            />

            <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'LOADING'}
                style={{
                    marginTop: '1rem',
                    width: '100%',
                    padding: '1.5rem',
                    opacity: status === 'LOADING' ? 0.7 : 1,
                    cursor: status === 'LOADING' ? 'wait' : 'pointer',
                    border: context === 'PROPERTY' ? '1px solid #333' : 'none',
                    background: context === 'PROPERTY' ? 'transparent' : 'var(--primary)',
                    color: context === 'PROPERTY' ? '#fff' : '#000'
                }}
            >
                {status === 'LOADING' ? 'Enviando...' : (context === 'LANDING' ? 'Solicitar Consulta Privada' : 'Enviar Correo')}
            </button>

            {status === 'ERROR' && (
                <p style={{ color: 'red', textAlign: 'center', fontSize: '0.8rem' }}>Hubo un error al enviar. Intente nuevamente.</p>
            )}
        </form>
    )
}
