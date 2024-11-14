<template>
    <NuxtLink
        :to="href"
        :class="
            cn(
                'cursor-pointer row-span-1 rounded-xl group/bento transition duration-200 shadow-input p-4 border justify-between flex flex-col space-y-4',
                props.class,
            )
        "
    >
        <slot name="header" />
        <div class="group-hover/bento:translate-x-2 transition duration-200 flex flex-col items-center">
            <slot name="icon" />
            <div
                class="font-sans font-bold mb-2 mt-2"
            >
                <slot name="title" />
            </div>
            <div
                class="font-sans font-normal text-muted-foreground text-sm"
            >
                <slot name="description" />
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";
import type { HTMLAttributes } from "vue";

interface Props {
    class?: HTMLAttributes["class"];
    href: string;
}

const props = defineProps<Props>();
</script>
