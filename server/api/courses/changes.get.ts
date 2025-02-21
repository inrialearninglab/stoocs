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

/*
 * This route is used to get a list of changes between the state of the db & the MOOC list file in GitLab
 */
export default defineEventHandler(async (event) => {
    const res = await $fetch(process.env.COURSES_URL!);

    try {
        const courses = coursesSchema.parse(res);

        const coursesUpdates = [];
        const coursesInserts = [];

        const sessionUpdates = [];
        const sessionInserts = [];

        const presentCourses = [];
        const presentSessions = [];

        for (const course of courses) {
            const existingCourse = await prisma.mooc.findUnique({
                where: { courseNumber_title: { courseNumber: course.id, title: course.name } },
            });

            if (existingCourse) {
                presentCourses.push(existingCourse.id);

                const isNameUpdated = existingCourse.title !== course.name;
                const isOrganizationUpdated = existingCourse.organization !== course.organization;

                if (isNameUpdated || isOrganizationUpdated) {
                    const courseUpdate: {
                        courseNumber: string;
                        title?: {
                            old: string;
                            new: string;
                        };
                        organization?: {
                            old: string;
                            new: string;
                        };
                    } = {
                        courseNumber: course.id,
                    };

                    if (isNameUpdated) {
                        courseUpdate.title = {
                            old: existingCourse.title,
                            new: course.name,
                        };
                    }

                    if (isOrganizationUpdated) {
                        courseUpdate.organization = {
                            old: existingCourse.organization,
                            new: course.organization,
                        };
                    }

                    coursesUpdates.push(courseUpdate);
                }

                const existingSession = await prisma.moocSession.findUnique({
                    where: { moocID_sessionName: { moocID: existingCourse.id, sessionName: course.session } },
                });

                if (existingSession) {
                    presentSessions.push(existingSession.id);

                    const isStartDateUpdated = existingSession.startDate?.toISOString().slice(0, 10) !== course.start;
                    const isEndDateUpdated = existingSession.endDate?.toISOString().slice(0, 10) !== course.end;
                    const isCutoffUpdated = existingSession.cutoffs !== course.gradeCutoffs;

                    if (isStartDateUpdated || isEndDateUpdated || isCutoffUpdated) {
                        const sessionUpdate: {
                            courseNumber: string;
                            sessionName: string;
                            startDate?: {
                                old: string;
                                new: string;
                            };
                            endDate?: {
                                old: string;
                                new: string;
                            };
                            cutoffs?: {
                                old: number;
                                new: number;
                            };
                        } = {
                            courseNumber: course.id,
                            sessionName: course.session,
                        };

                        if (isStartDateUpdated) {
                            sessionUpdate.startDate = {
                                old: existingSession.startDate?.toISOString().slice(0, 10) || '',
                                new: course.start,
                            };
                        }

                        if (isEndDateUpdated) {
                            sessionUpdate.endDate = {
                                old: existingSession.startDate?.toISOString().slice(0, 10) || '',
                                new: course.end,
                            };
                        }

                        if (isCutoffUpdated) {
                            sessionUpdate.cutoffs = {
                                old: existingSession.cutoffs,
                                new: course.gradeCutoffs,
                            };
                        }

                        sessionUpdates.push(sessionUpdate);
                    }
                } else {
                    sessionInserts.push({
                        courseNumber: course.id,
                        sessionName: course.session,
                        startDate: course.start,
                        endDate: course.end,
                        cutoffs: course.gradeCutoffs,
                    });
                }
            } else {
                coursesInserts.push({
                    courseNumber: course.id,
                    title: course.name,
                    organization: course.organization,
                });
                sessionInserts.push({
                    courseNumber: course.id,
                    sessionName: course.session,
                    startDate: course.start,
                    endDate: course.end,
                    cutoffs: course.gradeCutoffs,
                });
            }
        }

        const coursesToDelete = await prisma.mooc.findMany({
            where: {
                NOT: {
                    id: {
                        in: presentCourses,
                    },
                },
            },
            select: {
                courseNumber: true,
                title: true,
            },
        });

        const sessionsToDelete = await prisma.moocSession.findMany({
            where: {
                NOT: {
                    id: {
                        in: presentSessions,
                    },
                },
            },
            select: {
                sessionName: true,
                mooc: {
                    select: {
                        courseNumber: true,
                        title: true,
                    },
                },
            },
        });

        return {
            courses: { updates: coursesUpdates, insertions: coursesInserts, deletions: coursesToDelete },
            sessions: { updates: sessionUpdates, insertions: sessionInserts, deletions: sessionsToDelete },
        };
    } catch (e) {
        console.log('error', e);
        throw createError({ status: 500 });
    }
});
