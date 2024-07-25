export default defineNuxtRouteMiddleware(async (to) => {
    const guestRoutes = [
        '/auth/login',
        '/auth/register/*',
    ];
    
    const user = useUser();
    
    const matchesGuestRoute = (route: string) => {
        return guestRoutes.some(guestRoute => {
            const regex = new RegExp(`^${guestRoute.replace(/\*/g, '.*')}$`);
            return regex.test(route);
        });
    };
    
    if (!user.value && !matchesGuestRoute(to.path)) {
        return navigateTo('/auth/login');
    }
});
