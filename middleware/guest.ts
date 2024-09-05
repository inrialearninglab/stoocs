export default defineNuxtRouteMiddleware(async (to) => {
    const user = useUser();
    if (user.value?.rolename === 'ILL') return;

    const sessionId = to.path.split('/').pop();

    if (!user.value || !sessionId || !user.value.moocSessions.includes(sessionId)) {
        return navigateTo('/moocs');
    }
})
