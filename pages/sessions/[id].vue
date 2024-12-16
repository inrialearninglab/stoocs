<script setup lang="ts">
import SessionReports from '~/components/session/Reports.vue';

const reports: Ref<InstanceType<typeof SessionReports> | null> = ref(null);

definePageMeta({
    middleware: 'guest',
    layout: 'session',
});
</script>

<template>
    <div class="flex flex-1 flex-col min-h-full gap-12">
        <SessionReports ref="reports" />

        <template v-if="!reports?.dragging">
            <Separator class="border-2" />
            <SessionForum />
        </template>
    </div>
</template>
