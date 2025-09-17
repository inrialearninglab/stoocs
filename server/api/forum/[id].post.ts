import { z } from 'zod';
import { prisma } from '#shared/prisma/db';

const bodySchema = z.object({
    instanceName: z.string(),
    apiKey: z.string(),
});

const routeSchema = z.object({
    id: z.string(),
});

export default defineEventHandler(async (event) => {
    const { instanceName, apiKey } = await readValidatedBody(event, bodySchema.parse);
    const { id } = await getValidatedRouterParams(event, routeSchema.parse);

    try {
        await prisma.forum.upsert({
            where: { instanceName },
            create: { instanceName, apiKey },
            update: { apiKey },
        });

        await prisma.moocSession.update({
            where: { id },
            data: { forumInstanceName: instanceName },
        });
    } catch (error) {
        throw createError({ status: 500, message: 'Internal Server Error' });
    }
});
