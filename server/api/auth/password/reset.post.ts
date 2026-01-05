import { z } from 'zod';
import { prisma } from '~~/prisma/db';
import { Argon2id } from 'oslo/password';

const routeSchema = z.object({
    tokenHash: z.string(),
    newPassword: z.string(),
});

export default defineEventHandler(async (event) => {
    const { tokenHash, newPassword } = await readValidatedBody(event, routeSchema.parse);

    const resetToken = await prisma.passwordReset.findUnique({ where: { tokenHash } });
    if (!resetToken) {
        throw createError({
            status: 404,
            message: 'Token not found',
        });
    }
    if (resetToken.expiresAt < new Date()) {
        throw createError({
            status: 400,
            message: 'Token expired',
        });
    }

    const hashedPassword = await new Argon2id().hash(newPassword);

    const user = await prisma.user.update({
        where: { email: resetToken.email },
        data: { password: hashedPassword },
    });
});
