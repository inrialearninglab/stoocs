import type { GradeReport } from "./gradeReport.type";

// export interface Enrollments {
//     date: string;
//     enrollments: number;
// }
//
// export interface Mooc {
//    enrollments?: Enrollments[];
//    gradeReport?: GradeReport;
// }

export interface Mooc {
    id: string;
    organization: string;
    title: string;
    description?: string;
    theme?: string;
    target?: string;
    sessions?: Session[];
}

export interface Session {
    id: string;
    sessionName: string;
    enrollmentsDeatils?: any;
    totalEnrollments?: number;
    startDate?: Date;
    ended: boolean;
    gradeReports?: GradeReport;
    authors?: Author[];
    teamMembers?: TeamMember[];
    //type
}

export interface Author {
    id: string;
    firstname: string;
    lastname: string;
}

export interface TeamMember {
    id: string;
    firstname: string;
    lastname: string;
}

export interface SessionType {
    id: string;
    type: string;
}