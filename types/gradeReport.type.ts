export interface GradeReport {
    id: string;
    date: Date;
    totalActive: number;
    totalCurious: number;
    totalEligible: number;
    score: {
        name: string;
        'Moyenne': number;
    }[],
    interest: {
        name: string;
        'Participation': number;
    }[],
    threshold: {
        threshold: number;
        'Eligible': number;
    }[]
}
export interface GradeReportData {
    date: Date;
    gradeReportLines: GradeReportLine[]
}

export interface GradeReportLine {
    userID: number;
    grade: number;
    certificateEligible: string;
    certificateDelivered: string;
    gradeReportQuestions: GradeReportQuestion[]
    gradeReportProblems: GradeReportProblem[]
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