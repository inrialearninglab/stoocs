import { prisma } from '~/prisma/db';
import { coursesSchema } from '~/schema/courses.schema';

function getUpdatedFields(existing: any, newData: any) {
    const updatedFields: any = {};
    for (const key in newData) {
        if (existing[key] !== newData[key]) {
            updatedFields[key] = { old: existing[key], new: newData[key] };
        }
    }
    return updatedFields;
}

function formatDate(date: Date | null) {
    if (!date) return '';
    return date ? date.toISOString().split('T')[0] : null;
}

export default defineEventHandler(async (event) => {
    const res = await $fetch(process.env.COURSES_URL!);
    const { data: courses, success } = coursesSchema.safeParse(res);

    if (!success || !courses) {
        throw createError({ status: 400, message: 'Invalid courses data' });
    }

    try {
        const coursesUpdates = [];
        const coursesInserts = [];
        const sessionUpdates = [];
        const sessionInserts = [];
        const presentCourses = [];
        const presentSessions = [];

        for (const course of courses) {
            const existingCourse = await prisma.mooc.findUnique({
                where: { courseNumber: course.id },
            });

            if (existingCourse) {
                presentCourses.push(existingCourse.id);
                const courseUpdates = getUpdatedFields(existingCourse, {
                    title: course.title,
                    organization: course.organization,
                });
                if (Object.keys(courseUpdates).length > 0) {
                    coursesUpdates.push({ courseNumber: course.id, ...courseUpdates });
                }
            } else {
                coursesInserts.push({
                    courseNumber: course.id,
                    title: course.title,
                    organization: course.organization,
                });
            }

            for (const session of course.sessions) {
                if (!existingCourse) {
                    sessionInserts.push({
                        courseNumber: course.id,
                        title: course.title,
                        sessionName: session.name,
                        startDate: session.start,
                        endDate: session.end,
                        cutoffs: session.gradecutoffs,
                        url: session.url,
                    });
                } else {
                    const existingSession = await prisma.moocSession.findUnique({
                        where: { moocID_sessionName: { moocID: existingCourse.id, sessionName: session.name } },
                    });

                    if (existingSession) {
                        presentSessions.push(existingSession.id);
                        const sessionUpdatesFields = getUpdatedFields(
                            {
                                startDate: formatDate(existingSession.startDate),
                                endDate: formatDate(existingSession.endDate),
                                cutoffs: existingSession.cutoffs,
                                url: existingSession.url,
                            },
                            {
                                startDate: session.start,
                                endDate: session.end || '',
                                cutoffs: session.gradecutoffs,
                                url: session.url,
                            },
                        );
                        if (Object.keys(sessionUpdatesFields).length > 0) {
                            sessionUpdates.push({
                                courseNumber: course.id,
                                title: course.title,
                                sessionName: session.name,
                                ...sessionUpdatesFields,
                            });
                        }
                    } else {
                        sessionInserts.push({
                            courseNumber: course.id,
                            sessionName: session.name,
                            startDate: session.start,
                            endDate: session.end,
                            cutoffs: session.gradecutoffs,
                            url: session.url,
                        });
                    }
                }
            }
        }

        const coursesToDelete = await prisma.mooc.findMany({
            where: { id: { notIn: presentCourses } },
            select: { courseNumber: true, title: true },
        });

        const sessionsToDelete = await prisma.moocSession.findMany({
            where: { id: { notIn: presentSessions } },
            select: {
                sessionName: true,
                mooc: { select: { courseNumber: true, title: true } },
            },
        });

        return {
            courses: { updates: coursesUpdates, insertions: coursesInserts, deletions: coursesToDelete },
            sessions: { updates: sessionUpdates, insertions: sessionInserts, deletions: sessionsToDelete },
        };
    } catch (e) {
        throw createError({ status: 500 });
    }
});
