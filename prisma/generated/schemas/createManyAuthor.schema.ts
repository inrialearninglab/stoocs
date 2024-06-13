import { z } from 'zod';
import { AuthorCreateManyInputObjectSchema } from './objects/AuthorCreateManyInput.schema';

export const AuthorCreateManySchema = z.object({
  data: z.union([
    AuthorCreateManyInputObjectSchema,
    z.array(AuthorCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
