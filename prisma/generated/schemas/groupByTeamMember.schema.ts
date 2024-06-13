import { z } from 'zod';
import { TeamMemberWhereInputObjectSchema } from './objects/TeamMemberWhereInput.schema';
import { TeamMemberOrderByWithAggregationInputObjectSchema } from './objects/TeamMemberOrderByWithAggregationInput.schema';
import { TeamMemberScalarWhereWithAggregatesInputObjectSchema } from './objects/TeamMemberScalarWhereWithAggregatesInput.schema';
import { TeamMemberScalarFieldEnumSchema } from './enums/TeamMemberScalarFieldEnum.schema';

export const TeamMemberGroupBySchema = z.object({
  where: TeamMemberWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TeamMemberOrderByWithAggregationInputObjectSchema,
      TeamMemberOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TeamMemberScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TeamMemberScalarFieldEnumSchema),
});
