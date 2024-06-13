import { z } from 'zod';
import { TeamMemberOrderByWithRelationInputObjectSchema } from './objects/TeamMemberOrderByWithRelationInput.schema';
import { TeamMemberWhereInputObjectSchema } from './objects/TeamMemberWhereInput.schema';
import { TeamMemberWhereUniqueInputObjectSchema } from './objects/TeamMemberWhereUniqueInput.schema';
import { TeamMemberCountAggregateInputObjectSchema } from './objects/TeamMemberCountAggregateInput.schema';
import { TeamMemberMinAggregateInputObjectSchema } from './objects/TeamMemberMinAggregateInput.schema';
import { TeamMemberMaxAggregateInputObjectSchema } from './objects/TeamMemberMaxAggregateInput.schema';

export const TeamMemberAggregateSchema = z.object({
  orderBy: z
    .union([
      TeamMemberOrderByWithRelationInputObjectSchema,
      TeamMemberOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TeamMemberWhereInputObjectSchema.optional(),
  cursor: TeamMemberWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TeamMemberCountAggregateInputObjectSchema])
    .optional(),
  _min: TeamMemberMinAggregateInputObjectSchema.optional(),
  _max: TeamMemberMaxAggregateInputObjectSchema.optional(),
});
