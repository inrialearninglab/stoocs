<script setup lang="ts">
const props = defineProps<{
    rolename: string;
}>();

const color = props.rolename === 'ILL' ? 'success' : 'info';
const classList = `border-${color}-border text-${color}-text bg-${color}-bg`;
</script>

<template>
    <Badge variant="outline" :class="classList">{{ rolename === 'ILL' ? 'LearningLab' : 'Invité' }}</Badge>
</template>
