import { z } from 'zod';
import { PinnedMoocCreateManyInputObjectSchema } from './objects/PinnedMoocCreateManyInput.schema';

export const PinnedMoocCreateManySchema = z.object({
  data: z.union([
    PinnedMoocCreateManyInputObjectSchema,
    z.array(PinnedMoocCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
