<script setup lang="ts">
import { useUsers } from '~/stores/users.store';

definePageMeta({
    layout: 'dashboard'
});

const usersStore = useUsers();

</script>

<template>
    <div class="flex flex-col gap-4">
        <UserInvitations />
        <Separator />
        <div class="flex gap-4 flex-wrap">
            <UserCard v-for="user of usersStore.users.data" :user="user" />
        </div>
    </div>
</template>