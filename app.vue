<script setup lang="ts">
import Toaster from '~/components/ui/toast/Toaster.vue'

</script>

<template>
    <div class="flex flex-col">
        <Header />
        <div class="p-8">
            <NuxtPage />
            <Toaster />
        </div>
    </div>
</template>