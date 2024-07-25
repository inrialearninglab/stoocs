export interface User {
    email: string;
    password: string;
}

export interface Invitation {
    tokenHash: string;
    email: string;
    expiresAt: Date;
}