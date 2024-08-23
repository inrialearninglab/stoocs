<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next';

const colorMode = useColorMode();

function toggleColorMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
    <header class="border-b-2 p-3 flex justify-between items-center sticky top-0 z-10 bg-background/70 backdrop-blur-lg">
        <div class="flex gap-5 items-center">
            <Button variant="ghost" as-child>
                <NuxtLink to="/">
                    <LayoutLogo class="size-8" />
                </NuxtLink>
            </Button>
        </div>

        <div class="flex gap-2 items-center">
            <Button @click="toggleColorMode" size="icon" variant="ghost">
                <Moon class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Sun class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
            </Button>

            <UserMenu />
        </div>
    </header>
</template>