import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    try {
        const properties = await prisma.property.findMany({
            include: {
                metrics: true, // simplified fetch
            },
            orderBy: {
                createdAt: 'desc',
            },
        })
        return NextResponse.json(properties)
    } catch (error) {
        console.error('Failed to fetch properties:', error)
        return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { title, price, type, address, description, images } = body

        // Basic validation
        if (!title || !price || !type) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const property = await prisma.property.create({
            data: {
                title,
                price: parseFloat(price),
                type,
                address,
                description,
                images: images ? JSON.stringify(images) : '[]',
                status: 'ACTIVE', // Default to active for MVP
            },
        })

        return NextResponse.json(property, { status: 201 })
    } catch (error) {
        console.error('Failed to create property:', error)
        return NextResponse.json(
            { error: 'Failed to create property' },
            { status: 500 }
        )
    }
}
