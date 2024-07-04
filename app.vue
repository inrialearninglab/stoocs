<script setup lang="ts">
import Toaster from '~/components/ui/toast/Toaster.vue'

const route = useRoute()

</script>

<template>
    <div class="flex flex-col">
        <LayoutHeader v-if="route.path !== '/'" />
        <div :class="{ 'p-8': route.path !== '/' }">
            <NuxtPage />
            <Toaster />
        </div>
    </div>
</template>