<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';
import { useUsers } from '~/stores/users.store';

const usersStore = useUsers();

</script>

<template>
    <div class="w-full flex flex-col gap-5">
        <Button class="self-end w-fit" as-child>
            <NuxtLink to="/auth/register" class="flex items-center gap-2">
                <CirclePlus class="size-4"/>
                Ajouter un membre
            </NuxtLink>
        </Button>
        <div class="flex gap-4 flex-wrap">
            <UserCard v-for="user of usersStore.users.data" :user="user" />
        </div>
    </div>
</template>