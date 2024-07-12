import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { GradeReportCreateNestedManyWithoutMoocSessionInputObjectSchema } from './GradeReportCreateNestedManyWithoutMoocSessionInput.schema';
import { TeamMemberCreateNestedManyWithoutSessionsInputObjectSchema } from './TeamMemberCreateNestedManyWithoutSessionsInput.schema';
import { SessionTypeCreateNestedOneWithoutMoocSessionInputObjectSchema } from './SessionTypeCreateNestedOneWithoutMoocSessionInput.schema';
import { MoocCreateNestedOneWithoutSessionsInputObjectSchema } from './MoocCreateNestedOneWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.MoocSessionCreateWithoutAuthorsInput> = z
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
    gradeReports: z
      .lazy(
        () => GradeReportCreateNestedManyWithoutMoocSessionInputObjectSchema,
      )
      .optional(),
    teamMembers: z
      .lazy(() => TeamMemberCreateNestedManyWithoutSessionsInputObjectSchema)
      .optional(),
    type: z
      .lazy(() => SessionTypeCreateNestedOneWithoutMoocSessionInputObjectSchema)
      .optional(),
    mooc: z.lazy(() => MoocCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict();

export const MoocSessionCreateWithoutAuthorsInputObjectSchema = Schema;
