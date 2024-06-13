import { z } from 'zod';
import { AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';

export const AuthorDeleteManySchema = z.object({
  where: AuthorWhereInputObjectSchema.optional(),
});
