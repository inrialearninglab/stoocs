<script setup lang="ts">
type PrimaryData = {
    name: string;
    color: string;
    value: number;
};

type SecondaryData = {
    value: number;
};

const props = defineProps<{
    title?: string;
    data: (PrimaryData | SecondaryData)[];
}>();

function isPrimaryData(item: PrimaryData | SecondaryData): item is PrimaryData {
    return 'name' in item;
}

function isSecondaryData(item: PrimaryData | SecondaryData): item is SecondaryData {
    return !('name' in item);
}

const mainValue = computed(() => props.data.find(isPrimaryData));
const secondaryValue = computed(() => props.data.find(isSecondaryData));
</script>

<template>
    <Card class="text-sm">
        <CardHeader v-if="title" class="p-3 border-b">
            <CardTitle>
                {{ title }}
            </CardTitle>
        </CardHeader>
        <CardContent v-if="mainValue && secondaryValue" class="p-3 min-w-[180px] flex flex-col gap-1">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span class="size-2.5 mr-2">
                        <svg width="100%" height="100%" viewBox="0 0 30 30">
                            <path
                                d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0"
                                :stroke="mainValue.color"
                                :fill="mainValue.color"
                                stroke-width="1"
                            />
                        </svg>
                    </span>
                    <span>{{ mainValue.name }}</span>
                </div>
                <span class="font-semibold ml-4">{{ mainValue.value }}%</span>
            </div>
            <span class="self-end">{{ secondaryValue.value.toLocaleString('fr-FR') }} Inscrits</span>
        </CardContent>
    </Card>
</template>
