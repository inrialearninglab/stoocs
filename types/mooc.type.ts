import type { GradeReport } from './gradeReport.type';
export interface Mooc {
    id: string;
    organization: string;
    title: string;
    description?: string;
    theme?: string;
    target?: string;
    courseNumber: string;
    sessions: Pick<Session, 'id' | 'sessionName' | 'ended'>[];
    pinnedBy: {
        userId: string;
    }[];
}

export interface Session {
    id: string;
    sessionName: string;
    enrollmentsDetails?: {
        date: string;
        enrollments: number;
    }[];
    totalEnrollments?: number;
    startDate?: string;
    endDate?: string;
    ended: boolean;
    cutoffs?: number;
    gradeReports?: Pick<GradeReport, 'id' | 'date'>[];
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
