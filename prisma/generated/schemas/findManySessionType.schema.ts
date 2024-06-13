import { z } from 'zod';
import { SessionTypeOrderByWithRelationInputObjectSchema } from './objects/SessionTypeOrderByWithRelationInput.schema';
import { SessionTypeWhereInputObjectSchema } from './objects/SessionTypeWhereInput.schema';
import { SessionTypeWhereUniqueInputObjectSchema } from './objects/SessionTypeWhereUniqueInput.schema';
import { SessionTypeScalarFieldEnumSchema } from './enums/SessionTypeScalarFieldEnum.schema';

export const SessionTypeFindManySchema = z.object({
  orderBy: z
    .union([
      SessionTypeOrderByWithRelationInputObjectSchema,
      SessionTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SessionTypeWhereInputObjectSchema.optional(),
  cursor: SessionTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SessionTypeScalarFieldEnumSchema).optional(),
});
