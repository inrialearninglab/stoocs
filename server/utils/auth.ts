import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: !import.meta.dev,
        },
    },
    getUserAttributes: (attributes) => {
        return {
            email: attributes.email,
            firstname: attributes.firstname,
            lastname: attributes.lastname,
            rolename: attributes.rolename,
            moocSessions: attributes.moocSessions,
            isAdmin: attributes.isAdmin,
        };
    },
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    rolename: string;
    moocSessions: string[];
    isAdmin: boolean;
}
