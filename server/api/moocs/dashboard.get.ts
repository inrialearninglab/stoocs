import { prisma } from '#shared/prisma/db';

export default defineEventHandler(async (event) => {
    return prisma.mooc.findMany({
        select: {
            sessions: {
                select: {
                    enrollmentsDetails: true,
                },
            },
        },
    });
});
