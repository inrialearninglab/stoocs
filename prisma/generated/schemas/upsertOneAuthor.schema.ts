import { z } from 'zod';
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';
import { AuthorCreateInputObjectSchema } from './objects/AuthorCreateInput.schema';
import { AuthorUncheckedCreateInputObjectSchema } from './objects/AuthorUncheckedCreateInput.schema';
import { AuthorUpdateInputObjectSchema } from './objects/AuthorUpdateInput.schema';
import { AuthorUncheckedUpdateInputObjectSchema } from './objects/AuthorUncheckedUpdateInput.schema';

export const AuthorUpsertSchema = z.object({
  where: AuthorWhereUniqueInputObjectSchema,
  create: z.union([
    AuthorCreateInputObjectSchema,
    AuthorUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AuthorUpdateInputObjectSchema,
    AuthorUncheckedUpdateInputObjectSchema,
  ]),
});
