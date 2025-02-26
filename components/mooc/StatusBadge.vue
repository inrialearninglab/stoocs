<script setup lang="ts">
defineProps<{
    status: 'open' | 'closed' | 'archived';
}>();

const statusMap = {
    open: 'Ouvert',
    closed: 'Fermé',
    archived: 'Archivé',
};

function getClass(status: string) {
    switch (status) {
        case 'open':
            return 'text-success-text bg-success-bg border-success-border';
        case 'closed':
            return 'text-error-text bg-error-bg border-error-border';
        case 'archived':
            return 'text-warning-text bg-warning-bg border-warning-border';
        default:
            return '';
    }
}
</script>

<template>
    <Badge variant="outline" :class="getClass(status)">{{ statusMap[status] }}</Badge>
</template>
