import { z } from 'zod';
import { prisma } from '#shared/prisma/db';

const bodySchema = z.object({
    instanceName: z.string(),
    apiKey: z.string(),
    forumUrl: z.url(),
});

const routeSchema = z.object({
    id: z.string(),
});

export default defineEventHandler(async (event) => {
    const { instanceName, apiKey, forumUrl } = await readValidatedBody(event, bodySchema.parse);
    const { id } = await getValidatedRouterParams(event, routeSchema.parse);

    if (forumUrl !== "https://mooc-forums.inria.fr" && forumUrl !== "https://app-learninglab.inria.fr/forums") {
        throw createError({ status: 400, message: "Invalid forum URL" });
    }

    try {
        await prisma.forum.upsert({
            where: { instanceName_forumUrl: { instanceName, forumUrl } },
            create: { instanceName, forumUrl, apiKey },
            update: { apiKey },
        });

        await prisma.moocSession.update({
            where: { id },
            data: { forumInstanceName: instanceName, forumUrl },
        });

        await prisma.forum.deleteMany({
            where: {
                NOT: {
                    instanceName,
                    forumUrl,
                },
                moocSessions: {
                    none: {},
                },
            },
        });
    } catch (error) {
        throw createError({ status: 500, message: 'Internal Server Error' });
    }
});
