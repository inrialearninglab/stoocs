import type { MoocSession } from '@prisma/client';

export function getSessionStatus(session: MoocSession): 'open' | 'closed' | 'archived' {
    if (isSessionEnded(session)) {
        return 'closed';
    } else {
        if (session.sessionName === 'archiveouvert') {
            return 'archived';
        } else {
            return 'open';
        }
    }
}

export function isSessionEnded(session: MoocSession) {
    if (!session.endDate) return false;

    return new Date(session.endDate) < new Date();
}
