<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Upload } from 'lucide-vue-next';
import { type FileRejectReason, useDropzone } from 'vue3-dropzone';

defineProps<{
    title: string;
    description: string;
    loading: boolean;
    empty: boolean;
    report: 'enrollment' | 'grade';
}>();

</script>

<template>
    <Card>
       <CardHeader class="pb-3 relative">
           <CardTitle>{{ title }}</CardTitle>
           <CardDescription>{{ description }}</CardDescription>
           <GraphReportChip :report="report" />
       </CardHeader>
        <CardContent class="flex flex-col gap-5">
            <div v-if="!loading && empty" class="w-full h-[400px] items-center justify-center flex">
                <h2>Aucune donnée</h2>
            </div>
            <slot v-else />
        </CardContent>
    </Card>
</template>