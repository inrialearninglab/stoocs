import { registerSchema } from '~/schema/users.schema';
import { prisma } from '~/prisma/db';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';

export default defineEventHandler(async (event) => {
    const nitroApp = useNitroApp();

    // @ts-ignore
    if (nitroApp.locals.initialized) {
        throw createError({
            status: 403,
            message: 'App is already initialized',
        });
    }

    const { email, firstname, lastname, password } = await readValidatedBody(event, registerSchema.parse);

    const userId = generateId(15);
    const hashedPassword = await new Argon2id().hash(password);
    const user = await prisma.user.create({
        data: {
            id: userId,
            email,
            firstname,
            lastname,
            password: hashedPassword,
            role: {
                connect: {
                    name: 'ILL',
                },
            },
        },
    });

    if (!user) {
        throw createError({
            statusCode: 500,
            message: 'Error during user creation',
        });
    }

    await prisma.app.update({
        where: {
            id: 1,
        },
        data: {
            initialized: true,
        },
    });

    // @ts-ignore
    nitroApp.locals.initialized = true;

    setHeader(event, 'Referrer-Policy', 'strict-origin');
    const session = await lucia.createSession(user.id, []);
    const sessionCookie = lucia.createSessionCookie(session.id);
    setCookie(event, sessionCookie.name, sessionCookie.value, {
        path: '.',
        ...sessionCookie.attributes,
    });

    return { user };
});
