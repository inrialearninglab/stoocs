export default defineEventHandler(async (event) => {
    const guestRoutes = [
        { url: '/api/auth/login', method: 'POST' },
        { url: '/api/auth/user', method: 'GET' },
        { url: '/api/auth/register', method: 'POST' },
        { url: '/api/auth/invitations/email', method: 'POST' },
    ];

    const courseGuestRoutes = [
        { url: '/api/auth/logout', method: 'POST' },
        { url: '/api/auth/password', method: 'PUT' },

        { url: '/api/moocs', method: 'GET' },
        { url: '/api/moocs/pin', method: 'DELETE' },
        { url: '/api/moocs/pin', method: 'POST' },

        { url: '/api/reports/.*', method: 'GET' },

        { url: '/api/sessions/.*', method: 'GET' },

        { url: '/api/users/profile', method: 'PUT' }
    ]

    if (event.path.startsWith('/api')) {
        const isGuestRoute = guestRoutes.some(route => new RegExp(`^${route.url}$`).test(event.path) && route.method === event.method);
        const isCourseGuestRoute = courseGuestRoutes.some(route => new RegExp(`^${route.url}$`).test(event.path) && route.method === event.method);

        if (!isGuestRoute) {
            if (!event.context.user) {
                throw createError({
                    statusCode: 403
                });
            }

            else if (!isCourseGuestRoute && event.context.user.rolename !== 'ILL') {
                throw createError({
                    statusCode: 403
                });
            }
        }
    }
})
