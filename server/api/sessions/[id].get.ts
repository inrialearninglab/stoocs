import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    
    const session = await prisma.moocSession.findUnique({
        where: {
            id
        },
        select: {
            sessionName: true,
            startDate: true,
            endDate: true,
            mooc: true,
            enrollmentsDetails: true,
            gradeReports: true
        }
    })
    
    return { session }
})
