import { z } from 'zod';
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';

export const AuthorDeleteOneSchema = z.object({
  where: AuthorWhereUniqueInputObjectSchema,
});
