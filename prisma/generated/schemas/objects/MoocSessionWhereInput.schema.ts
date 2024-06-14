import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { GradeReportListRelationFilterObjectSchema } from './GradeReportListRelationFilter.schema';
import { AuthorListRelationFilterObjectSchema } from './AuthorListRelationFilter.schema';
import { TeamMemberListRelationFilterObjectSchema } from './TeamMemberListRelationFilter.schema';
import { SessionTypeRelationFilterObjectSchema } from './SessionTypeRelationFilter.schema';
import { SessionTypeWhereInputObjectSchema } from './SessionTypeWhereInput.schema';
import { MoocRelationFilterObjectSchema } from './MoocRelationFilter.schema';
import { MoocWhereInputObjectSchema } from './MoocWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MoocSessionWhereInputObjectSchema),
        z.lazy(() => MoocSessionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MoocSessionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MoocSessionWhereInputObjectSchema),
        z.lazy(() => MoocSessionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sessionName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    enrollmentsDetails: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    totalEnrollments: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    startDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    endDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    ended: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    typeID: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    moocID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    gradeReports: z
      .lazy(() => GradeReportListRelationFilterObjectSchema)
      .optional(),
    authors: z.lazy(() => AuthorListRelationFilterObjectSchema).optional(),
    teamMembers: z
      .lazy(() => TeamMemberListRelationFilterObjectSchema)
      .optional(),
    type: z
      .union([
        z.lazy(() => SessionTypeRelationFilterObjectSchema),
        z.lazy(() => SessionTypeWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    mooc: z
      .union([
        z.lazy(() => MoocRelationFilterObjectSchema),
        z.lazy(() => MoocWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MoocSessionWhereInputObjectSchema = Schema;
