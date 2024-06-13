import { z } from 'zod';
import { SessionTypeWhereUniqueInputObjectSchema } from './objects/SessionTypeWhereUniqueInput.schema';
import { SessionTypeCreateInputObjectSchema } from './objects/SessionTypeCreateInput.schema';
import { SessionTypeUncheckedCreateInputObjectSchema } from './objects/SessionTypeUncheckedCreateInput.schema';
import { SessionTypeUpdateInputObjectSchema } from './objects/SessionTypeUpdateInput.schema';
import { SessionTypeUncheckedUpdateInputObjectSchema } from './objects/SessionTypeUncheckedUpdateInput.schema';

export const SessionTypeUpsertSchema = z.object({
  where: SessionTypeWhereUniqueInputObjectSchema,
  create: z.union([
    SessionTypeCreateInputObjectSchema,
    SessionTypeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SessionTypeUpdateInputObjectSchema,
    SessionTypeUncheckedUpdateInputObjectSchema,
  ]),
});
