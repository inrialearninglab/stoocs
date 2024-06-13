import { z } from 'zod';
import { MoocOrderByWithRelationInputObjectSchema } from './objects/MoocOrderByWithRelationInput.schema';
import { MoocWhereInputObjectSchema } from './objects/MoocWhereInput.schema';
import { MoocWhereUniqueInputObjectSchema } from './objects/MoocWhereUniqueInput.schema';
import { MoocCountAggregateInputObjectSchema } from './objects/MoocCountAggregateInput.schema';
import { MoocMinAggregateInputObjectSchema } from './objects/MoocMinAggregateInput.schema';
import { MoocMaxAggregateInputObjectSchema } from './objects/MoocMaxAggregateInput.schema';

export const MoocAggregateSchema = z.object({
  orderBy: z
    .union([
      MoocOrderByWithRelationInputObjectSchema,
      MoocOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MoocWhereInputObjectSchema.optional(),
  cursor: MoocWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MoocCountAggregateInputObjectSchema])
    .optional(),
  _min: MoocMinAggregateInputObjectSchema.optional(),
  _max: MoocMaxAggregateInputObjectSchema.optional(),
});
