import { z } from 'zod';
import { TeamMemberWhereUniqueInputObjectSchema } from './objects/TeamMemberWhereUniqueInput.schema';

export const TeamMemberFindUniqueSchema = z.object({
  where: TeamMemberWhereUniqueInputObjectSchema,
});
