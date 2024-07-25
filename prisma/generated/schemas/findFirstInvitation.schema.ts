import { z } from 'zod';
import { InvitationOrderByWithRelationInputObjectSchema } from './objects/InvitationOrderByWithRelationInput.schema';
import { InvitationWhereInputObjectSchema } from './objects/InvitationWhereInput.schema';
import { InvitationWhereUniqueInputObjectSchema } from './objects/InvitationWhereUniqueInput.schema';
import { InvitationScalarFieldEnumSchema } from './enums/InvitationScalarFieldEnum.schema';

export const InvitationFindFirstSchema = z.object({
  orderBy: z
    .union([
      InvitationOrderByWithRelationInputObjectSchema,
      InvitationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InvitationWhereInputObjectSchema.optional(),
  cursor: InvitationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InvitationScalarFieldEnumSchema).optional(),
});
