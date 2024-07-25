import type { User } from 'lucia';
import { deleteUser, getUsers, updateProfile } from '~/services/users.service';
import { register, updatePassword } from '~/services/auth.service';
import { toast } from 'vue-sonner';
import type { Invitation } from '~/types';
import type { SerializeObject } from 'nitropack';

interface UsersState {
    users: {
        data: User[];
        loading: boolean;
    },
    invitations: SerializeObject<Invitation>[];
}

export const useUsers = defineStore('users', {
    state: (): UsersState => ({
        users: {
            data: [],
            loading: false
        },
        invitations: []
    }),
    
    actions: {
        async fetchUsers() {
            this.users.loading = true;
            const users = await getUsers();
            if (users) this.users.data = users
            
            const { data, error } = await useFetch('/api/auth/invitations');
            if (!error.value && data?.value?.invitations.length) this.invitations = data.value.invitations;
            
            this.users.loading = false;
        },
        
        async createInvitation(email: string) {
            const { data, error } = await useFetch('/api/auth/invitations', {
                method: 'POST',
                body: {
                    email
                }
            });
            
            if (error.value) {
                toast.error('Une erreur est survenue lors de la création de l\'invitation');
            }

            else if (data?.value?.invitation) {
                this.invitations.push(data.value.invitation);
                const url = `${window.location.origin}/auth/register/${data.value.invitation.tokenHash}`;
                await navigator.clipboard.writeText(url);
                toast.success('Lien d\'invitation créée et copié dans le presse papier');
            }
        },
        
        async deleteInvitation(tokenHash: string) {
            const { data, error } = await useFetch('/api/auth/invitations', {
                method: 'DELETE',
                body: {
                    tokenHash
                }
            });
            
            if (error.value) {
                toast.error('Une erreur est survenue lors de la suppression de l\'invitation');
            }
            
            else if (data?.value?.invitation) {
                const index = this.invitations.findIndex(invitation => invitation.tokenHash === tokenHash);
                if (index !== -1) this.invitations.splice(index, 1);
                toast.success('Invitation supprimée');
            }
        },
        
        async register(email: string, firstname: string, lastname: string, password: string) {
            this.users.loading = true;
            const user = await register(email, firstname, lastname, password);
            if (user) {
                this.users.data.push(user);
                
                toast.success('Compte créé');
                
                await navigateTo('/users');
            }
            this.users.loading = false;
        },
        
        async updateProfile(email: string, firstname: string, lastname: string) {
            this.users.loading = true;
            const updatedUser = await updateProfile(email, firstname, lastname);
            if (updatedUser) {
                this.users.data = this.users.data.map(user => user.id === updatedUser.id ? updatedUser : user);
                
                toast.success('Profil mis à jour');
                
                await navigateTo('/users/profile');
            }
            this.users.loading = false;
        },
        
        async updatePassword(password: string) {
            
            const updated = await updatePassword(password);
            if (updated) {
                await navigateTo('/users/profile');
                toast.success('Mot de passe mis à jour');
                
                await navigateTo('/users/profile')
            } else {
                toast.error('Erreur lors de la mise à jour du mot de passe');
                
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