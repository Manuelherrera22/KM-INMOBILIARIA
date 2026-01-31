import { NextResponse } from 'next/server'

// Verify token from Meta App Dashboard
const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN || 'kminmo_token_123'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const mode = searchParams.get('hub.mode')
    const token = searchParams.get('hub.verify_token')
    const challenge = searchParams.get('hub.challenge')

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        return new NextResponse(challenge, { status: 200 })
    }

    return new NextResponse('Forbidden', { status: 403 })
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        console.log('Received Meta Lead:', body)

        // Logic to insert into Lead table goes here
        // await prisma.lead.create(...)

        return NextResponse.json({ received: true })
    } catch (error) {
        console.error('Meta Webhook Error:', error)
        return NextResponse.json({ error: 'Server Error' }, { status: 500 })
    }
}
