import { z } from 'zod';
import { PinnedMoocWhereUniqueInputObjectSchema } from './objects/PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocCreateInputObjectSchema } from './objects/PinnedMoocCreateInput.schema';
import { PinnedMoocUncheckedCreateInputObjectSchema } from './objects/PinnedMoocUncheckedCreateInput.schema';
import { PinnedMoocUpdateInputObjectSchema } from './objects/PinnedMoocUpdateInput.schema';
import { PinnedMoocUncheckedUpdateInputObjectSchema } from './objects/PinnedMoocUncheckedUpdateInput.schema';

export const PinnedMoocUpsertSchema = z.object({
  where: PinnedMoocWhereUniqueInputObjectSchema,
  create: z.union([
    PinnedMoocCreateInputObjectSchema,
    PinnedMoocUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PinnedMoocUpdateInputObjectSchema,
    PinnedMoocUncheckedUpdateInputObjectSchema,
  ]),
});
