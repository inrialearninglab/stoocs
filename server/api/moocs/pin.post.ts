import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
    const { moocId } = await readBody(event);
    
    if (!moocId || !event.context.user.id) {
        throw createError({
            statusCode: 400,
            message: 'Invalid body.'
        });
    }
    
    const pin = await prisma.pinnedMooc.create({
        data: {
            user: { connect: { id: event.context.user.id } },
            mooc: { connect: { id: moocId } }
        }
    })
    
    if (!pin) {
        throw createError({
            statusCode: 500,
            message: 'Error while pinning the mooc.'
        })
    }
    
    const mooc = await prisma.mooc.findUnique({
        where: { id: moocId },
        select: {
            pinnedBy: true
        }
    });
    
    return { mooc }
})