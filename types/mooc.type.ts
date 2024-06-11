import type { GradeReport } from "./gradeReport.type";

export interface Enrollments {
    date: string;
    enrollments: number;
}

export interface Mooc {
   enrollments?: Enrollments[];
   gradeReport?: GradeReport;
}