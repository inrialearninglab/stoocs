import { z } from 'zod';
import { TeamMemberUpdateManyMutationInputObjectSchema } from './objects/TeamMemberUpdateManyMutationInput.schema';
import { TeamMemberWhereInputObjectSchema } from './objects/TeamMemberWhereInput.schema';

export const TeamMemberUpdateManySchema = z.object({
  data: TeamMemberUpdateManyMutationInputObjectSchema,
  where: TeamMemberWhereInputObjectSchema.optional(),
});
