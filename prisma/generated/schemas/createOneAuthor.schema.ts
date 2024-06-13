import { z } from 'zod';
import { AuthorCreateInputObjectSchema } from './objects/AuthorCreateInput.schema';
import { AuthorUncheckedCreateInputObjectSchema } from './objects/AuthorUncheckedCreateInput.schema';

export const AuthorCreateOneSchema = z.object({
  data: z.union([
    AuthorCreateInputObjectSchema,
    AuthorUncheckedCreateInputObjectSchema,
  ]),
});
