import { z } from 'zod';
import { TeamMemberWhereUniqueInputObjectSchema } from './objects/TeamMemberWhereUniqueInput.schema';
import { TeamMemberCreateInputObjectSchema } from './objects/TeamMemberCreateInput.schema';
import { TeamMemberUncheckedCreateInputObjectSchema } from './objects/TeamMemberUncheckedCreateInput.schema';
import { TeamMemberUpdateInputObjectSchema } from './objects/TeamMemberUpdateInput.schema';
import { TeamMemberUncheckedUpdateInputObjectSchema } from './objects/TeamMemberUncheckedUpdateInput.schema';

export const TeamMemberUpsertSchema = z.object({
  where: TeamMemberWhereUniqueInputObjectSchema,
  create: z.union([
    TeamMemberCreateInputObjectSchema,
    TeamMemberUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TeamMemberUpdateInputObjectSchema,
    TeamMemberUncheckedUpdateInputObjectSchema,
  ]),
});
