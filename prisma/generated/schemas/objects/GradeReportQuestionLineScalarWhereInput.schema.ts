import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportQuestionLineScalarWhereInputObjectSchema),
        z
          .lazy(() => GradeReportQuestionLineScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportQuestionLineScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportQuestionLineScalarWhereInputObjectSchema),
        z
          .lazy(() => GradeReportQuestionLineScalarWhereInputObjectSchema)
          .array(),
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
  })
  .strict();

export const GradeReportQuestionLineScalarWhereInputObjectSchema = Schema;
