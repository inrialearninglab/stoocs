import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { GradeReportUncheckedCreateNestedManyWithoutMoocSessionInputObjectSchema } from './GradeReportUncheckedCreateNestedManyWithoutMoocSessionInput.schema';
import { AuthorUncheckedCreateNestedManyWithoutSessionsInputObjectSchema } from './AuthorUncheckedCreateNestedManyWithoutSessionsInput.schema';
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

const Schema: z.ZodType<Prisma.MoocSessionUncheckedCreateWithoutTypeInput> = z
  .object({
    id: z.string().optional(),
    sessionName: z.string(),
    enrollmentsDetails: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    totalEnrollments: z.number().optional(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    ended: z.boolean().optional(),
    cutoffs: z.number(),
    moocID: z.string(),
    gradeReports: z
      .lazy(
        () =>
          GradeReportUncheckedCreateNestedManyWithoutMoocSessionInputObjectSchema,
      )
      .optional(),
    authors: z
      .lazy(
        () => AuthorUncheckedCreateNestedManyWithoutSessionsInputObjectSchema,
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

export const MoocSessionUncheckedCreateWithoutTypeInputObjectSchema = Schema;
