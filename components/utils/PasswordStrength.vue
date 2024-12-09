<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { cn } from '~/lib/utils';
import { CircleCheck, CircleX } from 'lucide-vue-next';

const props = defineProps<{
    defaultValue?: string | number;
    modelValue?: string | number;
    class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
});

const characters = computed(() => +(props.modelValue?.length >= 8));
const maj = computed(() => +/[A-Z]/.test(props.modelValue));
const min = computed(() => +/[a-z]/.test(props.modelValue || ''));
const special = computed(() => +/[!@#$%^&*(),.?":{}|<>]/.test(props.modelValue));

const minChar = 8;

const progress = computed(() => (characters.value + maj.value + min.value + special.value) * 25);
</script>

<template>
    <div class="space-y-2">
        <Input type="password" ref="input" class="mb-3" v-model="modelValue" :class="class" />
        <Progress
            v-model="progress"
            class="h-2 text-amber-500"
            :color="progress < 25 ? '#ef4444' : progress === 100 ? '#10b981' : '#f59e0b'"
            :class="{ 'text-green-500': progress === 100, 'text-destructive': progress < 50 }"
        />
        <span
            class="flex items-center gap-2 text-sm"
            :class="{ 'text-emerald-500': characters, 'text-destructive': !characters }"
        >
            <CircleCheck v-if="characters" class="size-4" />
            <CircleX v-else class="size-4" />
            Plus de 8 charactères
        </span>
        <span class="flex items-center gap-2 text-sm" :class="{ 'text-emerald-500': maj, 'text-destructive': !maj }">
            <CircleCheck v-if="maj" class="size-4" />
            <CircleX v-else class="size-4" />
            Au moins une majuscule
        </span>
        <span class="flex items-center gap-2 text-sm" :class="{ 'text-emerald-500': min, 'text-destructive': !min }">
            <CircleCheck v-if="min" class="size-4" />
            <CircleX v-else class="size-4" />
            Au moins une minuscule
        </span>
        <span
            class="flex items-center gap-2 text-sm"
            :class="{ 'text-emerald-500': special, 'text-destructive': !special }"
        >
            <CircleCheck v-if="special" class="size-4" />
            <CircleX v-else class="size-4" />
            Au moins un charactère spécial
        </span>
    </div>
</template>
