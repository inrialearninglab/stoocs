import { z } from 'zod';
import { AuthorUpdateManyMutationInputObjectSchema } from './objects/AuthorUpdateManyMutationInput.schema';
import { AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';

export const AuthorUpdateManySchema = z.object({
  data: AuthorUpdateManyMutationInputObjectSchema,
  where: AuthorWhereInputObjectSchema.optional(),
});
