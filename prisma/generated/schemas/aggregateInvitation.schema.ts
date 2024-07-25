import { z } from 'zod';
import { InvitationOrderByWithRelationInputObjectSchema } from './objects/InvitationOrderByWithRelationInput.schema';
import { InvitationWhereInputObjectSchema } from './objects/InvitationWhereInput.schema';
import { InvitationWhereUniqueInputObjectSchema } from './objects/InvitationWhereUniqueInput.schema';
import { InvitationCountAggregateInputObjectSchema } from './objects/InvitationCountAggregateInput.schema';
import { InvitationMinAggregateInputObjectSchema } from './objects/InvitationMinAggregateInput.schema';
import { InvitationMaxAggregateInputObjectSchema } from './objects/InvitationMaxAggregateInput.schema';

export const InvitationAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), InvitationCountAggregateInputObjectSchema])
    .optional(),
  _min: InvitationMinAggregateInputObjectSchema.optional(),
  _max: InvitationMaxAggregateInputObjectSchema.optional(),
});
