import { lucia } from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
    const sessionId = getCookie(event, lucia.sessionCookieName);
    
    if (!sessionId) {
        event.context.user = null;
        event.context.session = null;
        
        return
    }
    
    const { session, user } = await lucia.validateSession(sessionId);
    if (session && session.fresh) {
        const sessionCookie = lucia.createSessionCookie(session.id);
        setCookie(event, sessionCookie.name, sessionCookie.value, {
            path: '.',
            ...sessionCookie.attributes
        });
    }
    
    if (!session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        setCookie(event, sessionCookie.name, sessionCookie.value, {
            path: '.',
            ...sessionCookie.attributes
        });
    }
    
    console.log('session detected');
    event.context.user = user;
    event.context.session = session;
})