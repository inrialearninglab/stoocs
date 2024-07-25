export default defineEventHandler(async (event) => {
    const guestRoutes = [
        { url: '/api/auth/login', method: 'POST' },
        { url: '/api/auth/user', method: 'GET' },
        { url: '/api/auth/register', method: 'POST' },
        { url: '/api/auth/invitations/email', method: 'POST' },
    ];
   
    if (event.path.startsWith('/api')) {
        if (guestRoutes.some(route => route.url === event.path && route.method === event.method)) {
            return;
        }
        
        else if (!event.context.user) {
            throw createError({
                statusCode: 403
            });
        }
    }
})