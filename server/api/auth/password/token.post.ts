import { prisma } from '~~/prisma/db';
import { z } from 'zod';
import { encodeHex } from 'oslo/encoding';
import { sha256 } from 'oslo/crypto';
import { sendMail } from '~~/server/utils/mails.utils';

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

    const html = `Cliquez sur le lien suivant pour réinitialiser votre mot de passe: ${process.env.APP_URL}/auth/reset-password/${tokenHash}`;
    try {
        await sendMail(html, email, 'Demande de réinitialisation de mot de passe');
    } catch (error) {
        console.log('error while sending mail', error);
        throw createError({ status: 500 });
    }
});
