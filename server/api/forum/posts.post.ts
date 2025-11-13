import { z } from 'zod';
import { prisma } from '#shared/prisma/db';
import { th } from 'zod/v4/locales';

const bodySchema = z.object({
    instanceName: z.string(),
    forumUrl: z.url(),
    startDate: z.string(),
    endDate: z.string(),
});

export default defineEventHandler(async (event) => {
    const { instanceName, forumUrl, startDate, endDate } = await readValidatedBody(event, bodySchema.parse);

    try {
        const instance = await prisma.forum.findUnique({
            where: { instanceName_forumUrl: { instanceName, forumUrl } },
        });

        if (!instance) {
            throw createError({ status: 404 });
        }

        const res = await $fetch(
            `${instance.forumUrl}/${instanceName}/admin/reports/posts.json?chart_grouping=daily&end_date=${endDate}&mode=chart&start_date=${startDate}`,
            {
                method: 'GET',
                headers: {
                    'Api-Key': instance.apiKey,
                    'Api-Username': process.env.DISCOURSE_USER!,
                },
            },
        );

        return res.report.data.map((item) => {
            return {
                date: item.x,
                value: Number(item.y),
            };
        });
    } catch (e) {
        throw createError({ status: 500 });
    }
});
