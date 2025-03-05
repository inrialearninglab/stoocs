import { prisma } from '~/prisma/db';
import { z } from 'zod';
import { encodeHex } from 'oslo/encoding';
import { sha256 } from 'oslo/crypto';

const routeSchema = z.object({
    email: z.string().email(),
});
export default defineEventHandler(async (event) => {
    const { email } = await readValidatedBody(event, routeSchema.parse);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return;
    }

    // Delete all previous password reset tokens
    await prisma.passwordReset.deleteMany({ where: { email } });

    const tokenId = await generateIdFromEntropySize(25);
    const tokenHash = encodeHex(await sha256(new TextEncoder().encode(tokenId)));
    await prisma.passwordReset.create({
        data: {
            tokenHash,
            email,
            expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
        },
    });

    console.log('reset password', email, tokenHash);
});
