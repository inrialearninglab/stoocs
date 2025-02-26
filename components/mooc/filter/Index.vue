<script setup lang="ts">
import { Search, X } from 'lucide-vue-next';
import type { DateValue } from '@internationalized/date';

const moocsStore = useMoocs();

const sessionStatus = [
    {
        value: 'open',
        label: 'Ouvert',
    },
    {
        value: 'closed',
        label: 'Fermé',
    },
    {
        value: 'archived',
        label: 'Archivé',
    },
];

const status: Ref<Set<string>> = ref(new Set());

const moocs = computed(() => {
    return moocsStore.moocs
        .map((mooc) => ({
            label: mooc.title,
            value: mooc.courseNumber,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
});
</script>

<template>
    <div class="flex gap-2">
        <div class="relative w-full max-w-sm items-center">
            <Input
                ref="searchInput"
                id="search"
                v-model="moocsStore.filters.search"
                placeholder="Chercher par nom"
                class="pl-8"
            />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                <Search class="size-5 text-muted-foreground" />
            </span>
        </div>
        <MoocFilterInput label="MOOC" :options="moocs" v-model="moocsStore.filters.moocs" />

        <MoocFilterInput
            :is-status="true"
            label="Status"
            :options="sessionStatus"
            v-model="moocsStore.filters.status"
        />

        <MoocFilterDate
            label="Date début"
            v-model:from="moocsStore.filters.startDate.from"
            v-model:to="moocsStore.filters.startDate.to"
        />
        <MoocFilterDate
            label="Date fin"
            v-model:from="moocsStore.filters.endDate.from"
            v-model:to="moocsStore.filters.endDate.to"
        />

        <Button v-if="!moocsStore.isFilterNull" @click="moocsStore.resetFilters()" variant="ghost">
            Reset <X class="size-5 ml-2" />
        </Button>
    </div>
</template>
