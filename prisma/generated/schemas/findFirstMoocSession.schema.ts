import { z } from 'zod';
import { MoocSessionOrderByWithRelationInputObjectSchema } from './objects/MoocSessionOrderByWithRelationInput.schema';
import { MoocSessionWhereInputObjectSchema } from './objects/MoocSessionWhereInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './objects/MoocSessionWhereUniqueInput.schema';
import { MoocSessionScalarFieldEnumSchema } from './enums/MoocSessionScalarFieldEnum.schema';

export const MoocSessionFindFirstSchema = z.object({
  orderBy: z
    .union([
      MoocSessionOrderByWithRelationInputObjectSchema,
      MoocSessionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MoocSessionWhereInputObjectSchema.optional(),
  cursor: MoocSessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MoocSessionScalarFieldEnumSchema).optional(),
});
