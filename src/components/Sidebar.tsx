'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
    { name: 'Inicio', href: '/dashboard', icon: '🏠' },
    { name: 'Propiedades', href: '/dashboard/properties', icon: '🏢' },
    { name: 'CRM Leads', href: '/dashboard/leads', icon: '👥' },
    { name: 'Configuración', href: '/dashboard/settings', icon: '⚙️' },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside style={{
            width: '280px',
            height: '100vh',
            position: 'fixed',
            background: '#080808',
            borderRight: '1px solid #222',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 50
        }}>
            <div style={{ marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.02em', color: '#fff' }}>
                    KM<span style={{ color: 'var(--primary)' }}>.</span>
                </h1>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '0.8rem 1rem',
                                borderRadius: '4px',
                                color: isActive ? 'var(--primary)' : '#666',
                                background: isActive ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                                borderLeft: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                                fontWeight: isActive ? 600 : 400,
                                transition: 'all 0.2s ease',
                                fontSize: '0.9rem',
                                letterSpacing: '0.05em'
                            }}
                        >
                            <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                            {item.name}
                        </Link>
                    )
                })}
                <Link
                    href="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '0.8rem 1rem',
                        borderRadius: '4px',
                        color: '#666',
                        background: 'transparent',
                        borderLeft: '2px solid transparent',
                        fontWeight: 400,
                        transition: 'all 0.2s ease',
                        fontSize: '0.9rem',
                        letterSpacing: '0.05em',
                        marginTop: 'auto'
                    }}
                >
                    <span style={{ fontSize: '1.1rem' }}>🌐</span>
                    Volver al Sitio
                </Link>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid #222' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#222' }}></div>
                    <div>
                        <p style={{ fontSize: '0.85rem', color: '#fff' }}>Admin</p>
                        <p style={{ fontSize: '0.7rem', color: '#666' }}>Propietario</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}
