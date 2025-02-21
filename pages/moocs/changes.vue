<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

definePageMeta({
    layout: 'dashboard',
});

const { data, error } = await useFetch('/api/courses/changes');
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
</script>

<template>
    <Alert v-if="error" variant="destructive">
        <AlertCircle class="size-4" />
        <AlertTitle>Erreur</AlertTitle>
        <AlertDescription>Les changements n'ont pas pu être analyser</AlertDescription>
    </Alert>

    <div v-else class="space-y-8">
        <h1>Valider les changements</h1>
        <ChangesList :courses="courses" :sessions="sessions" />
        <div class="flex gap-4">
            <Button as-child class="flex-1" variant="secondary">
                <NuxtLink to="/moocs"> Annuler </NuxtLink>
            </Button>
            <Button @click="handleSubmit" class="flex-1"> Valider </Button>
        </div>
    </div>
</template>
