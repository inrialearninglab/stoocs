import { z } from 'zod';
import { PinnedMoocOrderByWithRelationInputObjectSchema } from './objects/PinnedMoocOrderByWithRelationInput.schema';
import { PinnedMoocWhereInputObjectSchema } from './objects/PinnedMoocWhereInput.schema';
import { PinnedMoocWhereUniqueInputObjectSchema } from './objects/PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocCountAggregateInputObjectSchema } from './objects/PinnedMoocCountAggregateInput.schema';
import { PinnedMoocMinAggregateInputObjectSchema } from './objects/PinnedMoocMinAggregateInput.schema';
import { PinnedMoocMaxAggregateInputObjectSchema } from './objects/PinnedMoocMaxAggregateInput.schema';

export const PinnedMoocAggregateSchema = z.object({
  orderBy: z
    .union([
      PinnedMoocOrderByWithRelationInputObjectSchema,
      PinnedMoocOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PinnedMoocWhereInputObjectSchema.optional(),
  cursor: PinnedMoocWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PinnedMoocCountAggregateInputObjectSchema])
    .optional(),
  _min: PinnedMoocMinAggregateInputObjectSchema.optional(),
  _max: PinnedMoocMaxAggregateInputObjectSchema.optional(),
});
