import { z } from 'zod';
import { PlatformWhereUniqueInputObjectSchema } from './objects/PlatformWhereUniqueInput.schema';

export const PlatformFindUniqueSchema = z.object({
  where: PlatformWhereUniqueInputObjectSchema,
});
