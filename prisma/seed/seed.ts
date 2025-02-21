import { PrismaClient } from '@prisma/client';
import { getCourses } from './courses/courses.js';
import { users } from './initialUser';

const prisma = new PrismaClient();

const { courses, sessions } = await getCourses();

async function seed() {
    console.log('Start seeding...');

    for (const course of courses) {
        const res = await prisma.mooc.upsert({
            where: { courseNumber_title: { courseNumber: course.courseNumber, title: course.title } },
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

        console.log(`Created mooc with id ${res.id}`);
    }

    for (const session of sessions) {
        const parentCourse = await prisma.mooc.findUnique({
            where: { courseNumber_title: { courseNumber: session.parentCourse, title: session.parentCourseName } },
        });

        if (parentCourse) {
            const res = await prisma.moocSession.upsert({
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
            console.log(`Created session with id ${res.id}`);
        }
    }

    const ILLRole = await prisma.role.create({
        data: {
            name: 'ILL',
        },
    });
    await prisma.role.create({
        data: {
            name: 'Guest',
        },
    });

    for (const user of users) {
        const res = await prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                password: user.password,
                firstname: user.firstname,
                lastname: user.lastname,
                role: {
                    connect: { name: user.rolename ?? ILLRole.name },
                },
            },
        });
        console.log(`created user with id: ${res.id}`);
    }
    console.log('Seeding finished.');
}

seed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
