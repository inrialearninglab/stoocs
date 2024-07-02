import type { User } from 'lucia';

export const useUser = () => {
    return useState<User | null>('user', () => null);
}
