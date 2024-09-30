import { createDate, TimeSpan } from 'oslo';
import { sha256 } from 'oslo/crypto';
import { encodeHex } from 'oslo/encoding';
import { generateIdFromEntropySize } from 'lucia';
import { prisma } from '~/prisma/db';
import { z } from 'zod';

const routeSchema = z.object({
    email: z.string().email(),
    isGuest: z.boolean()
});

export default defineEventHandler(async (event) => {
    const { email, isGuest } = await readValidatedBody(event, routeSchema.parse);

    // Invalidate all previous tokens
    await prisma.invitation.deleteMany({
        where: { email }
    })

    const alreadyRegistered = await prisma.user.findUnique({
        where: { email }
    })
;
    if (alreadyRegistered) {
        throw createError({
            statusCode: 400,
            message: 'User already registered'
        });
    }

    const tokenId = generateIdFromEntropySize(25);
    const tokenHash = encodeHex(await sha256(new TextEncoder().encode(tokenId)))

    return prisma.invitation.create({
        data: {
            tokenHash,
            email,
            isGuest,
            expiresAt: createDate(new TimeSpan(2, 'd'))
        }
    });
})
