<script setup lang="ts">
const props = defineProps<{
    dividend: number;
    divisor: number;
}>();

const circumference = 45 * 2 * Math.PI;
const offset = ref(circumference);

const percentage = computed(() => {
    return (props.dividend / props.divisor) * 100;
});

watch(
    () => percentage,
    (newPercentage) => {
        setTimeout(() => {
            offset.value = circumference - (Math.round(newPercentage.value) / 100) * circumference;
        });
    },
    { immediate: true },
);
</script>

<template>
    <svg class="progress" viewBox="0 0 100 100">
        <circle class="progress-background stroke-secondary" cx="50" cy="50" r="45"></circle>
        <circle
            class="progress-bar stroke-primary"
            cx="50"
            cy="50"
            r="45"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="offset"
        ></circle>

        <text x="53" y="57" text-anchor="middle" class="text-lg fill-foreground">{{ percentage.toFixed(1) }}%</text>
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
    transition: stroke-dashoffset 0.5s ease-in-out;
}
</style>
