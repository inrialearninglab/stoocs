import { z } from 'zod';
import { MoocSessionUpdateManyMutationInputObjectSchema } from './objects/MoocSessionUpdateManyMutationInput.schema';
import { MoocSessionWhereInputObjectSchema } from './objects/MoocSessionWhereInput.schema';

export const MoocSessionUpdateManySchema = z.object({
  data: MoocSessionUpdateManyMutationInputObjectSchema,
  where: MoocSessionWhereInputObjectSchema.optional(),
});
