import { z } from 'zod';
import { GradeReportQuestionOrderByWithRelationInputObjectSchema } from './objects/GradeReportQuestionOrderByWithRelationInput.schema';
import { GradeReportQuestionWhereInputObjectSchema } from './objects/GradeReportQuestionWhereInput.schema';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionWhereUniqueInput.schema';
import { GradeReportQuestionScalarFieldEnumSchema } from './enums/GradeReportQuestionScalarFieldEnum.schema';

export const GradeReportQuestionFindFirstSchema = z.object({
  orderBy: z
    .union([
      GradeReportQuestionOrderByWithRelationInputObjectSchema,
      GradeReportQuestionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportQuestionWhereInputObjectSchema.optional(),
  cursor: GradeReportQuestionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GradeReportQuestionScalarFieldEnumSchema).optional(),
});
