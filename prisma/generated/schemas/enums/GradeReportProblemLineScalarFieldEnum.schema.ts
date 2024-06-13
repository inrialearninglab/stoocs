import { z } from 'zod';

export const GradeReportProblemLineScalarFieldEnumSchema = z.enum([
  'userID',
  'label',
  'score',
  'possible',
  'lineID',
]);
