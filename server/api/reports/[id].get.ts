import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    
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