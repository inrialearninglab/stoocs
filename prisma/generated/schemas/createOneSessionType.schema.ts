import { z } from 'zod';
import { SessionTypeCreateInputObjectSchema } from './objects/SessionTypeCreateInput.schema';
import { SessionTypeUncheckedCreateInputObjectSchema } from './objects/SessionTypeUncheckedCreateInput.schema';

export const SessionTypeCreateOneSchema = z.object({
  data: z.union([
    SessionTypeCreateInputObjectSchema,
    SessionTypeUncheckedCreateInputObjectSchema,
  ]),
});
