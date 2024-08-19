<script setup lang="ts">
import { Toaster } from '~/components/ui/sonner';

const route = useRoute();
const colorMode = useColorMode();

</script>

<template>
    <div class="flex flex-col">
        <LayoutHeader v-if="route.path !== '/'" />
        <div :class="{ 'p-8': route.path !== '/' }">

            <NuxtPage v-if="!(route.meta.layout === 'dashboard')" />

            <LayoutNavbar v-else class="max-w-8xl w-full mx-auto">
                <NuxtPage />
            </LayoutNavbar>

            <!-- Wait for colorMode init -->
            <Toaster v-if="colorMode.value !== 'system'" rich-colors :theme="colorMode.value" />
        </div>
    </div>
</template>