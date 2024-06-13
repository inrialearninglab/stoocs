import { z } from 'zod';
import { TeamMemberOrderByWithRelationInputObjectSchema } from './objects/TeamMemberOrderByWithRelationInput.schema';
import { TeamMemberWhereInputObjectSchema } from './objects/TeamMemberWhereInput.schema';
import { TeamMemberWhereUniqueInputObjectSchema } from './objects/TeamMemberWhereUniqueInput.schema';
import { TeamMemberScalarFieldEnumSchema } from './enums/TeamMemberScalarFieldEnum.schema';

export const TeamMemberFindManySchema = z.object({
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
  distinct: z.array(TeamMemberScalarFieldEnumSchema).optional(),
});
