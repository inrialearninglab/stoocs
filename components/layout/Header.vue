<script setup lang="ts">
import { Sun, Moon, LockKeyhole } from 'lucide-vue-next';

const colorMode = useColorMode();

function toggleColorMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
    <header class="border-b-2 mb-5 p-3 flex justify-between items-center">
        <div class="flex gap-5">
            <Button variant="ghost" as-child class="">
                <NuxtLink to="/" class="h-20">
                    <LockKeyhole class="size-10" />
                </NuxtLink>
            </Button>
            <nav class="flex items-center gap-4 text-xl">
                <NuxtLink class="nav-link" to="/moocs">Moocs</NuxtLink>
            </nav>
        </div>

        <div class="flex gap-2 items-center">
            <Button @click="toggleColorMode" size="icon" variant="ghost">
                <Sun class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
            </Button>

            <UserMenu />
        </div>
    </header>
</template>

<style scoped>
    .nav-link {
        @apply transition-colors hover:text-foreground/80 text-foreground/60 font-medium;
    }

    .router-link-active {
        @apply text-foreground font-semibold;
    }
</style>