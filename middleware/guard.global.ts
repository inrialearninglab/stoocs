export default defineNuxtRouteMiddleware(async (to) => {
    const guestRoutes = [
        '/login',
        '/'
    ];
    
    const user = useUser();
    if (!user.value && !guestRoutes.includes(to.path)) {
        return navigateTo('/login');
    }
});
