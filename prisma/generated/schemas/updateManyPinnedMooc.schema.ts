import { z } from 'zod';
import { PinnedMoocUpdateManyMutationInputObjectSchema } from './objects/PinnedMoocUpdateManyMutationInput.schema';
import { PinnedMoocWhereInputObjectSchema } from './objects/PinnedMoocWhereInput.schema';

export const PinnedMoocUpdateManySchema = z.object({
  data: PinnedMoocUpdateManyMutationInputObjectSchema,
  where: PinnedMoocWhereInputObjectSchema.optional(),
});
