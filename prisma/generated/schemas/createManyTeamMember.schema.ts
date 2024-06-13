import { z } from 'zod';
import { TeamMemberCreateManyInputObjectSchema } from './objects/TeamMemberCreateManyInput.schema';

export const TeamMemberCreateManySchema = z.object({
  data: z.union([
    TeamMemberCreateManyInputObjectSchema,
    z.array(TeamMemberCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
