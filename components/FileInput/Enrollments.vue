<script setup lang="ts">
import { postEnrollments } from '~/services/files.service';

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
            <FileUploader v-model="files" />
            <DialogFooter>
                <Button @click="handleSubmit" class="w-full" type="submit">Valider</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>