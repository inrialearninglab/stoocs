import { createBlankSessionCookie, invalidateSession } from '~/server/utils/sessions';

export default defineEventHandler(async (event) => {
    if (!event.context.session) {
        throw createError({
            statusCode: 403,
        });
    }

    await invalidateSession(event.context.session.id);
    const sessionCookie = createBlankSessionCookie();
    setCookie(event, sessionCookie.name, sessionCookie.value, {
        path: '/',
        ...sessionCookie.attributes,
    });
});
