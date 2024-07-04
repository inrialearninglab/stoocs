import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const { email, firstname, lastname } = await readBody(event);
    
    const user = await prisma.user.update({
        where: { id: event.context.user.id },
        data: { email, firstname, lastname }
    });
    
    if (!user) {
        throw createError({
            statusCode: 404,
            message: 'User not found'
        });
    }
    
    return { user };
})