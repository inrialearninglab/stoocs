import { z } from 'zod';
import { InvitationWhereInputObjectSchema } from './objects/InvitationWhereInput.schema';
import { InvitationOrderByWithAggregationInputObjectSchema } from './objects/InvitationOrderByWithAggregationInput.schema';
import { InvitationScalarWhereWithAggregatesInputObjectSchema } from './objects/InvitationScalarWhereWithAggregatesInput.schema';
import { InvitationScalarFieldEnumSchema } from './enums/InvitationScalarFieldEnum.schema';

export const InvitationGroupBySchema = z.object({
  where: InvitationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      InvitationOrderByWithAggregationInputObjectSchema,
      InvitationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: InvitationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InvitationScalarFieldEnumSchema),
});
