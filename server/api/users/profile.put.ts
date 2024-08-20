import { prisma } from '~/prisma/db';
import { z } from 'zod';

const routeSchema = z.object({
    email: z.string().email().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional()
});
export default defineEventHandler(async (event) => {
    const { email, firstname, lastname } = await readValidatedBody(event, routeSchema.parse);
    
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
    
    return user;
})