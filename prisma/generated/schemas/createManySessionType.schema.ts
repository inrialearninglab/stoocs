import { z } from 'zod';
import { SessionTypeCreateManyInputObjectSchema } from './objects/SessionTypeCreateManyInput.schema';

export const SessionTypeCreateManySchema = z.object({
  data: z.union([
    SessionTypeCreateManyInputObjectSchema,
    z.array(SessionTypeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
