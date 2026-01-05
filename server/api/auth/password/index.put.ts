import { prisma } from '~~/prisma/db';
import { Argon2id } from 'oslo/password';
import { z } from 'zod';

const routeSchema = z.object({
    password: z.string(),
});
export default defineEventHandler(async (event) => {
    const { password } = await readValidatedBody(event, routeSchema.parse);

    const hashedPassword = await new Argon2id().hash(password);

    const user = await prisma.user.update({
        where: { id: event.context.user.id },
        data: { password: hashedPassword },
    });

    if (!user) {
        throw createError({
            statusCode: 404,
            message: 'User not found',
        });
    }
});
