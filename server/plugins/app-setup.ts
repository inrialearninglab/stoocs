import { prisma } from '~/prisma/db';

export default defineNitroPlugin(async (nitroApp) => {
    let app = await prisma.app.findFirst();
    if (!app) {
        app = await prisma.app.create({});

        await prisma.role.create({
            data: {
                name: 'ILL',
            },
        });

        await prisma.role.create({
            data: {
                name: 'Guest',
            },
        });
    }

    // @ts-ignore
    nitroApp.locals = {
        initialized: app.initialized,
    };
});
