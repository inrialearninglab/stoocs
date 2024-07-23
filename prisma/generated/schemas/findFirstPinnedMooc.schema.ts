import { z } from 'zod';
import { PinnedMoocOrderByWithRelationInputObjectSchema } from './objects/PinnedMoocOrderByWithRelationInput.schema';
import { PinnedMoocWhereInputObjectSchema } from './objects/PinnedMoocWhereInput.schema';
import { PinnedMoocWhereUniqueInputObjectSchema } from './objects/PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocScalarFieldEnumSchema } from './enums/PinnedMoocScalarFieldEnum.schema';

export const PinnedMoocFindFirstSchema = z.object({
  orderBy: z
    .union([
      PinnedMoocOrderByWithRelationInputObjectSchema,
      PinnedMoocOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PinnedMoocWhereInputObjectSchema.optional(),
  cursor: PinnedMoocWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PinnedMoocScalarFieldEnumSchema).optional(),
});
