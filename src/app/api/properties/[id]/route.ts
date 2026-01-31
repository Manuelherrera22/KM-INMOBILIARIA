import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        const property = await prisma.property.findUnique({
            where: { id },
        })

        if (!property) {
            return NextResponse.json({ error: 'Property not found' }, { status: 404 })
        }

        return NextResponse.json(property)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch property' }, { status: 500 })
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        const body = await request.json()
        // Extract updateable fields
        const { title, price, type, address, description, status } = body

        const updated = await prisma.property.update({
            where: { id },
            data: {
                title,
                price: price ? parseFloat(price) : undefined,
                type,
                address,
                description,
                status,
            },
        })

        return NextResponse.json(updated)
    } catch (error) {
        console.error('Update Error:', error)
        return NextResponse.json({ error: 'Failed to update property' }, { status: 500 })
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        await prisma.property.delete({
            where: { id },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete property' }, { status: 500 })
    }
}
