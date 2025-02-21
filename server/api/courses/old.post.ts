import { z } from 'zod';
import { prisma } from '~/prisma/db';

const courseSchema = z.object({
    title: z.string(),
    courseNumber: z.string(),
    organization: z.string(),
});
const sessionSchema = z.object({
    parentCourse: z.string(),
    sessionName: z.string(),
    ended: z.boolean(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    cutoffs: z.number(),
});
const routeSchema = z.object({
    courses: z.array(courseSchema),
    sessions: z.array(sessionSchema),
});

export default defineEventHandler(async (event) => {
    const { courses, sessions } = await readValidatedBody(event, routeSchema.parse);

    for (const course of courses) {
        await prisma.mooc.upsert({
            where: { courseNumber: course.courseNumber },
            update: {
                title: course.title,
                organization: course.organization,
            },
            create: {
                courseNumber: course.courseNumber,
                title: course.title,
                organization: course.organization,
            },
        });
    }

    for (const session of sessions) {
        const parentCourse = await prisma.mooc.findUnique({
            where: { courseNumber: session.parentCourse },
        });

        if (!parentCourse) return;

        await prisma.moocSession.upsert({
            where: { moocID_sessionName: { moocID: parentCourse.id, sessionName: session.sessionName } },
            update: {
                ended: session.ended,
                startDate: session.startDate,
                endDate: session.endDate,
                cutoffs: session.cutoffs,
                mooc: {
                    connect: {
                        id: parentCourse.id,
                    },
                },
            },
            create: {
                sessionName: session.sessionName,
                ended: session.ended,
                startDate: session.startDate,
                endDate: session.endDate,
                cutoffs: session.cutoffs,
                mooc: {
                    connect: {
                        id: parentCourse.id,
                    },
                },
            },
        });
    }
});
