import type { User } from 'lucia';
import { deleteUser, getUsers, updateProfile } from '~/services/users.service';
import { register, updatePassword } from '~/services/auth.service';
import { useToast } from '~/components/ui/toast';

interface UsersState {
    users: {
        data: User[];
        loading: boolean;
    }
}

export const useUsers = defineStore('users', {
    state: (): UsersState => ({
        users: {
            data: [],
            loading: false
        }
    }),
    
    actions: {
        async fetchUsers() {
            this.users.loading = true;
            const users = await getUsers();
            if (users) this.users.data = users
            this.users.loading = false;
        },
        
        async register(email: string, firstname: string, lastname: string, password: string) {
            this.users.loading = true;
            const user = await register(email, firstname, lastname, password);
            if (user) {
                this.users.data.push(user);
                await navigateTo('/users');
            }
            this.users.loading = false;
        },
        
        async updateProfile(email: string, firstname: string, lastname: string) {
            this.users.loading = true;
            const updatedUser = await updateProfile(email, firstname, lastname);
            if (updatedUser) {
                this.users.data = this.users.data.map(user => user.id === updatedUser.id ? updatedUser : user);
                await navigateTo('/users/profile');
            }
            this.users.loading = false;
        },
        
        async updatePassword(password: string) {
            const { toast } = useToast();
            
            const updated = await updatePassword(password);
            if (updated) {
                await navigateTo('/users/profile');
                toast({
                    title: 'Succès',
                    description: 'Mot de passe mis à jour',
                })
                
                await navigateTo('/users/profile')
            } else {
                toast({
                    title: 'Erreur',
                    description: 'Erreur lors de la mise à jour du mot de passe',
                    variant: 'destructive'
                })
                
                await navigateTo('/users/profile')
            }
        },
        
        async deleteUser(id: string) {
            this.users.loading = true;
            const user = await deleteUser();
            if (user) {
                this.users.data = this.users.data.filter(u => u.id !== id);
            }
            this.users.loading = false;
        }
    }
})