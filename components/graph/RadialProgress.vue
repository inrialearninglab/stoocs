<script setup lang="ts">

const props = defineProps<{
    percentage: number;
}>();

const colors = {
    red: '#ef4444',
    yellow: '#f59e0b',
    green: '#10b981'
}

const circumference = 45 * 2 * Math.PI;
const offset = ref(circumference);

watch(() => props.percentage, (newPercentage) => {
    setTimeout(() => {
        offset.value = circumference - (newPercentage / 100) * circumference;
    })
}, { immediate: true })

</script>

<template>
    <svg class="progress" viewBox="0 0 100 100">
        <circle class="progress-background stroke-secondary" cx="50" cy="50" r="45"></circle>
        <circle
            class="progress-bar"
            :stroke="props.percentage < 50 ? colors.red : props.percentage < 75 ? colors.yellow : colors.green"
            cx="50"
            cy="50"
            r="45"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="offset"
        >
        </circle>

        <text x="53" y="57" text-anchor="middle" class="text-lg fill-primary">
            {{ percentage }}%
        </text>
    </svg>
</template>

<style scoped>
circle {
    fill: none;
    stroke-width: 8;
}

.progress-bar {
    stroke-linecap: round;
    transform-origin: center;
    transform: rotate(-90deg);
    transition: stroke-dashoffset .5s ease-in-out;
}

</style>