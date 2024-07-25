import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const { tokenHash } = await readBody(event);
    
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