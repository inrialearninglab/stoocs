export default defineNuxtRouteMiddleware(async (to) => {
    const authRoutes = ['/auth/login', '/auth/register/*'];
    const guestRoutes = [...authRoutes];

    const illRoutes = ['/users'];

    const user = useUser();

    // Register page only available on app initialization
    if (to.path === '/auth/register') {
        const isInitialized = await $fetch('/api/init');
        if (isInitialized) {
            return navigateTo('/auth/login');
        }

        return;
    }

    const matchesAuthRoute = (route: string) => {
        return authRoutes.some((authRoute) => {
            const regex = new RegExp(`^${authRoute.replace(/\*/g, '.*')}$`);
            return regex.test(route);
        });
    };
    if (matchesAuthRoute(to.path) && user.value) {
        return navigateTo('/moocs');
    }

    const matchesGuestRoute = (route: string) => {
        return guestRoutes.some((guestRoute) => {
            const regex = new RegExp(`^${guestRoute.replace(/\*/g, '.*')}$`);
            return regex.test(route);
        });
    };
    if (!user.value && !matchesGuestRoute(to.path)) {
        return navigateTo('/auth/login');
    }

    const matchesIllRoute = (route: string) => {
        return illRoutes.some((illRoute) => {
            const regex = new RegExp(`^${illRoute.replace(/\*/g, '.*')}$`);
            return regex.test(route);
        });
    };
    if (matchesIllRoute(to.path) && user.value?.rolename !== 'ILL') {
        return navigateTo('/moocs');
    }
});
