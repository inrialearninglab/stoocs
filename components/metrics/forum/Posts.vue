<script setup lang="ts">
const props = defineProps<{
    startDate?: string;
    endDate?: string;
}>();

const sessionStore = useSession();

const { data: details, status } = await useFetch('/api/forum/posts', {
    method: 'POST',
    body: {
        instanceName: sessionStore?.forum?.data?.instance,
        startDate: props.startDate,
        endDate: props.endDate,
    },
});
</script>

<template>
    <MetricsForumStandard
        title="Posts sur le forum"
        description="Nombre de posts sur le forum par jour"
        label="Posts"
        y-label="Nombre de posts"
        :start-date="startDate"
        :end-date="endDate"
        :loading="status === 'pending'"
        :details="details"
    />
</template>
