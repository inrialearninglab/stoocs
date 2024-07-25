import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './objects/InvitationWhereUniqueInput.schema';

export const InvitationFindUniqueSchema = z.object({
  where: InvitationWhereUniqueInputObjectSchema,
});
