import { prisma } from '~~/prisma/db';

export default defineEventHandler(async (event) => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            firstname: true,
            lastname: true,
            rolename: true,
            moocSessions: true,
            isAdmin: true,
        },
        orderBy: {
            isAdmin: 'desc',
        },
    });

    if (!users) {
        throw createError({
            statusCode: 404,
            message: 'No users found',
        });
    }

    return users;
});
