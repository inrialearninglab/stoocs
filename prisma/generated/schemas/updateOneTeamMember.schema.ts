import { z } from 'zod';
import { TeamMemberUpdateInputObjectSchema } from './objects/TeamMemberUpdateInput.schema';
import { TeamMemberUncheckedUpdateInputObjectSchema } from './objects/TeamMemberUncheckedUpdateInput.schema';
import { TeamMemberWhereUniqueInputObjectSchema } from './objects/TeamMemberWhereUniqueInput.schema';

export const TeamMemberUpdateOneSchema = z.object({
  data: z.union([
    TeamMemberUpdateInputObjectSchema,
    TeamMemberUncheckedUpdateInputObjectSchema,
  ]),
  where: TeamMemberWhereUniqueInputObjectSchema,
});
