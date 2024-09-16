import { PrismaClient } from '@prisma/client';
import { getCourses } from "./courses/courses.js";
import { users } from './initialUser';

const prisma = new PrismaClient();

const { courses, sessions } = await getCourses();

async function seed() {
    console.log('Start seeding...');

    for (const course of courses) {
        const alreadyExists = await prisma.mooc.findUnique({
            where: { courseNumber: course.courseNumber }
        });

        // update the course here
        if (alreadyExists) return;

        const res = await prisma.mooc.create({
            data: course
        });

        console.log(`Created mooc with id ${res.id}`);
    }

    for (const session of sessions) {
        const parentCourse = await prisma.mooc.findUnique({
            where: { courseNumber: session.parentCourse }
        });

        if (parentCourse) {
            const res = await prisma.moocSession.create({
                data: {
                    sessionName: session.sessionName,
                    ended: session.ended,
                    startDate: session.startDate,
                    endDate: session.endDate,
                    cutoffs: session.cutoffs,
                    mooc: {
                        connect: {
                            id: parentCourse.id
                        }
                    }
                }
            });
            console.log(`Created session with id ${res.id}`);
        }
    }

    for (const user of users) {
        const res = await prisma.user.create({
            data: user
        });
        console.log(`created user with id: ${res.id}`)
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
        process.exit(1)
    });
