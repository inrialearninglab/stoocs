import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    
    const report = await prisma.gradeReport.findUnique({
        where: { id },
    });
    
    return { report };
})