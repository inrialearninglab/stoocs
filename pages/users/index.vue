<script setup lang="ts">
import { useUsers } from '~/stores/users.store';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

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
            <Tabs default-value="ill">
                <TabsList class="grid w-full grid-cols-2">
                    <TabsTrigger value="ill">Learning Lab</TabsTrigger>
                    <TabsTrigger value="guests">Invités</TabsTrigger>
                </TabsList>

                <TabsContent value="ill" class="mt-4">
                    <div class="flex gap-4 flex-wrap">
                        <UserCard v-for="user of usersStore.ill" :user="user" class="flex-grow w-72 max-w-md" />
                        <div class="w-72 max-w-md flex-grow" />
                        <div class="w-72 max-w-md flex-grow" />
                        <div class="w-72 max-w-md flex-grow" />
                    </div>
                </TabsContent>

                <TabsContent value="guests" class="mt-4">
                    <div class="flex gap-4 flex-wrap">
                        <UserCard v-for="user of usersStore.guests" :user="user" class="flex-grow w-72 max-w-md" />
                        <div class="w-72 max-w-md flex-grow" />
                        <div class="w-72 max-w-md flex-grow" />
                        <div class="w-72 max-w-md flex-grow" />
                    </div>
                </TabsContent>
            </Tabs>
            <Separator />
            <TeamInvitations />
        </div>
    </div>
</template>
