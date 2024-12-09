<script setup lang="ts">
import { Sun, Moon, UserCog } from 'lucide-vue-next';

const colorMode = useColorMode();
const user = useUser();

function toggleColorMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
    <header
        class="border-b-2 p-3 flex justify-between items-center sticky top-0 z-10 bg-background/70 backdrop-blur-lg"
    >
        <div class="flex gap-5 items-center">
            <NuxtLink to="/" class="flex gap-2 items-center">
                <LayoutLogo class="h-10 w-auto" />
                <span class="text-3xl font-semibold">Stoocs</span>
            </NuxtLink>
        </div>

        <div class="flex gap-2 items-center">
            <Button variant="outline" as-child v-if="user && user.rolename === 'ILL'">
                <RouterLink to="/users">
                    <UserCog class="mr-2" />
                    Administrer les membres
                </RouterLink>
            </Button>

            <Button @click="toggleColorMode" size="icon" variant="outline">
                <Moon class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Sun class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
            </Button>

            <ProfileMenu />
        </div>
    </header>
</template>
