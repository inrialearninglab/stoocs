<script setup lang="ts">
defineProps<{
    value: number;
    noun: string;
    icon?: Component;
    chip?: 'grade' | 'enrollment';
}>();
</script>

<template>
    <Card class="w-full max-w-sm relative">
        <CardHeader>
            <div class="flex gap-5 justify-between items-center">
                <CardTitle><slot name="title" /></CardTitle>
                <component :is="icon" class="size-4 text-muted-foreground" />
            </div>
            <CardDescription><slot name="description" /></CardDescription>
            <MetricsReportChip v-if="chip" :report="chip" />
        </CardHeader>
        <CardContent>
            <h2 class="text-center">{{ value.toLocaleString('fr-FR') }} {{ noun }}</h2>
        </CardContent>
    </Card>
</template>
