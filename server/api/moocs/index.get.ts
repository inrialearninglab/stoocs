import { Prisma } from '@prisma/client';
import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    let moocs = [];
    const selectStatement: Prisma.MoocSelect = {
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
                gradeReports: {
                    select: {
                        id: true,
                        date: true,
                        totalUsers: true,
                        totalEligible: true,
                    },
                    orderBy: {
                        date: 'desc',
                    },
                    take: 1,
                },
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
    };
    if (event.context.user.rolename === 'ILL') {
        moocs = await prisma.mooc.findMany({
            select: selectStatement,
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
            select: selectStatement,
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
            const updateDate = (session.enrollmentsDetails as Array<{ date: string; value: number }>)?.pop()?.date;
            // @ts-expect-error
            session.updateDate = updateDate ?? undefined;
            // @ts-expect-error
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
