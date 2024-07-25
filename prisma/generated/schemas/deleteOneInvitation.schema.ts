import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './objects/InvitationWhereUniqueInput.schema';

export const InvitationDeleteOneSchema = z.object({
  where: InvitationWhereUniqueInputObjectSchema,
});
