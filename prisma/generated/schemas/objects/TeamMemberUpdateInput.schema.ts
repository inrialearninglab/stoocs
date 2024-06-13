import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MoocSessionUpdateManyWithoutTeamMembersNestedInputObjectSchema } from './MoocSessionUpdateManyWithoutTeamMembersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    firstname: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lastName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sessions: z
      .lazy(
        () => MoocSessionUpdateManyWithoutTeamMembersNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TeamMemberUpdateInputObjectSchema = Schema;
