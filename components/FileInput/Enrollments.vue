<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { useSession } from '~/stores/session.store';

const files = ref<File[]>([]);
const sessionStore = useSession();

const loading = ref(false);
const open = ref(false);

async function handleSubmit() {
    loading.value = true;
    const file = files.value[0];
    const body = new FormData();

    body.append('file', file);
    await sessionStore.addEnrollmentsReport(body);
    loading.value = false;
    open.value = false;
}

const enrollmentsRegex = /^enrollments(\s\(\d+\))?\.csv$/;

const conditions = computed(() => {
    return  {
        'enrollments.csv': files.value.length === 1 && enrollmentsRegex.test(files.value[0].name),
    }
})

const conditionsFilled = computed(() => {
    return Object.values(conditions.value).every(condition => condition);
})

defineExpose({
    open,
    files
})

</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child class>
            <Button variant="outline">Ajouter un rapport</Button>
        </DialogTrigger>

        <DialogContent class="max-w-2xl">
            <DialogHeader>
                <DialogTitle>Ajouter un rapport d'inscription</DialogTitle>
                <DialogDescription>Ajouter le fichier "<code>enrollments.csv</code>" du "Course dashboard" de FUN ici</DialogDescription>
            </DialogHeader>
            <FileUploader v-model="files" :conditions="conditions" />
            <DialogFooter class="mt-4">
                <Button :disabled="loading || !conditionsFilled" @click="handleSubmit" class="w-full" type="submit">
                    <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
                    Valider
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>