<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { useSession } from '~/stores/session.store';
// import { isEnrollments } from '~/utils';
import Button from '~/components/ui/button/Button.vue';

const files: Ref<File[]> = ref([]);
const sessionStore = useSession();

const loading = ref(false);
const open = ref(false);

async function handleSubmit() {
    loading.value = true;
    const file = files.value[0];
    const body = new FormData();

    body.append('file', file);
    // await sessionStore.
    loading.value = false;
    open.value = false;
    files.value = [];
}

const conditions = computed(() => {
    return {
        'profile-info': files.value.length === 1,
    };
});

const conditionsFilled = computed(() => {
    return Object.values(conditions.value).every((condition) => condition);
});

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
            <DialogHeader>
                <DialogTitle>Ajouter un rapport d'information des profils</DialogTitle>
                <DialogDescription> Ajouter le fichier "<code>Student Profile Info</code>" ici </DialogDescription>
            </DialogHeader>
            <UploadInput v-model="files" :conditions="conditions" />
            <DialogFooter>
                <Button
                    :disabled="loading || !conditionsFilled"
                    @click="handleSubmit"
                    class="w-full"
                    type="submit"
                    id="submit"
                >
                    <Loader2 v-if="loading" class="size-4 mr-2 animate-spin" />
                    Valider
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
