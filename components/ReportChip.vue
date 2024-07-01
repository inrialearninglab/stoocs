<script setup lang="ts">

defineProps<{
    report: 'enrollment' | 'grade';
    static?: boolean;
}>();

</script>

<template>
    <div
        v-if="!static"
        class="size-[10px] rounded-full absolute left-[6px] top-[6px]"
        :class="{ 'bg-amber-600': report === 'enrollment', 'bg-purple-600': report === 'grade' }"
    />
    <div
        v-else
        class="size-3 rounded-full"
        :class="{ 'bg-amber-600': report === 'enrollment', 'bg-purple-600': report === 'grade' }"
    />
</template>