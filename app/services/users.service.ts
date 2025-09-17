import type { User } from '@prisma/client';
import type { Invitation } from '~/types';
import { FetchError } from 'ofetch';

export async function getUsers(): Promise<{ data?: User[]; error?: FetchError }> {
    try {
        const data = await $fetch<User[]>('/api/users');

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function getInvitations(): Promise<{ data?: Invitation[]; error?: FetchError }> {
    try {
        const data = await $fetch<Invitation[]>('/api/auth/invitations');

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function createInvitation(
    email: string,
    isGuest: boolean,
): Promise<{ data?: Invitation; error?: FetchError }> {
    try {
        const data = await $fetch<Invitation>('/api/auth/invitations', {
            method: 'POST',
            body: { email, isGuest },
        });

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function deleteInvitation(tokenHash: string): Promise<{ data?: Invitation; error?: FetchError }> {
    try {
        const data = await $fetch<Invitation>('/api/auth/invitations', {
            method: 'DELETE',
            body: { tokenHash },
        });

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}
