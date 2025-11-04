<script setup lang="ts">
const reports = useTemplateRef('reports');

definePageMeta({
    middleware: 'guest',
    layout: 'session',
});
</script>

<template>
    <div class="flex flex-1 flex-col min-h-full gap-12">
        <SessionReports ref="reports" />

        <template v-if="!reports?.dragging">
            <Separator />
            <SessionForum />
        </template>
    </div>
</template>
