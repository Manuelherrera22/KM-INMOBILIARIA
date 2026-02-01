"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        // Check local storage
        const consent = localStorage.getItem('km_cookie_consent')
        if (!consent) {
            setShow(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('km_cookie_consent', 'true')
        setShow(false)
    }

    if (!show) return null

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            maxWidth: '400px',
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #333',
            padding: '1.5rem',
            borderRadius: '12px',
            zIndex: 9999,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            animation: 'fade-in-up 0.5s ease-out'
        }}>
            <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>Su Privacidad</h4>
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                Utilizamos cookies para asegurar que tenga la mejor experiencia en nuestra plataforma "Premium".
                Al continuar navegando, acepta nuestra <Link href="/privacidad" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Política de Privacidad</Link>.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                    onClick={handleAccept}
                    style={{
                        flex: 1,
                        background: 'var(--primary)',
                        color: '#000',
                        border: 'none',
                        padding: '0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Aceptar
                </button>
                <button
                    onClick={() => setShow(false)}
                    style={{
                        flex: 1,
                        background: 'transparent',
                        color: '#888',
                        border: '1px solid #333',
                        padding: '0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                    }}
                >
                    Cerrar
                </button>
            </div>
        </div>
    )
}
