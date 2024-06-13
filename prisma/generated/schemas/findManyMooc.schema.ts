import { z } from 'zod';
import { MoocOrderByWithRelationInputObjectSchema } from './objects/MoocOrderByWithRelationInput.schema';
import { MoocWhereInputObjectSchema } from './objects/MoocWhereInput.schema';
import { MoocWhereUniqueInputObjectSchema } from './objects/MoocWhereUniqueInput.schema';
import { MoocScalarFieldEnumSchema } from './enums/MoocScalarFieldEnum.schema';

export const MoocFindManySchema = z.object({
  orderBy: z
    .union([
      MoocOrderByWithRelationInputObjectSchema,
      MoocOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MoocWhereInputObjectSchema.optional(),
  cursor: MoocWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MoocScalarFieldEnumSchema).optional(),
});
