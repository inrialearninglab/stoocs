import { z } from 'zod';

export const sessionSchema = z.object({
    name: z.string(),
    start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format, should be YYYY-MM-DD'),
    end: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format, should be YYYY-MM-DD')
        .optional(),
    gradecutoffs: z.number(),
    url: z.string(),
});

export const courseSchema = z.object({
    id: z.string(),
    title: z.string(),
    organization: z.string(),
    sessions: z.array(sessionSchema),
});

export const coursesSchema = z.array(courseSchema);
