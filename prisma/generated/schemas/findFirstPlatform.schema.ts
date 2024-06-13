import { z } from 'zod';
import { PlatformOrderByWithRelationInputObjectSchema } from './objects/PlatformOrderByWithRelationInput.schema';
import { PlatformWhereInputObjectSchema } from './objects/PlatformWhereInput.schema';
import { PlatformWhereUniqueInputObjectSchema } from './objects/PlatformWhereUniqueInput.schema';
import { PlatformScalarFieldEnumSchema } from './enums/PlatformScalarFieldEnum.schema';

export const PlatformFindFirstSchema = z.object({
  orderBy: z
    .union([
      PlatformOrderByWithRelationInputObjectSchema,
      PlatformOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PlatformWhereInputObjectSchema.optional(),
  cursor: PlatformWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PlatformScalarFieldEnumSchema).optional(),
});
