import { z } from 'zod';
import { InvitationCreateInputObjectSchema } from './objects/InvitationCreateInput.schema';
import { InvitationUncheckedCreateInputObjectSchema } from './objects/InvitationUncheckedCreateInput.schema';

export const InvitationCreateOneSchema = z.object({
  data: z.union([
    InvitationCreateInputObjectSchema,
    InvitationUncheckedCreateInputObjectSchema,
  ]),
});
