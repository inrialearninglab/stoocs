import { prisma } from '~/prisma/db';
import { z } from 'zod';

const routeSchema = z.object({
    tokenHash: z.string()
})
export default defineEventHandler(async (event) => {
    const { tokenHash } = await readValidatedBody(event, routeSchema.parse);
    
    if (!tokenHash) {
        throw createError({
            statusCode: 400,
            message: 'Missing token'
        });
    }
    
    const invitation = await prisma.invitation.findUnique({
        where: { tokenHash }
    });
    
    if (!invitation) {
        await sendRedirect(event, '/', 302)
        return;
    }
    
    return { email: invitation.email };
})