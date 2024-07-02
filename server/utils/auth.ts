import { Lucia } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            // secure: !dev
            secure: false
        }
    },
    getUserAttributes: (attributes) => {
        return {
            email: attributes.email,
        }
    }
});

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes
    }
}

interface DatabaseUserAttributes {
    email: string;
}