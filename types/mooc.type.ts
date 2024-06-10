export interface Enrollments {
    date: string;
    enrollments: number;
}

export interface Mooc {
   enrollments: Enrollments[];
}