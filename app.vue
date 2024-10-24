<script setup lang="ts">
import { Toaster } from '~/components/ui/sonner';

const route = useRoute();
const colorMode = useColorMode();

const { themeClass, radius } = useThemes();

useServerHead({
    htmlAttrs: {
        class: themeClass.value,
        style: `--radius: ${radius.value}rem`,
    }
});

</script>

<template>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <div class="flex flex-col min-h-screen">
        <LayoutHeader v-if="route.path !== '/'" />
        <div class="min-h-full flex-1 flex flex-col" :class="{ 'p-8': route.path !== '/' }">

            <NuxtPage v-if="!(route.meta.layout === 'dashboard')" />

            <Navbar v-else class="max-w-8xl w-full mx-auto">
                <NuxtPage />
            </Navbar>

            <!-- Wait for colorMode init -->
            <Toaster v-if="colorMode.value !== 'system'" rich-colors :theme="colorMode.value as 'light' | 'dark'" />
        </div>
    </div>
</template>
