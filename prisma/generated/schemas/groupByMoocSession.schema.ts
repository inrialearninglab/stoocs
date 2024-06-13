import { z } from 'zod';
import { MoocSessionWhereInputObjectSchema } from './objects/MoocSessionWhereInput.schema';
import { MoocSessionOrderByWithAggregationInputObjectSchema } from './objects/MoocSessionOrderByWithAggregationInput.schema';
import { MoocSessionScalarWhereWithAggregatesInputObjectSchema } from './objects/MoocSessionScalarWhereWithAggregatesInput.schema';
import { MoocSessionScalarFieldEnumSchema } from './enums/MoocSessionScalarFieldEnum.schema';

export const MoocSessionGroupBySchema = z.object({
  where: MoocSessionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MoocSessionOrderByWithAggregationInputObjectSchema,
      MoocSessionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MoocSessionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MoocSessionScalarFieldEnumSchema),
});
