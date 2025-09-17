export interface User {
    email: string;
    password: string;
}

export interface Invitation {
    tokenHash: string;
    email: string;
    isGuest: boolean;
    expiresAt: Date;
    moocSessions: string[];
}
