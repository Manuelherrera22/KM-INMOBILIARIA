import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const props = await prisma.property.findMany({
        where: { status: 'ACTIVE' },
        select: { title: true, images: true }
    })
    console.log(JSON.stringify(props, null, 2))
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
