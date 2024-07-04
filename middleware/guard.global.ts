export default defineNuxtRouteMiddleware(async (to) => {
    const guestRoutes = [
        '/auth/login',
        '/'
    ];
    
    const user = useUser();
    if (!user.value && !guestRoutes.includes(to.path)) {
        return navigateTo('/auth/login');
    }
});
