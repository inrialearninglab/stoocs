import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addUserRole() {
    const ILLRole = await prisma.role.create({
        data: {
            name: 'ILL',
        },
    });
    await prisma.role.create({
        data: {
            name: 'Guest',
        },
    });

    const users = await prisma.user.findMany();

    for (const user of users) {
        await prisma.user.update({
            where: { id: user.id },
            data: {
                role: {
                    connect: { name: ILLRole.name },
                },
            },
        });
    }
}

addUserRole()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
