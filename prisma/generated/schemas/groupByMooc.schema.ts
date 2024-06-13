import { z } from 'zod';
import { MoocWhereInputObjectSchema } from './objects/MoocWhereInput.schema';
import { MoocOrderByWithAggregationInputObjectSchema } from './objects/MoocOrderByWithAggregationInput.schema';
import { MoocScalarWhereWithAggregatesInputObjectSchema } from './objects/MoocScalarWhereWithAggregatesInput.schema';
import { MoocScalarFieldEnumSchema } from './enums/MoocScalarFieldEnum.schema';

export const MoocGroupBySchema = z.object({
  where: MoocWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MoocOrderByWithAggregationInputObjectSchema,
      MoocOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MoocScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MoocScalarFieldEnumSchema),
});
