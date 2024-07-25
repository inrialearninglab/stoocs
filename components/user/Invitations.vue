<script setup lang="ts">
import { useUsers } from '~/stores/users.store';
import { Trash } from 'lucide-vue-next';
import { toast } from 'vue-sonner';
import { isWithinExpirationDate } from 'oslo';

const usersStore = useUsers();

async function copyToClipboard(token: string) {
    const invitationUrl = `${window.location.origin}/auth/register/${token}`;
    await navigator.clipboard.writeText(invitationUrl);

    toast.success('Lien d\'invitation copié dans le presse-papier');
}

</script>

<template>
    <div class="flex flex-col gap-5">
        <h3>Invitations en attentes ({{ usersStore.invitations.length }})</h3>
        <div
            v-for="invitation in usersStore.invitations"
            :key="invitation.tokenHash"
            class="flex gap-2 items-center px-5 py-2.5 border rounded-md justify-between"
        >
            <p>{{ invitation.email }}</p>
            <div class="flex gap-4 items-center">
                <Badge :variant="isWithinExpirationDate(new Date(invitation.expiresAt)) ? 'default' : 'destructive'">
                    {{ isWithinExpirationDate(new Date(invitation.expiresAt)) ? 'Valide' : 'Expirée' }}
                </Badge>

                <Button @click="usersStore.deleteInvitation(invitation.tokenHash)" variant="outline" size="icon">
                    <Trash class="size-4 stroke-destructive" />
                </Button>

                <UtilsClipboard @copied="copyToClipboard(invitation.tokenHash)"  />
            </div>
        </div>
    </div>
</template>