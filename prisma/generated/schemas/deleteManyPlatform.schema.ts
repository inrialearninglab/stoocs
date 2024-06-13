import { z } from 'zod';
import { PlatformWhereInputObjectSchema } from './objects/PlatformWhereInput.schema';

export const PlatformDeleteManySchema = z.object({
  where: PlatformWhereInputObjectSchema.optional(),
});
