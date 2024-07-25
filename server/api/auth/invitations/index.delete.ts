import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const { tokenHash } = await readBody(event);
    
    const invitation = await prisma.invitation.delete({
        where: { tokenHash }
    });
   
    if (!invitation) {
        throw createError({
            statusCode: 404,
            message: 'Invitation not found'
        });
    }
    
    return { invitation };
})