import { z } from 'zod';
import { MoocSessionOrderByWithRelationInputObjectSchema } from './objects/MoocSessionOrderByWithRelationInput.schema';
import { MoocSessionWhereInputObjectSchema } from './objects/MoocSessionWhereInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './objects/MoocSessionWhereUniqueInput.schema';
import { MoocSessionCountAggregateInputObjectSchema } from './objects/MoocSessionCountAggregateInput.schema';
import { MoocSessionMinAggregateInputObjectSchema } from './objects/MoocSessionMinAggregateInput.schema';
import { MoocSessionMaxAggregateInputObjectSchema } from './objects/MoocSessionMaxAggregateInput.schema';
import { MoocSessionAvgAggregateInputObjectSchema } from './objects/MoocSessionAvgAggregateInput.schema';
import { MoocSessionSumAggregateInputObjectSchema } from './objects/MoocSessionSumAggregateInput.schema';

export const MoocSessionAggregateSchema = z.object({
  orderBy: z
    .union([
      MoocSessionOrderByWithRelationInputObjectSchema,
      MoocSessionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MoocSessionWhereInputObjectSchema.optional(),
  cursor: MoocSessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MoocSessionCountAggregateInputObjectSchema])
    .optional(),
  _min: MoocSessionMinAggregateInputObjectSchema.optional(),
  _max: MoocSessionMaxAggregateInputObjectSchema.optional(),
  _avg: MoocSessionAvgAggregateInputObjectSchema.optional(),
  _sum: MoocSessionSumAggregateInputObjectSchema.optional(),
});
