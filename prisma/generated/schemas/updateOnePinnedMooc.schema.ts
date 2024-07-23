import { z } from 'zod';
import { PinnedMoocUpdateInputObjectSchema } from './objects/PinnedMoocUpdateInput.schema';
import { PinnedMoocUncheckedUpdateInputObjectSchema } from './objects/PinnedMoocUncheckedUpdateInput.schema';
import { PinnedMoocWhereUniqueInputObjectSchema } from './objects/PinnedMoocWhereUniqueInput.schema';

export const PinnedMoocUpdateOneSchema = z.object({
  data: z.union([
    PinnedMoocUpdateInputObjectSchema,
    PinnedMoocUncheckedUpdateInputObjectSchema,
  ]),
  where: PinnedMoocWhereUniqueInputObjectSchema,
});
