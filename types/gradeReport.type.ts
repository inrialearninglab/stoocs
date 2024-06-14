// Old version of the GradeReport type
// export interface GradeReport {
//     date: string;
//     report: ReportLine[];
// }
//
// export interface ReportLine {
//     id: number;
//     grade: number;
//     certificateEligible: string;
//     certificateDelivered: string;
//     questions: {
//         label: string;
//         score: number;
//     }[];
//     problemGradeReport: ProblemGradeReportLine[];
// }
//
// export interface ProblemGradeReportLine {
//     label: string;
//     score?: number;
//     possible?: number;
// }

export interface GradeReport {
    id: string;
    date: Date;
    gradeReportLines: GradeReportLine[]
}

export interface GradeReportLine {
    userID: number;
    date: Date;
    certificateEligible: string;
    certificateDelivered: string;
    gradeReportQuestions: GradeReportQuestion[]
    gradeReportProblems: GradeReportProblem[]
}

export interface GradeReportQuestion {
    userID: number;
    label: string;
    score: number;
}

export interface GradeReportProblem {
    userID: number;
    label: string;
    score?: number;
    possible?: number;
}