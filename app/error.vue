<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

defineProps({
    error: Object as () => NuxtError,
});

const errors: Record<number, string> = {
    404: "Cette page n'existe pas",
    403: "Vous n'avez pas accès à cette page",
    500: 'Une erreur est survenue',
};
</script>

<template>
    <div class="relative flex h-screen items-center">
        <div
            class="absolute h-full w-full bg-[radial-gradient(theme(colors.border)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        />
        <div class="container relative z-[1] flex flex-col items-center justify-center text-center">
            <h1 class="text-6xl">{{ error?.statusCode }}</h1>
            <p class="text-lg mt-2">{{ error?.statusCode ? errors[error.statusCode] : '' }}</p>

            <Button size="lg" as-child class="w-fit mt-5">
                <NuxtLink to="/moocs"> Retour au site </NuxtLink>
            </Button>
        </div>
    </div>
</template>
