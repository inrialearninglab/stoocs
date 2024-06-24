<script lang="ts" setup>
import { useDropzone } from 'vue3-dropzone';
import { Upload, X } from 'lucide-vue-next';
import { useVModel } from '@vueuse/core';

const props = defineProps<{
    modelValue: File[];
    multiple?: boolean;
    maxFiles?: number;
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', payload: File | File[]): void
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true
});

function onDrop(acceptFiles, rejectReasons) {
    console.log('acceptFiles', acceptFiles);
    console.log('rejectReasons', rejectReasons);
    if (props.multiple) {
        modelValue.value.push(...acceptFiles)
    } else if(acceptFiles.length) {
        modelValue.value = acceptFiles
    }
}

function removeFile(index: number) {
    modelValue.value.splice(index, 1);
}

const { getRootProps, getInputProps, ...rest } = useDropzone({
    onDrop,
    multiple: props.multiple,
    maxFiles: props.maxFiles,
    accept: '.csv'
});

const isDragActive = rest.isDragActive;

</script>

<template>
    <div class="flex flex-col gap-6">
        <div v-bind="getRootProps()" class="dropzone">
            <div class="flex flex-col gap-4 place-items-center w-full">
                <input v-bind="getInputProps()" />
                <div class="rounded-full border border-dashed p-4 w-fit">
                    <Upload />
                </div>
                <p v-if="isDragActive">Déposer le fichier ici...</p>
                <p v-else>Glisser déposer le fichier ici, ou cliquer ici pour le selectionner</p>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div v-for="(file, index) of modelValue" class="flex items-center">
               <div class="flex flex-col flex-1">
                   <p class="text-sm">{{ file.name }}</p>
                   <small class="text-xs text-muted-foreground">{{ Math.round(file.size / (1024 * 1024)) }} Mo</small>
               </div>
                <Button @click="removeFile(index)" variant="outline" size="icon" class="size-7">
                    <X class="size-4" />
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.dropzone {
    @apply w-full border-2 border-dashed p-5 rounded-lg cursor-pointer hover:bg-muted/25 transition h-52 flex items-center text-muted-foreground;
}
</style>
