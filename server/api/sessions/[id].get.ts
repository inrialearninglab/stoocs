import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    
    const session = await prisma.moocSession.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            sessionName: true,
            startDate: true,
            endDate: true,
            mooc: true,
            enrollmentsDetails: true,
            gradeReports: {
                select: {
                    id: true,
                    date: true
                }
            }
        }
    })
    
    return { session }
})
