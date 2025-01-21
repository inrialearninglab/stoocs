import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    if (event.context.user.rolename === 'ILL') {
        const moocs = await prisma.mooc.findMany({
            select: {
                id: true,
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

        return moocs;
    } else {
        const moocs = await prisma.mooc.findMany({
            where: {
                sessions: {
                    some: {
                        id: { in: event.context.user.moocSessions },
                    },
                },
            },
            select: {
                id: true,
                title: true,
                description: true,
                theme: true,
                target: true,
                sessions: {
                    select: {
                        id: true,
                        sessionName: true,
                        ended: true,
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

        return moocs;
    }
});
