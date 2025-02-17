<script setup lang="ts">
const props = defineProps<{
    rolename: string;
}>();

const color = computed(() => (props.rolename === 'ILL' ? 'success' : 'info'));
const classList = computed(() => `border-${color.value}-border text-${color.value}-text bg-${color.value}-bg`);
</script>

<template>
    <Badge variant="outline" :class="classList">{{ rolename === 'ILL' ? 'LearningLab' : 'Invité' }}</Badge>
</template>
