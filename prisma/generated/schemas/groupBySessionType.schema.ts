import { z } from 'zod';
import { SessionTypeWhereInputObjectSchema } from './objects/SessionTypeWhereInput.schema';
import { SessionTypeOrderByWithAggregationInputObjectSchema } from './objects/SessionTypeOrderByWithAggregationInput.schema';
import { SessionTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/SessionTypeScalarWhereWithAggregatesInput.schema';
import { SessionTypeScalarFieldEnumSchema } from './enums/SessionTypeScalarFieldEnum.schema';

export const SessionTypeGroupBySchema = z.object({
  where: SessionTypeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SessionTypeOrderByWithAggregationInputObjectSchema,
      SessionTypeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SessionTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SessionTypeScalarFieldEnumSchema),
});
