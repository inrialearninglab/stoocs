<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import { postSurveys } from '~/services/files.service';

const sessionStore = useSession();

const loading = ref(false);
const open = ref(false);
const files = ref<File[]>([]);

async function handleSubmit() {
    loading.value = true;
    const file = files.value[0];
    const body = new FormData();

    if (!sessionStore.session.data) {
        return;
    }

    body.append('file', file);
    await postSurveys(body, sessionStore.session.data.id);
    loading.value = false;
    open.value = false;
    files.value = [];
}

async function focusSubmit() {
    await nextTick();
    const submit = document.getElementById('submit');
    if (submit) {
        submit.focus();
    }
}

defineExpose({
    open,
    files,
    focusSubmit,
});
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="max-w-2xl">
            <DialogTitle>Ajouter un rapport de formulaires</DialogTitle>
            <DialogDescription>Ajouter...</DialogDescription>
            <UploadInput v-model="files" />

            <DialogFooter class="mt-4">
                <Button @click="handleSubmit" class="w-full" type="submit" id="submit"> Valider </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
