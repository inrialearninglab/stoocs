import { createBlankSessionCookie, createSessionCookie, validateSession } from '../utils/sessions';

export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'session');

    if (!token) {
        event.context.user = null;
        event.context.session = null;

        return;
    }

    const { session, user } = await validateSession(token);
    if (session) {
        const sessionCookie = createSessionCookie(token, session.expiresAt);
        setCookie(event, sessionCookie.name, sessionCookie.value, {
            path: '/',
            ...sessionCookie.attributes,
        });
    } else {
        const sessionCookie = createBlankSessionCookie();
        setCookie(event, sessionCookie.name, sessionCookie.value, {
            path: '/',
            ...sessionCookie.attributes,
        });
    }

    event.context.user = user;
    event.context.session = session;
});
