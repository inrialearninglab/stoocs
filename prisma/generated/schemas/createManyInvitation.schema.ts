import { z } from 'zod';
import { InvitationCreateManyInputObjectSchema } from './objects/InvitationCreateManyInput.schema';

export const InvitationCreateManySchema = z.object({
  data: z.union([
    InvitationCreateManyInputObjectSchema,
    z.array(InvitationCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
