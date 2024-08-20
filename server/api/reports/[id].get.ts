import { prisma } from '~/prisma/db';
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
            message: 'Report not found.'
        });
    }
    
    return report;
})