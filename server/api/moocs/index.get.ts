import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
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
                }
            }
        }
    });
   
    return { moocs }
})