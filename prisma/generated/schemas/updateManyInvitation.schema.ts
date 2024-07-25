import { z } from 'zod';
import { InvitationUpdateManyMutationInputObjectSchema } from './objects/InvitationUpdateManyMutationInput.schema';
import { InvitationWhereInputObjectSchema } from './objects/InvitationWhereInput.schema';

export const InvitationUpdateManySchema = z.object({
  data: InvitationUpdateManyMutationInputObjectSchema,
  where: InvitationWhereInputObjectSchema.optional(),
});
