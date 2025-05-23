<template>
    <div
        :key="name"
        :class="cn('group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl', props.class)"
    >
        <slot name="background" />

        <div
            class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10"
        >
            <component
                v-if="icon"
                :is="icon"
                class="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
            />
            <div
                v-else
                class="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
            ></div>
            <h3 class="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                {{ name }}
            </h3>
            <p class="max-w-lg text-neutral-400">{{ description }}</p>
        </div>

        <div
            class="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
            <UiButton variant="ghost" asChild size="sm" class="pointer-events-auto">
                <a :href="href"> {{ cta }} → </a>
            </UiButton>
        </div>
        <div
            class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
        />
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils';
import type { HTMLAttributes } from 'vue';

interface Props {
    name: string;
    class?: HTMLAttributes['class'];
    icon?: string;
    description: string;
    href: string;
    cta: string;
}

const props = defineProps<Props>();
</script>
