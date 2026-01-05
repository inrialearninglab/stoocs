import { createDate, TimeSpan } from 'oslo';
import { sha256 } from 'oslo/crypto';
import { encodeHex } from 'oslo/encoding';
import { prisma } from '~~/prisma/db';
import { z } from 'zod';
import Invitation from '#shared/emails/Invitation.vue';
import { render } from '@vue-email/render';

const routeSchema = z.object({
    email: z.string().email(),
    isGuest: z.boolean(),
});

export default defineEventHandler(async (event) => {
    const { email, isGuest } = await readValidatedBody(event, routeSchema.parse);

    // Invalidate all previous tokens
    await prisma.invitation.deleteMany({
        where: { email },
    });

    const alreadyRegistered = await prisma.user.findUnique({
        where: { email },
    });
    if (alreadyRegistered) {
        throw createError({
            statusCode: 400,
            message: 'User already registered',
        });
    }

    const tokenId = await generateIdFromEntropySize(25);
    const tokenHash = encodeHex(await sha256(new TextEncoder().encode(tokenId)));

    const html = await render(Invitation, {
        invitedByUsername: `${event.context.user.firstname} ${event.context.user.lastname}`,
        invitedByEmail: event.context.user.email,
        inviteLink: `${process.env.APP_URL}/auth/register/${tokenHash}`,
    });

    try {
        await sendMail(html, email, 'Invitation stoocs');
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: 'mailer error',
        });
    }

    return prisma.invitation.create({
        data: {
            tokenHash,
            email,
            isGuest,
            expiresAt: createDate(new TimeSpan(7, 'd')),
        },
    });
});
