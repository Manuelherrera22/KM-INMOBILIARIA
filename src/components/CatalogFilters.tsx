"use client"

import { useState } from 'react'

export default function CatalogFilters({ onFilterChange }: { onFilterChange?: (filters: any) => void }) {
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        minM2: '',
        bedrooms: '',
        type: ''
    })

    const handleChange = (key: string, value: string) => {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)
        if (onFilterChange) onFilterChange(newFilters)
    }

    return (
        <div className="glass-panel" style={{
            padding: '1.5rem',
            marginBottom: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'end',
            background: '#0a0a0a',
            border: '1px solid #222'
        }}>
            {/* Price */}
            <div style={{ display: 'flex', gap: '1rem', flex: 1, minWidth: '300px' }}>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Precio Min</label>
                    <input
                        type="number"
                        placeholder="0"
                        className="input-field"
                        onChange={(e) => handleChange('minPrice', e.target.value)}
                        style={{ background: '#111', border: '1px solid #333', color: '#fff', width: '100%', padding: '0.8rem' }}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Precio Max</label>
                    <input
                        type="number"
                        placeholder="Sin límite"
                        className="input-field"
                        onChange={(e) => handleChange('maxPrice', e.target.value)}
                        style={{ background: '#111', border: '1px solid #333', color: '#fff', width: '100%', padding: '0.8rem' }}
                    />
                </div>
            </div>

            {/* Bedrooms */}
            <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Dormitorios</label>
                <select
                    onChange={(e) => handleChange('bedrooms', e.target.value)}
                    style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '0.8rem', minWidth: '150px' }}
                >
                    <option value="">Cualquiera</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                </select>
            </div>

            {/* Type */}
            <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Propósito</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => handleChange('type', 'VIVIENDA')}
                        style={{
                            padding: '0.8rem 1.5rem',
                            border: filters.type === 'VIVIENDA' ? '1px solid var(--primary)' : '1px solid #333',
                            color: filters.type === 'VIVIENDA' ? 'var(--primary)' : '#888',
                            background: 'transparent',
                            cursor: 'pointer'
                        }}>
                        Vivienda
                    </button>
                    <button
                        onClick={() => handleChange('type', 'INVERSION')}
                        style={{
                            padding: '0.8rem 1.5rem',
                            border: filters.type === 'INVERSION' ? '1px solid var(--primary)' : '1px solid #333',
                            color: filters.type === 'INVERSION' ? 'var(--primary)' : '#888',
                            background: 'transparent',
                            cursor: 'pointer'
                        }}>
                        Inversión
                    </button>
                </div>
            </div>
        </div>
    )
}
