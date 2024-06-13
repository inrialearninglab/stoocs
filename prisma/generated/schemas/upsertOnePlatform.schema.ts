import { z } from 'zod';
import { PlatformWhereUniqueInputObjectSchema } from './objects/PlatformWhereUniqueInput.schema';
import { PlatformCreateInputObjectSchema } from './objects/PlatformCreateInput.schema';
import { PlatformUncheckedCreateInputObjectSchema } from './objects/PlatformUncheckedCreateInput.schema';
import { PlatformUpdateInputObjectSchema } from './objects/PlatformUpdateInput.schema';
import { PlatformUncheckedUpdateInputObjectSchema } from './objects/PlatformUncheckedUpdateInput.schema';

export const PlatformUpsertSchema = z.object({
  where: PlatformWhereUniqueInputObjectSchema,
  create: z.union([
    PlatformCreateInputObjectSchema,
    PlatformUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PlatformUpdateInputObjectSchema,
    PlatformUncheckedUpdateInputObjectSchema,
  ]),
});
