import { FetchError } from 'ofetch';
import type { Session } from '~/types';

type EnrollmentsUpdate = Pick<Session, 'enrollmentsDetails' | 'id'>;
export async function postEnrollments(body: FormData, id: string): Promise<{ data?: EnrollmentsUpdate , error?: FetchError }> {
    try {
        const data = await $fetch<EnrollmentsUpdate>(`/api/enrollments/${id}`, {
            method: 'POST',
            body,
        });

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

type ReportUpdate = Pick<Session, 'gradeReports' | 'id'>;
export async function postGradeReports(body: FormData, id: string): Promise<{ data?: ReportUpdate, error?: FetchError }> {
    try {
        const data = await $fetch<ReportUpdate>(`/api/reports/${id}`, {
            method: 'POST',
            body,
        });

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}
