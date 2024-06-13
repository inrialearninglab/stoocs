import { PrismaClient } from '@prisma/client';
import { getEnrollments } from "./enrollments/enrollments.js";
import { getReport } from "./gradeReports/gradeReports.js";

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
    const gradeReportQuestionLine = reportLine.questions.map((question) => {
        return {
            userID: reportLine.id,
            label: question.label,
            score: question.score
        }
    });

    const gradeReportProblemLine = reportLine.problemGradeReport.map((problem) => {
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
        gradeReportQuestionLines: {
            create: gradeReportQuestionLine
        },
        gradeReportProblemLines: {
            create: gradeReportProblemLine
        }
    }

    gradeReportData.gradeReportLines.create.push(gradeReportLine);
}

const moocData = [
    {
        title: 'Reproducible Research II: Practices and tools for managing computations and data',
        organization: 'inria',
        sessions: {
            create: [
                {
                    sessionName: 'session01',
                    enrollmentsDetails: enrollments,
                    startDate: new Date('2024-05-16'),
                    gradeReports: {
                        create: [gradeReportData]
                    }
                }
            ],
        },
    }
];

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

async function seed() {
    console.log('Start seeding...');
    
    for (const mooc of moocData) {
        const res = await prisma.mooc.create({
            data: mooc,
        })
        
        console.log(`created mooc with id: ${res.id}`)
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

