import { isWithinExpirationDate } from 'oslo';
import { prisma } from '~/prisma/db';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
import { lucia } from '~/server/utils/auth';
import { registerSchema } from '~/schema/users.schema';
import { z } from 'zod';

const routeSchema = registerSchema.extend({
    token: z.string()
});
export default defineEventHandler(async (event) => {
    const { email, firstname, lastname, password, token } = await readValidatedBody(event, routeSchema.parse);
    
    const verificationToken = await prisma.invitation.findUnique({
        where: { tokenHash: token }
    });
    
    if (!verificationToken || !isWithinExpirationDate(verificationToken.expiresAt)) {
        throw createError({
            statusCode: 400
        })
    }
    
    if (email !== verificationToken.email) {
        throw createError({
            statusCode: 400
        })
    }
    
    const userId = generateId(15);
    const hashedPassword = await new Argon2id().hash(password);
    const user = await prisma.user.create({
        data: {
            id: userId,
            email,
            firstname,
            lastname,
            password: hashedPassword
        }
    })
    
    if (!user) {
        throw createError({
            statusCode: 500,
            message: 'User not created',
        });
    }
    
    await prisma.invitation.deleteMany({
        where: { tokenHash: token }
    });
    
    setHeader(event, 'Referrer-Policy', 'strict-origin');
    const session = await lucia.createSession(user.id, []);
    const sessionCookie = lucia.createSessionCookie(session.id);
    setCookie(event, sessionCookie.name, sessionCookie.value, {
        path: '.',
        ...sessionCookie.attributes
    });
    
    return { user }
})
