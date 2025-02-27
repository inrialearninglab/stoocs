import type { GradeReport } from './gradeReport.type';
import type { DateValue } from '@internationalized/date';

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
export interface MoocSession
    extends Pick<Session, 'id' | 'sessionName' | 'ended' | 'startDate' | 'endDate' | 'updatedAt' | 'createdAt'> {
    title: string;
    courseNumber: string;
    totalEnrollments?: number;
    updateDate?: string;
    gradeReports: {
        id: string;
        date: string;
        totalUsers: number;
        totalEligible: number;
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
    url: string;
    updatedAt: string;
    createdAt: string;
    authors?: Author[];
    teamMembers?: TeamMember[];
}

export interface MoocFilter {
    search: string;
    sortBy: 'name' | 'enrollments' | 'status' | 'start' | 'end' | 'updateDate' | 'eligible';
    status: Set<string>;
    moocs: Set<string>;
    startDate: {
        from?: DateValue;
        to?: DateValue;
    };
    endDate: {
        to?: DateValue;
        from?: DateValue;
    };
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
