import { prisma } from '~/prisma/db';

export default defineNitroPlugin(async (nitroApp) => {
    let app = await prisma.app.findFirst();
    if (!app) {
        app = await prisma.app.create();
    }

    // @ts-ignore
    nitroApp.locals = {
        initialized: app.initialized,
    };
});
