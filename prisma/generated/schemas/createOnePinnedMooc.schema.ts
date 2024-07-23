import { z } from 'zod';
import { PinnedMoocCreateInputObjectSchema } from './objects/PinnedMoocCreateInput.schema';
import { PinnedMoocUncheckedCreateInputObjectSchema } from './objects/PinnedMoocUncheckedCreateInput.schema';

export const PinnedMoocCreateOneSchema = z.object({
  data: z.union([
    PinnedMoocCreateInputObjectSchema,
    PinnedMoocUncheckedCreateInputObjectSchema,
  ]),
});
