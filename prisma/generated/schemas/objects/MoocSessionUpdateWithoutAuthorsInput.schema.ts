import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { GradeReportUpdateManyWithoutMoocSessionNestedInputObjectSchema } from './GradeReportUpdateManyWithoutMoocSessionNestedInput.schema';
import { TeamMemberUpdateManyWithoutSessionsNestedInputObjectSchema } from './TeamMemberUpdateManyWithoutSessionsNestedInput.schema';
import { PlatformUpdateOneRequiredWithoutMoocSessionNestedInputObjectSchema } from './PlatformUpdateOneRequiredWithoutMoocSessionNestedInput.schema';
import { SessionTypeUpdateOneWithoutMoocSessionNestedInputObjectSchema } from './SessionTypeUpdateOneWithoutMoocSessionNestedInput.schema';
import { MoocUpdateOneRequiredWithoutSessionsNestedInputObjectSchema } from './MoocUpdateOneRequiredWithoutSessionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.MoocSessionUpdateWithoutAuthorsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sessionName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    enrollmentsDetails: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    totalEnrollments: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gradeReports: z
      .lazy(
        () => GradeReportUpdateManyWithoutMoocSessionNestedInputObjectSchema,
      )
      .optional(),
    teamMembers: z
      .lazy(() => TeamMemberUpdateManyWithoutSessionsNestedInputObjectSchema)
      .optional(),
    platform: z
      .lazy(
        () =>
          PlatformUpdateOneRequiredWithoutMoocSessionNestedInputObjectSchema,
      )
      .optional(),
    type: z
      .lazy(() => SessionTypeUpdateOneWithoutMoocSessionNestedInputObjectSchema)
      .optional(),
    mooc: z
      .lazy(() => MoocUpdateOneRequiredWithoutSessionsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MoocSessionUpdateWithoutAuthorsInputObjectSchema = Schema;
