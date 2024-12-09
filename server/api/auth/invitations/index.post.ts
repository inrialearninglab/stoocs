import { createDate, TimeSpan } from 'oslo';
import { sha256 } from 'oslo/crypto';
import { encodeHex } from 'oslo/encoding';
import { generateIdFromEntropySize } from 'lucia';
import { prisma } from '~/prisma/db';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { useCompiler } from '#vue-email';

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

    const tokenId = generateIdFromEntropySize(25);
    const tokenHash = encodeHex(await sha256(new TextEncoder().encode(tokenId)));

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: 'plain',
    });

    let html;
    try {
        const template = await useCompiler('Invitation.vue', {
            props: {
                invitedByUsername: `${event.context.user.firstname} ${event.context.user.lastname}`,
                invitedByEmail: event.context.user.email,
                inviteLink: `${process.env.APP_URL}/auth/register/${tokenHash}`,
            },
        });

        html = template.html;
    } catch (e) {
        console.error('error creating mail template');

        html = `Vous avez été invité sur l'application Stoocs. Cliquez sur le lien suivant pour créer votre compte : ${process.env.APP_URL}/auth/register/${tokenHash}`;
    }

    let mailOptions = {
        from: `Stoocs <${process.env.APP_EMAIL}>`,
        to: email,
        subject: 'Invitation stoocs',
        html,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent : %s', info.messageId);
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
