import { z } from 'zod';
import { InvitationWhereInputObjectSchema } from './objects/InvitationWhereInput.schema';

export const InvitationDeleteManySchema = z.object({
  where: InvitationWhereInputObjectSchema.optional(),
});
