import { z } from 'zod';
import { PlatformUpdateManyMutationInputObjectSchema } from './objects/PlatformUpdateManyMutationInput.schema';
import { PlatformWhereInputObjectSchema } from './objects/PlatformWhereInput.schema';

export const PlatformUpdateManySchema = z.object({
  data: PlatformUpdateManyMutationInputObjectSchema,
  where: PlatformWhereInputObjectSchema.optional(),
});
