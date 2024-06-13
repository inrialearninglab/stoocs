import { z } from 'zod';
import { SessionTypeUpdateInputObjectSchema } from './objects/SessionTypeUpdateInput.schema';
import { SessionTypeUncheckedUpdateInputObjectSchema } from './objects/SessionTypeUncheckedUpdateInput.schema';
import { SessionTypeWhereUniqueInputObjectSchema } from './objects/SessionTypeWhereUniqueInput.schema';

export const SessionTypeUpdateOneSchema = z.object({
  data: z.union([
    SessionTypeUpdateInputObjectSchema,
    SessionTypeUncheckedUpdateInputObjectSchema,
  ]),
  where: SessionTypeWhereUniqueInputObjectSchema,
});
