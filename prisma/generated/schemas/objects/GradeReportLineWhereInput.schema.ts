import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { GradeReportQuestionLineListRelationFilterObjectSchema } from './GradeReportQuestionLineListRelationFilter.schema';
import { GradeReportProblemLineListRelationFilterObjectSchema } from './GradeReportProblemLineListRelationFilter.schema';
import { GradeReportRelationFilterObjectSchema } from './GradeReportRelationFilter.schema';
import { GradeReportWhereInputObjectSchema } from './GradeReportWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportLineWhereInputObjectSchema),
        z.lazy(() => GradeReportLineWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportLineWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportLineWhereInputObjectSchema),
        z.lazy(() => GradeReportLineWhereInputObjectSchema).array(),
      ])
      .optional(),
    userID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    grade: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    certificateEligible: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    certificateDelivered: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    gradeReportID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    gradeReportQuestionLines: z
      .lazy(() => GradeReportQuestionLineListRelationFilterObjectSchema)
      .optional(),
    gradeReportProblemLines: z
      .lazy(() => GradeReportProblemLineListRelationFilterObjectSchema)
      .optional(),
    gradeReport: z
      .union([
        z.lazy(() => GradeReportRelationFilterObjectSchema),
        z.lazy(() => GradeReportWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GradeReportLineWhereInputObjectSchema = Schema;
