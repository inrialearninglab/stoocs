import type { User } from '@prisma/client';

export const useUser = () => {
    return useState<User | null>('user', () => null);
};
