<script setup lang="ts">
import { postEnrollments } from '~/services/files.service';
import { CircleX, CircleCheck } from 'lucide-vue-next';

const props = defineProps<{
    sessionId: string
}>();

const files = ref<File[]>([]);

async function handleSubmit() {
    const file = files.value[0];
    const body = new FormData();

    body.append('file', file);
    await postEnrollments(body, props.sessionId);
}

const conditions = computed(() => {
    return  {
        'enrollments.csv': files.value.length === 1 && files.value[0].name === 'enrollments.csv',
    }
})

</script>

<template>
    <Dialog>
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
                <Button @click="handleSubmit" class="w-full" type="submit">Valider</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>