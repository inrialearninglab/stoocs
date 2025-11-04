<script setup lang="ts">
const props = defineProps<{
    rolename: string;
}>();

const isILL = computed(() => props.rolename === 'ILL');
</script>

<template>
    <Badge
        variant="outline"
        :class="{
            'border-success/25 text-success bg-success/10': isILL,
            'border-info/25 text-info bg-info/10': !isILL,
        }"
    >
        {{ isILL ? 'LearningLab' : 'Invité' }}
    </Badge>
</template>
