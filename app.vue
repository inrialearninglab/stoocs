<script setup lang="ts">
import { Toaster } from '~/components/ui/sonner';

const route = useRoute();
const colorMode = useColorMode();

const theme = computed(() => colorMode.value === 'dark' ? 'dark' : 'light');

</script>

<template>
    <div class="flex flex-col h-full">
        <LayoutHeader v-if="route.path !== '/'" />
        <div class="h-full" :class="{ 'p-8': route.path !== '/' }">

            <NuxtPage v-if="!(route.meta.layout === 'dashboard')" />

            <LayoutNavbar v-else class="max-w-8xl w-full mx-auto">
                <NuxtPage />
            </LayoutNavbar>


            <Toaster rich-colors :theme="theme" />
        </div>
    </div>
</template>