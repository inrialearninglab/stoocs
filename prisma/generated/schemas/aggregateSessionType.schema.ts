import { z } from 'zod';
import { SessionTypeOrderByWithRelationInputObjectSchema } from './objects/SessionTypeOrderByWithRelationInput.schema';
import { SessionTypeWhereInputObjectSchema } from './objects/SessionTypeWhereInput.schema';
import { SessionTypeWhereUniqueInputObjectSchema } from './objects/SessionTypeWhereUniqueInput.schema';
import { SessionTypeCountAggregateInputObjectSchema } from './objects/SessionTypeCountAggregateInput.schema';
import { SessionTypeMinAggregateInputObjectSchema } from './objects/SessionTypeMinAggregateInput.schema';
import { SessionTypeMaxAggregateInputObjectSchema } from './objects/SessionTypeMaxAggregateInput.schema';

export const SessionTypeAggregateSchema = z.object({
  orderBy: z
    .union([
      SessionTypeOrderByWithRelationInputObjectSchema,
      SessionTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SessionTypeWhereInputObjectSchema.optional(),
  cursor: SessionTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SessionTypeCountAggregateInputObjectSchema])
    .optional(),
  _min: SessionTypeMinAggregateInputObjectSchema.optional(),
  _max: SessionTypeMaxAggregateInputObjectSchema.optional(),
});
