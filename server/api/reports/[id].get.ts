import { prisma } from '#shared/prisma/db';
import { z } from 'zod';

const routeSchema = z.object({
    id: z.string(),
});

export default defineEventHandler(async (event) => {
    const { id } = await getValidatedRouterParams(event, routeSchema.parse);

    const report = await prisma.gradeReport.findUnique({
        where: { id },
    });

    if (!report) {
        throw createError({
            statusCode: 404,
            message: 'Report not found.',
        });
    }

    if (event.context.user.rolename === 'Guest') {
        if (!event.context.user.moocSessions.includes(report.moocSessionId)) {
            throw createError({
                statusCode: 403,
            });
        }
    }

    return report;
});
