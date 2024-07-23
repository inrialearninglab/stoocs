<script setup lang="ts">
import { Toaster } from '~/components/ui/sonner';

const route = useRoute();
const colorMode = useColorMode();

</script>

<template>
    <div class="flex flex-col h-full">
        <LayoutHeader v-if="route.path !== '/'" />
        <div class="h-full" :class="{ 'p-8': route.path !== '/' }">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
            <Toaster rich-colors :theme="colorMode.preference" />
        </div>
    </div>
</template>