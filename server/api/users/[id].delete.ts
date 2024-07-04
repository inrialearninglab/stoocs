import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    
    const user = await prisma.user.delete({
        where: { id }
    });
    
    if (!user) {
        throw createError({
            statusCode: 404,
            message: 'User not found'
        });
    }
    
    return { user };
});