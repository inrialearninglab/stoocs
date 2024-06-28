<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Upload } from 'lucide-vue-next';
import { type FileRejectReason, useDropzone } from 'vue3-dropzone';

defineProps<{
    title: string;
    description: string;
    loading: boolean;
    empty: boolean;
}>();

const emits = defineEmits<{
    (e: 'upload', payload: File[]): void
}>();

const dragging = ref(false);

function handleDragLeave(event: any) {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    dragging.value = false;
}

function onDrop(acceptFiles: any[], rejectReasons: FileRejectReason[]) {
    dragging.value = false;
    emits('upload', acceptFiles);
}

const { getRootProps, getInputProps, ...rest } = useDropzone({
    onDrop,
    multiple: true,
    accept: '.csv'
});

</script>

<template>
    <Card>
       <CardHeader class="pb-3">
           <CardTitle>{{ title }}</CardTitle>
           <CardDescription>{{ description }}</CardDescription>
       </CardHeader>
        <CardContent @dragenter="dragging = true" @dragleave="handleDragLeave" class="flex flex-col gap-5">
            <div
                v-if="dragging"
                v-bind="getRootProps()"
                class="w-full h-[400px] border-2 border-dashed rounded-xl text-muted-foreground items-center flex"
            >
                <div class="flex flex-col gap-4 place-items-center w-full">
                    <input v-bind="getInputProps()">
                    <div class="rounded-full border border-dashed p-4 w-fit">
                        <Upload />
                    </div>
                    <h2>Déposez le fichier ici !</h2>
                </div>

            </div>

            <div v-else-if="!loading && empty" class="w-full h-[400px] items-center justify-center flex">
                <h2>Aucune donnée</h2>
            </div>
            <slot v-else />
        </CardContent>
    </Card>
</template>