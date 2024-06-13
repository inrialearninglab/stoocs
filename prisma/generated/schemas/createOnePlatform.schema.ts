import { z } from 'zod';
import { PlatformCreateInputObjectSchema } from './objects/PlatformCreateInput.schema';
import { PlatformUncheckedCreateInputObjectSchema } from './objects/PlatformUncheckedCreateInput.schema';

export const PlatformCreateOneSchema = z.object({
  data: z.union([
    PlatformCreateInputObjectSchema,
    PlatformUncheckedCreateInputObjectSchema,
  ]),
});
