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
            return 'text-success bg-success/10 border-success/25';
        case 'closed':
            return 'text-error bg-error/10 border-error/25';
        case 'archived':
            return 'text-warning bg-warning/10 border-warning/25';
        default:
            return '';
    }
}
</script>

<template>
    <Badge variant="outline" :class="getClass(status)">{{ statusMap[status] }}</Badge>
</template>
