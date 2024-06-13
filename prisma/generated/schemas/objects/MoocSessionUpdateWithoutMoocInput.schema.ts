import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { GradeReportUpdateManyWithoutMoocSessionNestedInputObjectSchema } from './GradeReportUpdateManyWithoutMoocSessionNestedInput.schema';
import { AuthorUpdateManyWithoutSessionsNestedInputObjectSchema } from './AuthorUpdateManyWithoutSessionsNestedInput.schema';
import { TeamMemberUpdateManyWithoutSessionsNestedInputObjectSchema } from './TeamMemberUpdateManyWithoutSessionsNestedInput.schema';
import { SessionTypeUpdateOneWithoutMoocSessionNestedInputObjectSchema } from './SessionTypeUpdateOneWithoutMoocSessionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.MoocSessionUpdateWithoutMoocInput> = z
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
    startDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    ended: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gradeReports: z
      .lazy(
        () => GradeReportUpdateManyWithoutMoocSessionNestedInputObjectSchema,
      )
      .optional(),
    authors: z
      .lazy(() => AuthorUpdateManyWithoutSessionsNestedInputObjectSchema)
      .optional(),
    teamMembers: z
      .lazy(() => TeamMemberUpdateManyWithoutSessionsNestedInputObjectSchema)
      .optional(),
    type: z
      .lazy(() => SessionTypeUpdateOneWithoutMoocSessionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MoocSessionUpdateWithoutMoocInputObjectSchema = Schema;
