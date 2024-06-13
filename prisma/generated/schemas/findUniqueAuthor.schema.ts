import { z } from 'zod';
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';

export const AuthorFindUniqueSchema = z.object({
  where: AuthorWhereUniqueInputObjectSchema,
});
