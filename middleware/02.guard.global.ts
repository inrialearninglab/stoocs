export default defineNuxtRouteMiddleware(async (to) => {
    const guestRoutes = [
        '/auth/login',
        '/auth/register/*',
    ];

    const illRoutes = [
        '/users'
    ];

    const user = useUser();

    const matchesGuestRoute = (route: string) => {
        return guestRoutes.some(guestRoute => {
            const regex = new RegExp(`^${guestRoute.replace(/\*/g, '.*')}$`);
            return regex.test(route);
        });
    };

    const matchesIllRoute = (route: string) => {
        return illRoutes.some(illRoute => {
            const regex = new RegExp(`^${illRoute.replace(/\*/g, '.*')}$`);
            return regex.test(route);
        });
    };

    if (!user.value && !matchesGuestRoute(to.path)) {
        return navigateTo('/auth/login');
    }
    else if (matchesIllRoute(to.path) && user.value?.rolename !== 'ILL') {
        return navigateTo('/moocs');
    }
});
