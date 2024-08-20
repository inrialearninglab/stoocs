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
            cutoffs: true,
            mooc: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    theme: true,
                    target: true,
                    sessions: false,
                    courseNumber: true,
                    pinnedBy: true
                }
            },
            enrollmentsDetails: true,
            gradeReports: {
                select: {
                    id: true,
                    date: true
                }
            }
        }
    })
    
    if (!session) {
        throw createError({
            statusCode: 404,
            message: 'Session not found.'
        })
    }
    
    return session;
})
