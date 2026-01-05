import { prisma } from '~~/prisma/db';

export default defineEventHandler(async (event) => {
    const user = await prisma.user.delete({
        where: { id: event.context.user.id },
    });

    if (!user) {
        throw createError({
            statusCode: 404,
            message: 'User not found',
        });
    }

    await invalidateSession(event.context.session.id);
    const sessionCookie = createBlankSessionCookie();
    setCookie(event, sessionCookie.name, sessionCookie.value, {
        path: '/',
        ...sessionCookie.attributes,
    });
});
