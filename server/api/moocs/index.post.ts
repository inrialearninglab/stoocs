import { prisma } from '~/prisma/db';
import { MoocCreateOneSchema } from '~/prisma/generated/schemas/createOneMooc.schema';

export default defineEventHandler(async (event) => {
    const body = await readValidatedBody(event, body => MoocCreateOneSchema.safeParse({  data: body }));
    if (!body.success) {
        throw createError({
            statusCode: 400,
            message: 'Invalid body.'
        })
    }
    
    
    
    return { body }
})