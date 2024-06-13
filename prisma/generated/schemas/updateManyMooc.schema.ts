import { z } from 'zod';
import { MoocUpdateManyMutationInputObjectSchema } from './objects/MoocUpdateManyMutationInput.schema';
import { MoocWhereInputObjectSchema } from './objects/MoocWhereInput.schema';

export const MoocUpdateManySchema = z.object({
  data: MoocUpdateManyMutationInputObjectSchema,
  where: MoocWhereInputObjectSchema.optional(),
});
