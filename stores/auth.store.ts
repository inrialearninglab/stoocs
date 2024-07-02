import type { User } from '~/types';
import { login } from '~/services/auth.service';

interface AuthState {
    user: User | null;
    loading: boolean;
}

export const useAuth = defineStore('auth', {
    state: (): AuthState => ({
        user: null,
        loading: false
    }),
    
    actions: {
        async login(email: string, password: string) {
            this.user = await login(email, password);
        },
    }
})