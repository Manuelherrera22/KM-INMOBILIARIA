import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding Luxury Inventory with Real Images...')

    // Clear existing to avoid duplicates
    await prisma.property.deleteMany({})

    const properties = [
        {
            title: "Penthouse The Grand | La Carolina",
            description: "Vista 360 al Parque. Acabados importados de Italia. Ascensor directo.",
            price: 450000,
            address: "Av. República y Eloy Alfaro",
            type: "APARTMENT",
            status: "ACTIVE",
            interestCount: 42,
            latitude: -0.1820,
            longitude: -78.4840,
            images: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Mansion Glass House | Cumbayá",
            description: "Arquitectura invisible. Piscina infinita. 2000m2 de terreno.",
            price: 1200000,
            address: "Urb. Jacarandá",
            type: "HOUSE",
            status: "ACTIVE",
            interestCount: 18,
            latitude: -0.1980,
            longitude: -78.4230,
            images: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Loft Industrial | Guápulo",
            description: "Historia y Modernidad. Doble altura. Vista al valle.",
            price: 280000,
            address: "Camino de Orellana",
            type: "APARTMENT",
            status: "ACTIVE",
            interestCount: 35,
            latitude: -0.2050,
            longitude: -78.4720,
            images: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
        }
    ]

    for (const p of properties) {
        // Upsert to update images if exists or create new
        const exists = await prisma.property.findFirst({ where: { title: p.title } })
        if (exists) {
            await prisma.property.update({
                where: { id: exists.id },
                data: p
            })
        } else {
            await prisma.property.create({ data: p })
        }
    }

    console.log('Seeding complete. Images Updated.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
