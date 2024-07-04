<script setup lang="ts">
import { Sun, Moon, User } from 'lucide-vue-next';

const colorMode = useColorMode();

function toggleColorMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
    <header class="border-b-2 mb-5 p-3 flex justify-between items-center">
        <Button variant="ghost" as-child class="">
            <NuxtLink to="/" class="h-20">
                <img src="/logo.png" alt="Logo" class="h-16" />
            </NuxtLink>
        </Button>

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