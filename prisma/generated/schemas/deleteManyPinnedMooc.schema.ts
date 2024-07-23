import { z } from 'zod';
import { PinnedMoocWhereInputObjectSchema } from './objects/PinnedMoocWhereInput.schema';

export const PinnedMoocDeleteManySchema = z.object({
  where: PinnedMoocWhereInputObjectSchema.optional(),
});
