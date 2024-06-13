import { z } from 'zod';
import { GradeReportQuestionLineOrderByWithRelationInputObjectSchema } from './objects/GradeReportQuestionLineOrderByWithRelationInput.schema';
import { GradeReportQuestionLineWhereInputObjectSchema } from './objects/GradeReportQuestionLineWhereInput.schema';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionLineWhereUniqueInput.schema';
import { GradeReportQuestionLineScalarFieldEnumSchema } from './enums/GradeReportQuestionLineScalarFieldEnum.schema';

export const GradeReportQuestionLineFindManySchema = z.object({
  orderBy: z
    .union([
      GradeReportQuestionLineOrderByWithRelationInputObjectSchema,
      GradeReportQuestionLineOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportQuestionLineWhereInputObjectSchema.optional(),
  cursor: GradeReportQuestionLineWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GradeReportQuestionLineScalarFieldEnumSchema).optional(),
});
