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
        forumUrl: sessionStore?.forum?.data?.forumUrl,
        startDate: props.startDate,
        endDate: props.endDate,
    },
});
</script>

<template>
    <MetricsForumStandard
        id="posts"
        title="Posts sur le forum"
        description-label="posts sur le forum pour la période selectionnée"
        label="Posts"
        y-label="Nombre de posts"
        :start-date="startDate"
        :end-date="endDate"
        :loading="status === 'pending'"
        :details="details"
    />
</template>
