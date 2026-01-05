import { prisma } from '~~/prisma/db';
import { z } from 'zod';

const routeSchema = z.object({
    tokenHash: z.string(),
});
export default defineEventHandler(async (event) => {
    const { tokenHash } = await readValidatedBody(event, routeSchema.parse);

    const invitation = await prisma.invitation.delete({
        where: { tokenHash },
    });

    if (!invitation) {
        throw createError({
            statusCode: 404,
            message: 'Invitation not found',
        });
    }

    return invitation;
});
