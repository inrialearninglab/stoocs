<script setup lang="ts">
import { Toaster } from '~/components/ui/sonner';
import 'vue-sonner/style.css';

const colorMode = useColorMode();
</script>

<template>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <div class="flex flex-col min-h-screen">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
    <ClientOnly>
        <Toaster rich-colors :theme="colorMode.value as 'light' | 'dark'" />
    </ClientOnly>
</template>
