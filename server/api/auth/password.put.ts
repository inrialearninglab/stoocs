import { prisma } from '~/prisma/db';
import { Argon2id } from 'oslo/password';

export default defineEventHandler(async (event) => {
    const { password } = await readBody(event);
    
    const hashedPassword = await new Argon2id().hash(password);
    
    const user = await prisma.user.update({
        where: { id: event.context.user.id },
        data: { password: hashedPassword }
    });
    
    if (!user) {
        throw createError({
            statusCode: 404,
            message: 'User not found'
        });
    }
})