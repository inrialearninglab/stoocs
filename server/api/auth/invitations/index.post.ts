import { createDate, TimeSpan } from 'oslo';
import { sha256 } from 'oslo/crypto';
import { encodeHex } from 'oslo/encoding';
import { prisma } from '#shared/prisma/db';
import { z } from 'zod';

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

    const html = `Vous avez été invité sur l'application Stoocs. Cliquez sur le lien suivant pour créer votre compte : ${process.env.APP_URL}/auth/register/${tokenHash}`;
    try {
        await sendMail(html, email, 'Invitation stoocs');
    } catch (error) {
        console.log('error sending mail', error);
        throw createError({
            statusCode: 500,
            message: 'mailer error',
        });
    }

    // let html;
    // try {
    //     const template = await useCompiler('Invitation.vue', {
    //         props: {
    //             invitedByUsername: `${event.context.user.firstname} ${event.context.user.lastname}`,
    //             invitedByEmail: event.context.user.email,
    //             inviteLink: `${process.env.APP_URL}/auth/register/${tokenHash}`,
    //         },
    //     });

    //     html = template.html;
    // } catch (e) {
    //     console.error('error creating mail template');

    //     html = `Vous avez été invité sur l'application Stoocs. Cliquez sur le lien suivant pour créer votre compte : ${process.env.APP_URL}/auth/register/${tokenHash}`;
    // }

    return prisma.invitation.create({
        data: {
            tokenHash,
            email,
            isGuest,
            expiresAt: createDate(new TimeSpan(7, 'd')),
        },
    });
});
