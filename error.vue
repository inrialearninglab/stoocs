<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const props = defineProps({
    error: Object as () => NuxtError,
});
</script>

<template>
    <div class="flex flex-col text-center h-full justify-center items-center">
        <h1 class="text-6xl">{{ error?.statusCode }}</h1>
        <p class="text-lg mt-2">Oups, cette page n'existe pas</p>
        <Button size="lg" as-child class="w-fit mt-5">
            <NuxtLink to="/moocs"> Retour au site </NuxtLink>
        </Button>
    </div>
</template>
