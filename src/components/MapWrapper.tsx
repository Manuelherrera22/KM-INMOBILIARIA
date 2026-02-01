"use client"

import dynamic from 'next/dynamic'

const PropertyMap = dynamic(() => import('./PropertyMap'), {
    ssr: false,
    loading: () => <div style={{ height: '100%', width: '100%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>Cargando Mapa...</div>
})

export default function MapWrapper({ properties }: { properties: any[] }) {
    return <PropertyMap properties={properties} />
}
