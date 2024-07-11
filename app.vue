<script setup lang="ts">
import Toaster from '~/components/ui/toast/Toaster.vue'

const route = useRoute()

</script>

<template>
    <div class="flex flex-col h-full">
        <LayoutHeader v-if="route.path !== '/'" />
        <div class="h-full" :class="{ 'p-8': route.path !== '/' }">
            <NuxtPage />
            <Toaster />
        </div>
    </div>
</template>