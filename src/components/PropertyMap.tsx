"use client"

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// Fix generic Leaflet icon missing issues
const icon = L.divIcon({
    className: 'custom-icon',
    html: `<div style="
    background-color: #10B981;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
  "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
})

function MapController() {
    const map = useMap()
    useEffect(() => {
        // Force invalidation to fix render issues in some containers
        map.invalidateSize()
    }, [map])
    return null
}

export default function PropertyMap({ properties }: { properties: any[] }) {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <div style={{ height: '100%', width: '100%', background: '#111' }} />

    // Fallback coordinates for demo if DB lacks data
    // Distribute around La Carolina: -0.182, -78.484
    const getCoords = (p: any, index: number) => {
        if (p.latitude && p.longitude) return [p.latitude, p.longitude]

        // Deterministic pseudo-random placement for demo
        const offsetLat = (index % 3 === 0 ? 0.005 : -0.005) * (index + 1) * 0.5
        const offsetLng = (index % 2 === 0 ? 0.004 : -0.004) * (index + 1) * 0.5

        return [-0.182 + offsetLat * 0.01, -78.484 + offsetLng * 0.01]
    }

    return (
        <MapContainer
            center={[-0.182, -78.484]}
            zoom={14}
            style={{ height: '100%', width: '100%', background: '#000' }}
            scrollWheelZoom={false}
        >
            <MapController />
            {/* CartoDB Dark Matter - Premium Dark Theme */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {properties.map((p, i) => {
                const coords = getCoords(p, i) as [number, number]
                return (
                    <Marker
                        key={p.id}
                        position={coords}
                        icon={icon}
                        eventHandlers={{
                            click: () => router.push(`/p/${p.id}`),
                            mouseover: (e) => e.target.openPopup(),
                            mouseout: (e) => e.target.closePopup()
                        }}
                    >
                        <Popup className="custom-popup">
                            <div style={{ color: '#000', padding: '5px' }}>
                                <strong style={{ display: 'block', fontSize: '14px' }}>{p.title}</strong>
                                <span style={{ fontSize: '12px', color: '#666' }}>
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(p.price)}
                                </span>
                            </div>
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}
