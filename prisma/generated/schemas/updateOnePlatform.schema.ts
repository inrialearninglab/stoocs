import { z } from 'zod';
import { PlatformUpdateInputObjectSchema } from './objects/PlatformUpdateInput.schema';
import { PlatformUncheckedUpdateInputObjectSchema } from './objects/PlatformUncheckedUpdateInput.schema';
import { PlatformWhereUniqueInputObjectSchema } from './objects/PlatformWhereUniqueInput.schema';

export const PlatformUpdateOneSchema = z.object({
  data: z.union([
    PlatformUpdateInputObjectSchema,
    PlatformUncheckedUpdateInputObjectSchema,
  ]),
  where: PlatformWhereUniqueInputObjectSchema,
});
