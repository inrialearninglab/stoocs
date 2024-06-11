export interface GradeReport {
    date: string;
    report: ReportLine[];
}

export interface ReportLine {
    id: number;
    grade: number;
    certificateEligible: string;
    certificateDelivered: string;
    questions: {
        [label: string]: number;
    }[];
    problemGradeReport: ProblemGradeReportLine[];
}

export interface ProblemGradeReportLine {
    label: string;
    score?: number;
    possible?: number
}