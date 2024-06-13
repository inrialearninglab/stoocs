import { z } from 'zod';
import { TeamMemberWhereInputObjectSchema } from './objects/TeamMemberWhereInput.schema';

export const TeamMemberDeleteManySchema = z.object({
  where: TeamMemberWhereInputObjectSchema.optional(),
});
