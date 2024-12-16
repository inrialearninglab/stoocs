<script setup lang="ts">
import { Toaster } from '~/components/ui/sonner';

const route = useRoute();
const colorMode = useColorMode();
</script>

<template>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <div class="flex flex-col min-h-screen">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <Toaster v-if="colorMode.value !== 'system'" rich-colors :theme="colorMode.value as 'light' | 'dark'" />
    </div>
</template>
