import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from '@oslojs/encoding';
import type { Session, User } from '@prisma/client';
import { sha256 } from '@oslojs/crypto/sha2';
import { prisma } from '~/prisma/db';

export async function generateSessionToken(): Promise<string> {
    const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    const token = encodeBase32LowerCaseNoPadding(bytes);

    return token;
}

export async function createSession(token: string, userId: string): Promise<Session> {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

    const session: Session = {
        id: sessionId,
        userId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
    };
    await prisma.session.create({
        data: session,
    });

    return session;
}

export async function validateSession(token: string): Promise<SessionValidationResult> {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
    const session = await prisma.session.findUnique({
        where: {
            id: sessionId,
        },
        include: {
            user: true,
        },
    });

    if (!session) {
        return { session: null, user: null };
    }

    if (Date.now() >= session.expiresAt.getTime()) {
        await invalidateSession(session.id);
        return { session: null, user: null };
    }

    if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
        await prisma.session.update({
            where: {
                id: session.id,
            },
            data: {
                expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
            },
        });
    }

    return { session, user: session.user };
}

export async function invalidateSession(sessionId: string): Promise<void> {
    await prisma.session.delete({
        where: {
            id: sessionId,
        },
    });
}

export function createSessionCookie(
    token: string,
    expiresAt: Date,
): {
    name: string;
    value: string;
    attributes: {
        httpOnly: boolean;
        sameSite: boolean | 'lax' | 'strict' | 'none';
        secure: boolean;
        expires: Date;
    };
} {
    return {
        name: 'session',
        value: token,
        attributes: {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            expires: expiresAt,
        },
    };
}

export function createBlankSessionCookie(): {
    name: string;
    value: string;
    attributes: {
        httpOnly: boolean;
        sameSite: boolean | 'lax' | 'strict' | 'none';
        secure: boolean;
        maxAge: number;
    };
} {
    return {
        name: 'session',
        value: '',
        attributes: {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 0,
        },
    };
}

export async function generateIdFromEntropySize(size: number) {
    const buffer = crypto.getRandomValues(new Uint8Array(size));
    return encodeBase32LowerCaseNoPadding(buffer);
}

export type SessionValidationResult = { session: Session; user: User } | { session: null; user: null };
