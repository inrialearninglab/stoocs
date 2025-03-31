<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next';

const colorMode = useColorMode();
const user = useUser();

function toggleColorMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}

const route = useRoute();
const routes = [
    {
        label: 'MOOCs',
        path: '/moocs',
    },
    {
        label: 'Tableau de bord',
        path: '/dashboard',
    },
    {
        label: 'Équipe',
        path: '/users',
        restricted: true,
    },
    {
        label: 'Paramètres',
        path: '/settings/profile',
    },
];
</script>

<template>
    <header
        class="border-b py-2 px-4 flex justify-between items-center sticky top-0 z-10 bg-background/70 backdrop-blur-lg h-[3.75rem]"
    >
        <div class="flex gap-5 items-center">
            <NuxtLink to="/" class="flex gap-3 items-center">
                <LayoutLogo class="h-9 w-auto" />
                <span class="text-2xl font-semibold">Stoocs</span>
            </NuxtLink>
        </div>

        <div class="flex items-center">
            <Button v-for="item of routes" variant="ghost" as-child>
                <NuxtLink :to="item.path" v-if="!item.restricted || user?.rolename === 'ILL'">
                    {{ item.label }}
                    <div v-if="route.path === item.path" class="absolute -bottom-2.5 w-full">
                        <div class="h-0.5 bg-primary rounded-t-md" />
                    </div>
                </NuxtLink>
            </Button>
        </div>

        <div class="flex gap-2 items-center">
            <LayoutCommand />
            <Button @click="toggleColorMode" size="icon" variant="outline" class="size-9">
                <Moon class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 size-5" />
                <Sun class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 size-5" />
                <span class="sr-only">Toggle theme</span>
            </Button>

            <ProfileMenu />
        </div>
    </header>
</template>

<style scoped>
.router-link-active {
    @apply text-primary;
}
</style>
