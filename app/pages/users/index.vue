<script setup lang="ts">
import { useUsers } from '~/stores/users.store';

const usersStore = useUsers();

definePageMeta({
    layout: 'dashboard',
});
</script>

<template>
    <div class="space-y-6">
        <div class="flex justify-between">
            <div class="space-y-2">
                <h1>Équipe</h1>
                <p class="text-muted-foreground">Liste des membres de l'équipe</p>
            </div>
            <NavbarActionsUsers />
        </div>

        <div class="flex flex-col gap-4">
            <TeamList :users="usersStore.users.data" />
            <Separator />
            <TeamInvitations />
        </div>
    </div>
</template>
