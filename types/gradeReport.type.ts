export interface GradeReport {
    id: string;
    date: Date;
    totalUsers: number;
    totalActive: number;
    totalCurious: number;
    totalEligible: number;
    score: {
        name: string;
        Moyenne: number;
        Utilisateurs: number;
    }[];
    interest: {
        name: string;
        Participation: number;
        Utilisateurs: number;
    }[];
    threshold: {
        threshold: string;
        Eligible: number;
    }[];
}
export interface GradeReportData {
    date: Date;
    gradeReportLines: GradeReportLine[];
}

export interface GradeReportLine {
    userID: number;
    grade: number;
    certificateEligible: string;
    certificateDelivered: string;
    gradeReportQuestions: GradeReportQuestion[];
    gradeReportProblems: GradeReportProblem[];
}

interface GradeReportQuestion {
    userID: number;
    label: string;
    score: number;
}

interface GradeReportProblem {
    userID: number;
    label: string;
    score?: number;
    possible?: number;
}
