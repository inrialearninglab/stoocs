import { prisma } from '#shared/prisma/db';
import { z } from 'zod';

const routeSchema = z.object({
    sessionId: z.string(),
    email: z.string(),
    add: z.boolean(),
});
export default defineEventHandler(async (event) => {
    const { sessionId, email, add } = await readValidatedBody(event, routeSchema.parse);

    if (add) {
        return await addPendingGuest(email, sessionId);
    } else {
        return await removePendingGuest(email, sessionId);
    }
});

async function addPendingGuest(email: string, sessionId: string) {
    const updatedInvitation = await prisma.invitation.update({
        where: { email },
        data: { moocSessions: { push: sessionId } },
    });

    if (!updatedInvitation) {
        throw createError({
            statusCode: 500,
            message: 'Failed to add pending guest to session.',
        });
    }

    return updatedInvitation;
}

async function removePendingGuest(email: string, sessionId: string) {
    const invitation = await prisma.invitation.findUnique({
        where: { email },
        select: { moocSessions: true },
    });

    if (!invitation) throw createError({ statusCode: 404, message: 'Pending guest not found.' });

    const updatedSessions = invitation.moocSessions.filter((session) => session !== sessionId);
    const updatedInvitation = await prisma.invitation.update({
        where: { email },
        data: { moocSessions: updatedSessions },
    });

    if (!updatedInvitation) {
        throw createError({
            statusCode: 500,
            message: 'Failed to remove pending guest from session.',
        });
    }

    return updatedInvitation;
}
