import type { GradeReport } from './gradeReport.type';
export interface Mooc {
    id: string;
    organization: string;
    title: string;
    description?: string;
    theme?: string;
    target?: string;
    courseNumber: string;
    sessions: MoocSession[];
    pinnedBy: {
        userId: string;
    }[];
}
export interface MoocSession extends Pick<Session, 'id' | 'sessionName' | 'ended' | 'startDate' | 'endDate'> {}

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
    url: string;
    authors?: Author[];
    teamMembers?: TeamMember[];
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
