export default defineEventHandler(() => {
    const nitroApp = useNitroApp();

    // @ts-ignore
    return nitroApp.locals.initialized;
});
