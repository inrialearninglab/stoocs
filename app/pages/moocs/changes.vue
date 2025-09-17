<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next';
import { toast } from 'vue-sonner';
import Refresh from '~/components/utils/Refresh.vue';

definePageMeta({
    layout: 'dashboard',
});

const { data, error, refresh } = await useFetch('/api/courses/changes');
const { courses, sessions } = toRefs(data.value as any);

const moocsStore = useMoocs();

async function handleSubmit() {
    try {
        await $fetch('/api/courses');
        toast.success('La liste des MOOCs a été mise à jour');
        await moocsStore.fetchMoocs();

        await navigateTo('/moocs');
    } catch (e) {
        console.error(e);
        toast.error('Une erreur est survenue durant la mise à jour');
        await navigateTo('/moocs');
    }
}

const changesEmpty = computed(() => {
    return (
        courses.value.insertions.length === 0 &&
        courses.value.deletions.length === 0 &&
        courses.value.updates.length === 0 &&
        sessions.value.insertions.length === 0 &&
        sessions.value.deletions.length === 0 &&
        sessions.value.updates.length === 0
    );
});

const refreshButton = ref<InstanceType<typeof Refresh>>();
async function handleRefresh() {
    if (!refreshButton.value) return;

    refreshButton.value.onStartLoad();
    refresh();
    refreshButton.value.onEndLoad();
}
</script>

<template>
    <div class="space-y-8">
        <div class="flex justify-between items-center">
            <div class="space-y-2">
                <h1>Valider les modifications</h1>
                <p class="text-muted-foreground">Les changements suivant vont être appliqué à la liste des MOOCs</p>
            </div>
            <Refresh ref="refreshButton" @refresh="handleRefresh" />
        </div>

        <Alert v-if="error" variant="destructive">
            <AlertCircle class="size-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>Les changements n'ont pas pu être analyser</AlertDescription>
        </Alert>
        <template v-else>
            <h2 v-if="changesEmpty">Aucune modification détectées</h2>
            <ChangesList v-else :courses="courses" :sessions="sessions" />
        </template>
        <div class="flex gap-4">
            <Button as-child class="flex-1" variant="secondary">
                <NuxtLink to="/moocs"> Annuler </NuxtLink>
            </Button>
            <Button @click="handleSubmit" class="flex-1" :disabled="error || changesEmpty"> Valider </Button>
        </div>
    </div>
</template>
