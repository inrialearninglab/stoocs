import { TimeSpan, createDate } from 'oslo';
import { sha256 }  from 'oslo/crypto';
import { encodeHex } from 'oslo/encoding';
import { generateIdFromEntropySize } from 'lucia';
import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const { email } = await readBody(event);
    
    // Invalidate all previous tokens
    await prisma.invitation.deleteMany({
        where: { email}
    })
    
    const alreadyRegistered = await prisma.user.findUnique({
        where: { email }
    });
    
    if (alreadyRegistered) {
        throw createError({
            statusCode: 400,
            message: 'User already registered'
        });
    }
    
    const tokenId = generateIdFromEntropySize(25);
    const tokenHash = encodeHex(await sha256(new TextEncoder().encode(tokenId)))
    
    const invitation = await prisma.invitation.create({
        data: {
            tokenHash,
            email,
            expiresAt: createDate(new TimeSpan(2, 'h'))
        }
    });
    
    return { invitation };
})
