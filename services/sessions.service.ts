import type { GradeReport, Mooc, Session, Invitation, ForumInfo } from '~/types';
import type { User } from '@prisma/client';
import { FetchError } from 'ofetch';

interface SessionData extends Session {
    mooc: Mooc;
}

export async function fetchSessionById(id: string): Promise<{ data?: SessionData; error?: FetchError }> {
    try {
        const data = await $fetch<SessionData>(`/api/sessions/${id}`);

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function fetchGradeReport(id: string): Promise<{ data?: GradeReport; error?: FetchError }> {
    try {
        const data = await $fetch<GradeReport>(`/api/reports/${id}`);

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function updateSessionGuest(
    sessionId: string,
    guestId: string,
    add: boolean,
): Promise<{ data?: User; error?: FetchError }> {
    try {
        const data = await $fetch<User>('/api/sessions/guest', {
            method: 'POST',
            body: { sessionId, guestId, add },
        });

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function updateSessionPendingGuest(
    sessionId: string,
    email: string,
    add: boolean,
): Promise<{ data?: Invitation; error?: FetchError }> {
    try {
        const data = await $fetch<Invitation>('/api/sessions/pending-guest', {
            method: 'POST',
            body: { sessionId, email, add },
        });

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

// Fetch forum information from the discourse instance
export async function fetchForumInfo(sessionId: string): Promise<{ data?: ForumInfo; error?: FetchError }> {
    try {
        const data = await $fetch<ForumInfo>(`/api/forum/${sessionId}`);

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function linkForum(
    apiKey: string,
    sessionId: string,
    instanceName: string,
): Promise<{ data?: ForumInfo; error?: FetchError }> {
    try {
        await $fetch<ForumInfo>(`/api/forum/${sessionId}`, {
            method: 'POST',
            body: { apiKey, instanceName },
        });

        return fetchForumInfo(sessionId);
    } catch (e) {
        return { error: e as FetchError };
    }
}
