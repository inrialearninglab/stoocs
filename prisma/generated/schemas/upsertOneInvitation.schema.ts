import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './objects/InvitationWhereUniqueInput.schema';
import { InvitationCreateInputObjectSchema } from './objects/InvitationCreateInput.schema';
import { InvitationUncheckedCreateInputObjectSchema } from './objects/InvitationUncheckedCreateInput.schema';
import { InvitationUpdateInputObjectSchema } from './objects/InvitationUpdateInput.schema';
import { InvitationUncheckedUpdateInputObjectSchema } from './objects/InvitationUncheckedUpdateInput.schema';

export const InvitationUpsertSchema = z.object({
  where: InvitationWhereUniqueInputObjectSchema,
  create: z.union([
    InvitationCreateInputObjectSchema,
    InvitationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    InvitationUpdateInputObjectSchema,
    InvitationUncheckedUpdateInputObjectSchema,
  ]),
});
