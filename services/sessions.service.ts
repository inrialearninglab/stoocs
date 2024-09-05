import type { GradeReport, Mooc, Session } from '~/types';
import type { User } from 'lucia';
import { FetchError } from 'ofetch';

interface SessionData extends Session {
    mooc: Mooc
}

export async function fetchSessionById(id: string): Promise<{ data?: SessionData, error?: FetchError }> {
    try {
        const data = await $fetch<SessionData>(`/api/sessions/${id}`);

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function fetchGradeReport(id: string): Promise<{ data?: GradeReport, error?: FetchError }> {
    try {
        const data = await $fetch<GradeReport>(`/api/reports/${id}`);

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function updateSessionGuest(sessionId: string, guestId: string, add: boolean): Promise<{ data?: User, error?: FetchError }> {
    try {
        console.log('session', sessionId);
        console.log('guest', guestId);
        console.log('add', add);
        const data = await $fetch<User>('/api/sessions/guest', {
            method: 'POST',
            body: { sessionId, guestId, add },
        });

        return { data };
    } catch(e) {
        return { error: e as FetchError };
    }
}
