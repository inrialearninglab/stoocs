import { z } from 'zod';
import { InvitationUpdateInputObjectSchema } from './objects/InvitationUpdateInput.schema';
import { InvitationUncheckedUpdateInputObjectSchema } from './objects/InvitationUncheckedUpdateInput.schema';
import { InvitationWhereUniqueInputObjectSchema } from './objects/InvitationWhereUniqueInput.schema';

export const InvitationUpdateOneSchema = z.object({
  data: z.union([
    InvitationUpdateInputObjectSchema,
    InvitationUncheckedUpdateInputObjectSchema,
  ]),
  where: InvitationWhereUniqueInputObjectSchema,
});
