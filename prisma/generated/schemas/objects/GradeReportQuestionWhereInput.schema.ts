import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { GradeReportLineRelationFilterObjectSchema } from './GradeReportLineRelationFilter.schema';
import { GradeReportLineWhereInputObjectSchema } from './GradeReportLineWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportQuestionWhereInputObjectSchema),
        z.lazy(() => GradeReportQuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportQuestionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportQuestionWhereInputObjectSchema),
        z.lazy(() => GradeReportQuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    userID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    label: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    score: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    lineID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    gradeReportLine: z
      .union([
        z.lazy(() => GradeReportLineRelationFilterObjectSchema),
        z.lazy(() => GradeReportLineWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GradeReportQuestionWhereInputObjectSchema = Schema;
