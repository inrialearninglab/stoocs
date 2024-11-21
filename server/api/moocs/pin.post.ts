import { prisma } from '~/prisma/db';
import { z } from 'zod';

const routeSchema = z.object({
    moocId: z.string(),
});

export default defineEventHandler(async (event) => {
    const { moocId } = await readValidatedBody(event, routeSchema.parse);

    if (!moocId || !event.context.user.id) {
        throw createError({
            statusCode: 400,
            message: 'Invalid body.',
        });
    }

    const pin = await prisma.pinnedMooc.create({
        data: {
            user: { connect: { id: event.context.user.id } },
            mooc: { connect: { id: moocId } },
        },
    });

    if (!pin) {
        throw createError({
            statusCode: 500,
            message: 'Error while pinning the mooc.',
        });
    }

    const mooc = await prisma.mooc.findUnique({
        where: { id: moocId },
        select: {
            pinnedBy: true,
        },
    });

    if (!mooc) {
        throw createError({
            statusCode: 404,
            message: 'Mooc not found.',
        });
    }

    return mooc;
});
