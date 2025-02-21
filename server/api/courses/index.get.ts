import { Dir } from 'fs';
import { z } from 'zod';
import { prisma } from '~/prisma/db';

const courseSchema = z.object({
    organization: z.string(),
    id: z.string(),
    session: z.string(),
    name: z.string(),
    start: z.string(),
    end: z.string(),
    gradeCutoffs: z.number(),
});

const coursesSchema = z.array(courseSchema);

export default defineEventHandler(async (event) => {
    const res = await $fetch(process.env.COURSES_URL!);

    try {
        const courses = coursesSchema.parse(res);

        const presentCourses = [];
        const presentSessions = [];
        for (const course of courses) {
            const mooc = await prisma.mooc.upsert({
                where: { courseNumber_title: { courseNumber: course.id, title: course.name } },
                update: {
                    title: course.name,
                    organization: course.organization,
                },
                create: {
                    courseNumber: course.id,
                    title: course.name,
                    organization: course.organization,
                },
            });
            const startDate = course.start ? new Date(course.start) : null;
            const endDate = course.end ? new Date(course.end) : null;
            presentCourses.push(mooc.id);

            const session = await prisma.moocSession.upsert({
                where: { moocID_sessionName: { moocID: mooc.id, sessionName: course.session } },
                update: {
                    startDate,
                    endDate,
                    cutoffs: course.gradeCutoffs,
                },
                create: {
                    sessionName: course.session,
                    startDate,
                    endDate,
                    cutoffs: course.gradeCutoffs,
                    mooc: {
                        connect: {
                            courseNumber_title: { courseNumber: course.id, title: course.name },
                        },
                    },
                },
            });

            presentSessions.push(session.id);
        }

        // delete all the courses & sessions that are not in the list
        await prisma.moocSession.deleteMany({
            where: {
                NOT: {
                    id: {
                        in: presentSessions,
                    },
                },
            },
        });

        await prisma.mooc.deleteMany({
            where: {
                NOT: {
                    id: {
                        in: presentCourses,
                    },
                },
            },
        });
    } catch (e) {
        console.log('error', e);
        throw createError({ status: 500 });
    }
});
