import type { User } from 'lucia';
import { FetchError } from 'ofetch';
import { useUsers } from '~/stores/users.store';
import { useMoocs } from '~/stores/moocs.store';
import { useSession } from '~/stores/session.store';

export async function login(email: string, password: string): Promise<{ error?: FetchError }> {
    try {
        await $fetch<User>('/api/auth/login', {
            method: 'POST',
            body: { email, password }
        });

        return {};
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function register(email: string, firstname: string, lastname: string, password: string, token: string): Promise<{ error?: FetchError }> {
    try {
        await $fetch('/api/auth/register', {
            method: 'POST',
            body: {
                email,
                firstname,
                lastname,
                password,
                token
            }
        })

        return {};
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function logout(): Promise<{ error?: FetchError }> {
    try {
        await $fetch('/api/auth/logout', {
            method: 'POST'
        });

        const usersStore = useUsers();
        const moocsStore = useMoocs();
        const sessionStore = useSession();

        usersStore.reset();
        moocsStore.reset();
        sessionStore.reset();

        return {};
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function updatePassword(password: string): Promise<{ error?: FetchError }> {
    try {
        await $fetch('/api/auth/password', {
            method: 'PUT',
            body: { password }
        });

        return {};
    } catch (e) {
        return { error: e as FetchError };
    }

}

export async function updateProfile(email: string, firstname: string, lastname: string): Promise<{ data?: User, error?: FetchError }> {
    try {
        const data = await $fetch<User>('/api/users/profile', {
            method: 'PUT',
            body: { email, firstname, lastname }
        });

        return { data };
    } catch (e) {
        return { error: e as FetchError };
    }
}

export async function deleteUser(): Promise<{ error?: FetchError }> {
    try {
        await $fetch ('/api/users/delete');

        return {};
    } catch (e) {
        return { error: e as FetchError };
    }
}
