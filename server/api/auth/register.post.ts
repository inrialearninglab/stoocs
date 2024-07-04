import { prisma } from '~/prisma/db';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
import { lucia } from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
    const { email, firstname, lastname, password } = await readBody(event);
    
    const userId = generateId(15);
    const hashedPassword = await new Argon2id().hash(password);
    const user = await prisma.user.create({
        data: {
            id: userId,
            email,
            firstname,
            lastname,
            password: hashedPassword
        }
    })
    
    if (!user) {
        throw createError({
            statusCode: 400,
            message: 'User not created'
        });
    }
    
    return { user }
})
