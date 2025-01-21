<script setup lang="ts">
const route = useRoute();
const moocsStore = useMoocs();

const mooc = computed(() => moocsStore.moocs.find((mooc) => mooc.id === (route.params.id as string)));

definePageMeta({
    layout: 'dashboard',
});
</script>

<template>
    <div v-if="mooc" class="space-y-8">
        <h1>{{ mooc.title }}</h1>
        <div class="gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <SessionItem v-for="session of mooc.sessions" :key="session.id" :session="session" />
        </div>
    </div>
</template>
