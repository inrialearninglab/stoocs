import { prisma } from '#shared/prisma/db';
import { z } from 'zod';

const routeSchema = z.object({
    sessionId: z.string(),
    guestId: z.string(),
    add: z.boolean(),
});
export default defineEventHandler(async (event) => {
    const { sessionId, guestId, add } = await readValidatedBody(event, routeSchema.parse);

    if (add) {
        return await addSession(guestId, sessionId);
    } else {
        return await removeSession(guestId, sessionId);
    }
});

async function addSession(guestId: string, sessionId: string) {
    const updatedUser = await prisma.user.update({
        where: { id: guestId },
        data: { moocSessions: { push: sessionId } },
    });

    if (!updatedUser) {
        throw createError({
            statusCode: 500,
            message: 'Failed to add guest to session.',
        });
    }

    return updatedUser;
}

async function removeSession(guestId: string, sessionId: string) {
    const user = await prisma.user.findUnique({
        where: { id: guestId },
        select: { moocSessions: true },
    });

    if (!user) throw createError({ statusCode: 404, message: 'Guest not found.' });

    const updatedSessions = user.moocSessions.filter((session) => session !== sessionId);
    const updatedUser = await prisma.user.update({
        where: { id: guestId },
        data: { moocSessions: updatedSessions },
    });

    if (!updatedUser) {
        throw createError({
            statusCode: 500,
            message: 'Failed to remove guest from session.',
        });
    }

    return updatedUser;
}
