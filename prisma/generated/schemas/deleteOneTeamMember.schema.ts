import { z } from 'zod';
import { TeamMemberWhereUniqueInputObjectSchema } from './objects/TeamMemberWhereUniqueInput.schema';

export const TeamMemberDeleteOneSchema = z.object({
  where: TeamMemberWhereUniqueInputObjectSchema,
});
