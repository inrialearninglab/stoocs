import { prisma } from '~/prisma/db';
import { lucia } from '~/server/utils/auth';
import { Argon2id } from 'oslo/password';
import { z } from 'zod';

const routeSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, routeSchema.parse);

    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (!user) {
        throw createError({
            statusCode: 400,
            message: 'Incorrect email or password'
        })
    }

    const validPassword = await new Argon2id().verify(user.password, password);
    if (!validPassword) {
        throw createError({
            statusCode: 400,
            message: 'Incorrect email or password'
        })
    }

    const session = await lucia.createSession(user.id, []);
    const sessionCookie = lucia.createSessionCookie(session.id);
    setCookie(event, sessionCookie.name, sessionCookie.value, {
        path: '.',
        ...sessionCookie.attributes
    });
})
