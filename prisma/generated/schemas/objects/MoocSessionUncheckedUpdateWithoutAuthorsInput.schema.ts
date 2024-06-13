import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { GradeReportUncheckedUpdateManyWithoutMoocSessionNestedInputObjectSchema } from './GradeReportUncheckedUpdateManyWithoutMoocSessionNestedInput.schema';
import { TeamMemberUncheckedUpdateManyWithoutSessionsNestedInputObjectSchema } from './TeamMemberUncheckedUpdateManyWithoutSessionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.MoocSessionUncheckedUpdateWithoutAuthorsInput> =
  z
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
      platformID: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      typeID: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      moocID: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      gradeReports: z
        .lazy(
          () =>
            GradeReportUncheckedUpdateManyWithoutMoocSessionNestedInputObjectSchema,
        )
        .optional(),
      teamMembers: z
        .lazy(
          () =>
            TeamMemberUncheckedUpdateManyWithoutSessionsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MoocSessionUncheckedUpdateWithoutAuthorsInputObjectSchema = Schema;
