import { z } from 'zod';
import { PlatformWhereInputObjectSchema } from './objects/PlatformWhereInput.schema';
import { PlatformOrderByWithAggregationInputObjectSchema } from './objects/PlatformOrderByWithAggregationInput.schema';
import { PlatformScalarWhereWithAggregatesInputObjectSchema } from './objects/PlatformScalarWhereWithAggregatesInput.schema';
import { PlatformScalarFieldEnumSchema } from './enums/PlatformScalarFieldEnum.schema';

export const PlatformGroupBySchema = z.object({
  where: PlatformWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PlatformOrderByWithAggregationInputObjectSchema,
      PlatformOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PlatformScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PlatformScalarFieldEnumSchema),
});
