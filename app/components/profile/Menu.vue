<script setup lang="ts">
import { Settings, Users, LogOut, BookOpen } from 'lucide-vue-next';
import { logout } from '~/services/auth.service';

const user = useUser();

async function handleLogout() {
    const { error } = await logout();
    if (error) {
        console.error(error);
    }

    user.value = null;
    await navigateTo('/auth/login');
}
</script>

<template>
    <DropdownMenu v-if="user">
        <DropdownMenuTrigger as-child>
            <UserAvatar :user="user" class="cursor-pointer size-9" />
        </DropdownMenuTrigger>

        <DropdownMenuContent class="w-56">
            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem v-if="user.rolename === 'ILL'" as-child class="cursor-pointer">
                <NuxtLink to="/users">
                    <Users class="size-4 mr-2" />
                    <span>Equipe</span>
                </NuxtLink>
            </DropdownMenuItem>

            <DropdownMenuItem as-child class="cursor-pointer">
                <NuxtLink to="/settings/profile">
                    <Settings class="size-4 mr-2" />
                    <span>Paramètres</span>
                </NuxtLink>
            </DropdownMenuItem>

            <template v-if="user.rolename === 'ILL'">
                <DropdownMenuSeparator />

                <DropdownMenuItem as-child class="cursor-pointer">
                    <NuxtLink to="https://inrialearninglab.github.io/stoocs-docs/">
                        <BookOpen class="size-4 mr-2" />
                        <span>Documentation</span>
                    </NuxtLink>
                </DropdownMenuItem>
            </template>

            <DropdownMenuSeparator />

            <DropdownMenuItem @click="handleLogout" class="cursor-pointer">
                <LogOut class="size-4 mr-2" />
                <span>Déconnexion</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
