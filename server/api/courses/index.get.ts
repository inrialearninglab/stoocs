import { prisma } from '#shared/prisma/db';
import { coursesSchema } from '#shared/schema/courses.schema';

export default defineEventHandler(async (event) => {
    const res = await $fetch(process.env.COURSES_URL!);

    try {
        const courses = coursesSchema.parse(res);

        const presentCourses = [];
        const presentSessions = [];
        for (const course of courses) {
            const mooc = await prisma.mooc.upsert({
                where: { courseNumber: course.id },
                update: {
                    title: course.title,
                    organization: course.organization,
                },
                create: {
                    courseNumber: course.id,
                    title: course.title,
                    organization: course.organization,
                },
            });
            for (const session of course.sessions) {
                const startDate = session.start ? new Date(session.start) : null;
                const endDate = session.end ? new Date(session.end) : null;
                presentCourses.push(mooc.id);

                const res = await prisma.moocSession.upsert({
                    where: { moocID_sessionName: { moocID: mooc.id, sessionName: session.name } },
                    update: {
                        startDate,
                        endDate,
                        cutoffs: session.gradecutoffs,
                        url: session.url,
                    },
                    create: {
                        sessionName: session.name,
                        startDate,
                        endDate,
                        cutoffs: session.gradecutoffs,
                        url: session.url,
                        mooc: {
                            connect: {
                                courseNumber: course.id,
                            },
                        },
                    },
                });

                presentSessions.push(res.id);
            }
        }

        // Delete linked grade reports
        await prisma.gradeReport.deleteMany({
            where: {
                NOT: {
                    moocSessionId: {
                        in: presentSessions,
                    },
                },
            },
        });

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
