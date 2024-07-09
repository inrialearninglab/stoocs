import { PrismaClient } from '@prisma/client';
import { getCourses } from "./courses/courses.js";
import { user } from './initialUser';

const prisma = new PrismaClient();

const teamData = [
    {
        firstname: 'Laurence',
        lastname: 'Farhi'
    },
    {
        firstname: 'Marie',
        lastname: 'Collin'
    },
    {
        firstname: 'Madeline',
        lastname: 'Montigny'
    },
    {
        firstname: 'Aurélie',
        lastname: 'Lagarrigue'
    },
    {
        firstname: 'Shérazade',
        lastname: 'Djeballah'
    },
    {
        firstname: 'Sabah',
        lastname: 'Khalfa'
    }
];

const sessionTypeData = [
    { type: 'Session' },
    { type: 'Self paced' },
    { type: 'MAOI' }
];

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

    for (const member of teamData) {
        const res = await prisma.teamMember.create({
            data: member,
        });

        console.log(`created member with id: ${res.id}`)
    }

    for (const sessionType of sessionTypeData) {
        const res = await prisma.sessionType.create({
            data: sessionType,
        });

        console.log(`created sessionType with id: ${res.id}`)
    }
    
    const res = await prisma.user.create({
        data: user
    });
    console.log(`created user with id: ${res.id}`)

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

