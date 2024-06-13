import { z } from 'zod';
import { GradeReportLineOrderByWithRelationInputObjectSchema } from './objects/GradeReportLineOrderByWithRelationInput.schema';
import { GradeReportLineWhereInputObjectSchema } from './objects/GradeReportLineWhereInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './objects/GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineScalarFieldEnumSchema } from './enums/GradeReportLineScalarFieldEnum.schema';

export const GradeReportLineFindManySchema = z.object({
  orderBy: z
    .union([
      GradeReportLineOrderByWithRelationInputObjectSchema,
      GradeReportLineOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportLineWhereInputObjectSchema.optional(),
  cursor: GradeReportLineWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GradeReportLineScalarFieldEnumSchema).optional(),
});
