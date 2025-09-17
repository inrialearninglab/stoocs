import { prisma } from '#shared/prisma/db';

export default defineEventHandler(async (event) => {
    const invitations = await prisma.invitation.findMany();

    if (!invitations) {
        throw createError({
            statusCode: 500,
            message: 'No invitations found',
        });
    }

    return invitations;
});
