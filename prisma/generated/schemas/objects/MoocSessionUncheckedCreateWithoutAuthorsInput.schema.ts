import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { GradeReportUncheckedCreateNestedManyWithoutMoocSessionInputObjectSchema } from './GradeReportUncheckedCreateNestedManyWithoutMoocSessionInput.schema';
import { TeamMemberUncheckedCreateNestedManyWithoutSessionsInputObjectSchema } from './TeamMemberUncheckedCreateNestedManyWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.MoocSessionUncheckedCreateWithoutAuthorsInput> =
  z
    .object({
      id: z.string().optional(),
      sessionName: z.string(),
      enrollmentsDetails: z
        .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
      totalEnrollments: z.number().optional(),
      startDate: z.coerce.date().optional().nullable(),
      ended: z.boolean().optional(),
      typeID: z.string().optional().nullable(),
      moocID: z.string(),
      gradeReports: z
        .lazy(
          () =>
            GradeReportUncheckedCreateNestedManyWithoutMoocSessionInputObjectSchema,
        )
        .optional(),
      teamMembers: z
        .lazy(
          () =>
            TeamMemberUncheckedCreateNestedManyWithoutSessionsInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema = Schema;
