'use client'

import { useState } from 'react'

export default function SettingsPage() {
    const [profile, setProfile] = useState({
        name: 'Admin Demo',
        email: 'admin@kminmobiliaria.com',
        phone: '+507 6000-0000'
    })

    // Mock save
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Configuración guardada (Simulación)')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        background: 'rgba(0,0,0,0.2)',
        border: '1px solid var(--card-border)',
        borderRadius: '8px',
        color: '#fff',
        marginBottom: '1rem'
    }

    return (
        <div style={{ maxWidth: '600px' }}>
            <h1 className="heading-lg" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Configuración</h1>

            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#fff' }}>Perfil del Broker</h2>
                <form onSubmit={handleSave}>
                    <div>
                        <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Nombre Completo</label>
                        <input name="name" value={profile.name} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                        <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email Corporativo</label>
                        <input name="email" value={profile.email} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                        <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Teléfono / WhatsApp</label>
                        <input name="phone" value={profile.phone} onChange={handleChange} style={inputStyle} />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                </form>
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#fff' }}>Sistema</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Moneda Base</span>
                    <span style={{ fontWeight: 'bold' }}>USD ($)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Versión del Sistema</span>
                    <span style={{ fontSize: '0.8rem', background: '#334155', padding: '2px 8px', borderRadius: '4px' }}>v1.0.2 Beta</span>
                </div>
            </div>
        </div>
    )
}
