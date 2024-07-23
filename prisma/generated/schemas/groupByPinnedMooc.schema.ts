import { z } from 'zod';
import { PinnedMoocWhereInputObjectSchema } from './objects/PinnedMoocWhereInput.schema';
import { PinnedMoocOrderByWithAggregationInputObjectSchema } from './objects/PinnedMoocOrderByWithAggregationInput.schema';
import { PinnedMoocScalarWhereWithAggregatesInputObjectSchema } from './objects/PinnedMoocScalarWhereWithAggregatesInput.schema';
import { PinnedMoocScalarFieldEnumSchema } from './enums/PinnedMoocScalarFieldEnum.schema';

export const PinnedMoocGroupBySchema = z.object({
  where: PinnedMoocWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PinnedMoocOrderByWithAggregationInputObjectSchema,
      PinnedMoocOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PinnedMoocScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PinnedMoocScalarFieldEnumSchema),
});
