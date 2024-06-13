import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { GradeReportLineRelationFilterObjectSchema } from './GradeReportLineRelationFilter.schema';
import { GradeReportLineWhereInputObjectSchema } from './GradeReportLineWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportQuestionLineWhereInputObjectSchema),
        z.lazy(() => GradeReportQuestionLineWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportQuestionLineWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportQuestionLineWhereInputObjectSchema),
        z.lazy(() => GradeReportQuestionLineWhereInputObjectSchema).array(),
      ])
      .optional(),
    userID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    label: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    score: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    lineID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    GradeReportLine: z
      .union([
        z.lazy(() => GradeReportLineRelationFilterObjectSchema),
        z.lazy(() => GradeReportLineWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GradeReportQuestionLineWhereInputObjectSchema = Schema;
