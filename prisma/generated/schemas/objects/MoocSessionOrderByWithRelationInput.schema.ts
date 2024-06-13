import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GradeReportOrderByRelationAggregateInputObjectSchema } from './GradeReportOrderByRelationAggregateInput.schema';
import { AuthorOrderByRelationAggregateInputObjectSchema } from './AuthorOrderByRelationAggregateInput.schema';
import { TeamMemberOrderByRelationAggregateInputObjectSchema } from './TeamMemberOrderByRelationAggregateInput.schema';
import { PlatformOrderByWithRelationInputObjectSchema } from './PlatformOrderByWithRelationInput.schema';
import { SessionTypeOrderByWithRelationInputObjectSchema } from './SessionTypeOrderByWithRelationInput.schema';
import { MoocOrderByWithRelationInputObjectSchema } from './MoocOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sessionName: z.lazy(() => SortOrderSchema).optional(),
    enrollmentsDetails: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    totalEnrollments: z.lazy(() => SortOrderSchema).optional(),
    platformID: z.lazy(() => SortOrderSchema).optional(),
    typeID: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    moocID: z.lazy(() => SortOrderSchema).optional(),
    gradeReports: z
      .lazy(() => GradeReportOrderByRelationAggregateInputObjectSchema)
      .optional(),
    authors: z
      .lazy(() => AuthorOrderByRelationAggregateInputObjectSchema)
      .optional(),
    teamMembers: z
      .lazy(() => TeamMemberOrderByRelationAggregateInputObjectSchema)
      .optional(),
    platform: z
      .lazy(() => PlatformOrderByWithRelationInputObjectSchema)
      .optional(),
    type: z
      .lazy(() => SessionTypeOrderByWithRelationInputObjectSchema)
      .optional(),
    mooc: z.lazy(() => MoocOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const MoocSessionOrderByWithRelationInputObjectSchema = Schema;
