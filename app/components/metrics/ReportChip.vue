<script setup lang="ts">
defineProps<{
    report: 'enrollment' | 'grade' | 'both';
    static?: boolean;
}>();
</script>

<template>
    <div v-if="report !== 'both'">
        <div
            v-if="!static"
            class="size-[10px] rounded-full absolute left-[6px] top-[6px]"
            :class="{ 'bg-amber-500': report === 'enrollment', 'bg-purple-600': report === 'grade' }"
        />
        <div
            v-else
            class="size-3 rounded-full"
            :class="{ 'bg-amber-500': report === 'enrollment', 'bg-purple-600': report === 'grade' }"
        />
    </div>
    <div v-else-if="!static">
        <div class="size-[10px] rounded-full absolute left-[6px] top-[6px] bg-amber-500" />
        <div class="size-[10px] rounded-full absolute left-[22px] top-[6px] bg-purple-600" />
    </div>
</template>
