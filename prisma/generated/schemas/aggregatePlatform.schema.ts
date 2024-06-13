import { z } from 'zod';
import { PlatformOrderByWithRelationInputObjectSchema } from './objects/PlatformOrderByWithRelationInput.schema';
import { PlatformWhereInputObjectSchema } from './objects/PlatformWhereInput.schema';
import { PlatformWhereUniqueInputObjectSchema } from './objects/PlatformWhereUniqueInput.schema';
import { PlatformCountAggregateInputObjectSchema } from './objects/PlatformCountAggregateInput.schema';
import { PlatformMinAggregateInputObjectSchema } from './objects/PlatformMinAggregateInput.schema';
import { PlatformMaxAggregateInputObjectSchema } from './objects/PlatformMaxAggregateInput.schema';

export const PlatformAggregateSchema = z.object({
  orderBy: z
    .union([
      PlatformOrderByWithRelationInputObjectSchema,
      PlatformOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PlatformWhereInputObjectSchema.optional(),
  cursor: PlatformWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PlatformCountAggregateInputObjectSchema])
    .optional(),
  _min: PlatformMinAggregateInputObjectSchema.optional(),
  _max: PlatformMaxAggregateInputObjectSchema.optional(),
});
