import type { User } from '@prisma/client';
import { createInvitation, deleteInvitation, getInvitations, getUsers } from '~/services/users.service';
import { updatePassword, updateProfile, deleteUser } from '~/services/auth.service';
import { updateSessionGuest, updateSessionPendingGuest } from '~/services/sessions.service';
import { toast } from 'vue-sonner';
import type { Invitation } from '~/types';

interface UsersState {
    users: {
        data: User[];
        loading: boolean;
    };
    invitations: Invitation[];
}

export const useUsers = defineStore('users', {
    state: (): UsersState => ({
        users: {
            data: [],
            loading: false,
        },
        invitations: [],
    }),

    getters: {
        ill: (state) => state.users.data.filter((user) => user.rolename === 'ILL'),
        guests: (state) => state.users.data.filter((user) => user.rolename === 'Guest'),
    },

    actions: {
        async fetchUsers() {
            this.users.loading = true;
            const { data, error } = await getUsers();
            if (!error && data) this.users.data = data;

            const { data: invitationsData, error: invitationsError } = await getInvitations();
            if (!invitationsError && invitationsData) this.invitations = invitationsData;

            this.users.loading = false;
        },

        async createInvitation(email: string, isGuest: boolean) {
            const { data, error } = await createInvitation(email, isGuest);

            if (error) {
                if (error.statusCode === 400) {
                    toast.error('Cet email est déjà associé à un compte');
                } else if (error.statusCode === 500) {
                    toast.error("Une erreur est survenue lors de l'envoi de l'invitation");
                }
            } else if (data) {
                this.invitations.push(data);
                toast.success('Invitation envoyée avec succès');
            }
        },

        async deleteInvitation(tokenHash: string) {
            const { data, error } = await deleteInvitation(tokenHash);

            if (error) {
                toast.error("Une erreur est survenue lors de la suppression de l'invitation");
            } else if (data) {
                const index = this.invitations.findIndex((invitation) => invitation.tokenHash === tokenHash);
                if (index !== -1) this.invitations.splice(index, 1);

                toast.success('Invitation supprimée');
            }
        },

        async updateProfile(email: string, firstname: string, lastname: string) {
            this.users.loading = true;
            const { data, error } = await updateProfile(email, firstname, lastname);
            if (!error && data) {
                this.users.data = this.users.data.map((user) => (user.id === data.id ? data : user));

                toast.success('Profil mis à jour');

                await navigateTo('/settings/profile');
            } else {
                toast.error('Une erreur est survenue lors de la mise à jour du profil');
            }
            this.users.loading = false;
        },

        async updatePassword(password: string) {
            const { error } = await updatePassword(password);

            if (error) {
                await navigateTo('/settings/profile');
                toast.error('Une erreur est survenue lors de la mise à jour du mot de passe');
            } else {
                await navigateTo('/settings/profile');
                toast.success('Mot de passe mis à jour');
            }
        },

        async deleteUser() {
            const { error } = await deleteUser();

            if (error) {
                toast.error('Une erreur est survenue lors de la suppression de votre compte');
            } else {
                const user = useUser();
                user.value = null;
                await navigateTo('/auth/login');

                toast.info('Votre compte a été supprimé');
            }
        },

        async updateSessionGuest(sessionId: string, guestId: string, add: boolean) {
            const { data, error } = await updateSessionGuest(sessionId, guestId, add);

            if (error) {
                toast.error("Une erreur est survenue lors de la mise à jour des droits de l'invité");
            } else if (data) {
                this.users.data = this.users.data.map((user) => (user.id === data.id ? data : user));
                toast.success("Les droits de l'invité ont bien été mis à jour");
            }
        },

        async updateSessionPendingGuest(sessionId: string, email: string, add: boolean) {
            const { data, error } = await updateSessionPendingGuest(sessionId, email, add);

            if (error) {
                toast.error("Une erreur est survenue lors de la mise à jour des droits de l'invité");
            } else if (data)
                [
                    (this.invitations = this.invitations.map((invitation) =>
                        invitation.email === email ? data : invitation,
                    )),
                    toast.success("Les droits de l'invité ont bien été mis à jour"),
                ];
        },

        reset() {
            this.users = { data: [], loading: false };
            this.invitations = [];
        },
    },
});
