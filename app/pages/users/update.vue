<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';

definePageMeta({
    layout: 'settings',
});

const usersStore = useUsers();
async function updatePassword(password: string) {
    await usersStore.updatePassword(password);
}
</script>

<template>
    <div class="flex flex-col gap-4 max-w-2xl w-full mx-auto">
        <Button as-child size="icon" variant="outline" class="cursor-pointer">
            <NuxtLink to="/settings/profile">
                <ArrowLeft class="size-5" />
            </NuxtLink>
        </Button>

        <Tabs default-value="profile">
            <TabsList class="grid w-full grid-cols-2">
                <TabsTrigger value="profile">Profil</TabsTrigger>
                <TabsTrigger value="password">Mot de passe</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
                <ProfileFormProfile />
            </TabsContent>

            <TabsContent value="password">
                <ProfileFormPassword @submit="updatePassword" />
            </TabsContent>
        </Tabs>
    </div>
</template>
