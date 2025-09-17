import { prisma } from '#shared/prisma/db';
import { z } from 'zod';
import { isWithinExpirationDate } from 'oslo';

const routeSchema = z.object({
    tokenHash: z.string(),
});
export default defineEventHandler(async (event) => {
    const { tokenHash } = await readValidatedBody(event, routeSchema.parse);

    const invitation = await prisma.invitation.findUnique({
        where: { tokenHash },
    });

    if (!invitation || !isWithinExpirationDate(invitation.expiresAt)) {
        throw createError({
            statusCode: 404,
            message: 'Invitation not found or expired',
        });
    }

    return { email: invitation.email };
});
