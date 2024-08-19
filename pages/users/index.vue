<script setup lang="ts">
import { useUsers } from '~/stores/users.store';

definePageMeta({
    layout: 'dashboard'
});

const usersStore = useUsers();

</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex gap-4 flex-wrap">
            <UserCard v-for="user of usersStore.users.data" :user="user" class="flex-grow w-72 max-w-md" />
            <div class="w-72 max-w-md flex-grow" />
            <div class="w-72 max-w-md flex-grow" />
            <div class="w-72 max-w-md flex-grow" />
        </div>
        <Separator />
        <UserInvitations />
    </div>
</template>