import { PrismaClient } from '@prisma/client';
import { getEnrollments } from "./enrollments/enrollments.js";
import { getReport } from "./gradeReports/gradeReports.js";
import {getCourses} from "./courses/courses.js";

const prisma = new PrismaClient();

const enrollments = await getEnrollments();
const gradeReport = await getReport();

const gradeReportData = {
    date: new Date('2024-06-13'),
    gradeReportLines: {
        create: []
    }
}

for (const reportLine of gradeReport) {
    const gradeReportQuestions = reportLine.questions.map((question) => {
        return {
            userID: reportLine.id,
            label: question.label,
            score: question.score
        }
    });

    const gradeReportProblems = reportLine.problemGradeReport.map((problem) => {
        return {
            userID: reportLine.id,
            label: problem.label,
            score: problem.score,
            possible: problem.possible
        }
    });

    const gradeReportLine = {
        userID: reportLine.id,
        grade: reportLine.grade,
        certificateEligible: reportLine.certificateEligible,
        certificateDelivered: reportLine.certificateDelivered,
        gradeReportQuestions: {
            create: gradeReportQuestions
        },
        gradeReportProblems: {
            create: gradeReportProblems
        }
    }

    gradeReportData.gradeReportLines.create.push(gradeReportLine);
}

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
            where: { title: course.title }
        });
        if (alreadyExists) return;

        const res = await prisma.mooc.create({
            data: course
        });

        console.log(`Created mooc with id ${res.id}`);
    }

    for (const session of sessions) {
        const parentCourse = await prisma.mooc.findUnique({
            where: { title: session.parentCourse }
        });

        if (parentCourse) {
            const res = await prisma.moocSession.create({
                data: {
                    sessionName: session.sessionName,
                    ended: session.ended,
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

    const moocName = 'Reproducible Research II: Practices and tools for managing computations and data';
    const mooc = await prisma.mooc.findUnique({
        where: { title: moocName }
    });

    if (mooc) {
        const session = await prisma.moocSession.findFirst({
            where: { moocID: mooc.id }
        });

        if (session) {
            const res = await prisma.moocSession.update({
                where: { id: session.id },
                data: {
                    enrollmentsDetails: enrollments,
                    startDate: new Date('2024-05-16'),
                    gradeReports: {
                        create: [gradeReportData]
                    }
                }
            });

            console.log(`Updated session with id ${res.id}`);
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

