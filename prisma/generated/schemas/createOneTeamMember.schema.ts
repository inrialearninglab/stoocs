import { z } from 'zod';
import { TeamMemberCreateInputObjectSchema } from './objects/TeamMemberCreateInput.schema';
import { TeamMemberUncheckedCreateInputObjectSchema } from './objects/TeamMemberUncheckedCreateInput.schema';

export const TeamMemberCreateOneSchema = z.object({
  data: z.union([
    TeamMemberCreateInputObjectSchema,
    TeamMemberUncheckedCreateInputObjectSchema,
  ]),
});
