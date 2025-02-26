import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    let moocs = [];
    if (event.context.user.rolename === 'ILL') {
        moocs = await prisma.mooc.findMany({
            select: {
                id: true,
                courseNumber: true,
                title: true,
                description: true,
                theme: true,
                target: true,
                sessions: {
                    select: {
                        id: true,
                        sessionName: true,
                        ended: true,
                        startDate: true,
                        endDate: true,
                        createdAt: true,
                        updatedAt: true,
                        enrollmentsDetails: true,
                    },
                    orderBy: {
                        startDate: 'asc',
                    },
                },
                pinnedBy: {
                    select: {
                        userId: true,
                    },
                },
            },
        });

        if (!moocs) {
            throw createError({
                statusCode: 404,
                message: 'No moocs found',
            });
        }
    } else {
        moocs = await prisma.mooc.findMany({
            where: {
                sessions: {
                    some: {
                        id: { in: event.context.user.moocSessions },
                    },
                },
            },
            select: {
                id: true,
                courseNumber: true,
                title: true,
                description: true,
                theme: true,
                target: true,
                sessions: {
                    select: {
                        id: true,
                        sessionName: true,
                        ended: true,
                        startDate: true,
                        endDate: true,
                        createdAt: true,
                        updatedAt: true,
                        enrollmentsDetails: true,
                    },
                },
                pinnedBy: {
                    select: {
                        userId: true,
                    },
                },
            },
        });

        if (!moocs) {
            throw createError({
                status: 404,
            });
        }
    }

    moocs.forEach((mooc) => {
        mooc.sessions.forEach((session) => {
            session.totalEnrollments = calculateTotalEnrollments(session.enrollmentsDetails);
            delete session.enrollmentsDetails;
        });
    });

    return moocs;
});

function calculateTotalEnrollments(details: any) {
    if (!details) return undefined;
    try {
        return details.reduce((total: number, entry: { enrollments: number }) => total + entry.enrollments, 0);
    } catch (error) {
        console.error('Error parsing enrollmentsDetails:', error);
        return 0;
    }
}
