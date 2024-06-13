import { z } from 'zod';
import { PlatformCreateManyInputObjectSchema } from './objects/PlatformCreateManyInput.schema';

export const PlatformCreateManySchema = z.object({
  data: z.union([
    PlatformCreateManyInputObjectSchema,
    z.array(PlatformCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
