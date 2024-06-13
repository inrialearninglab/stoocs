import { z } from 'zod';
import { AuthorUpdateInputObjectSchema } from './objects/AuthorUpdateInput.schema';
import { AuthorUncheckedUpdateInputObjectSchema } from './objects/AuthorUncheckedUpdateInput.schema';
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';

export const AuthorUpdateOneSchema = z.object({
  data: z.union([
    AuthorUpdateInputObjectSchema,
    AuthorUncheckedUpdateInputObjectSchema,
  ]),
  where: AuthorWhereUniqueInputObjectSchema,
});
