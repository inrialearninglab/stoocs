<script setup lang="ts">
const props = defineProps<{
    startDate?: string;
    endDate?: string;
}>();

const sessionStore = useSession();

const { data: details, status } = await useFetch('/api/forum/signups', {
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
        id="signups"
        title="Inscriptions sur le forum"
        description-label="inscriptions sur le forum pour la période selectionnée"
        label="Inscriptions"
        y-label="Nombre d'inscrits"
        :start-date="startDate"
        :end-date="endDate"
        :loading="status === 'pending'"
        :details="details"
    />
</template>
