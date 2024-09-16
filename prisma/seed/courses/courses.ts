import { readFile } from 'fs';

// read the courses.json file and seed the database with the courses
export async function getCourses(): Promise<{ courses: Course[], sessions: Session[] }> {
    return new Promise((resolve, reject) => {
        readFile('prisma/seed/courses/courses.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            const jsonData = JSON.parse(data);
            const courses = jsonData.map((course: any) => {
                return {
                    title: course['Course Display Name:'],
                    courseNumber: course['Course Number:'],
                    organization: course['Organization:'],
                }
            });

            const sessions = jsonData.map((session: any) => {
                const startDateString = session['Course Start Date:'].replace(' at ', ' ');
                const startDate = new Date(startDateString);

                const endDateString = session['Course End Date:'].replace(' at ', ' ');
                const endDate = new Date(endDateString);

                let cutoffs = session['Grade Cutoffs:'];
                cutoffs = Number(cutoffs.split(':')[1].trim());

                return {
                    parentCourse: session['Course Number:'],
                    sessionName: session['Course Name:'],
                    ended: session['Has the course ended?'] === 'Yes',
                    startDate,
                    endDate,
                    cutoffs
                }
            })
            resolve({ courses, sessions })
        });
    });
}

interface Course {
    title: string;
    courseNumber: string;
    organization: string;
}

interface Session {
    parentCourse: string;
    sessionName: string;
    ended: boolean;
    startDate: Date;
    endDate: Date;
    cutoffs: number;
}
