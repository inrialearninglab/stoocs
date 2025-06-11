<script setup lang="ts">
import { Search, X } from 'lucide-vue-next';
import type { DateValue } from '@internationalized/date';
import type { Table } from '@tanstack/vue-table';
import type { MoocSession } from '@prisma/client';

const props = defineProps<{
    table: Table<MoocSession>;
}>();

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

const moocs = computed(() => {
    return moocsStore.moocs
        .map((mooc) => ({
            label: mooc.title,
            value: mooc.courseNumber,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
});

const searchValue = ref('');
const selectedMoocs = ref<Set<string>>(new Set());
const selectedStatus = ref<Set<string>>(new Set());
const startDateFrom = ref<DateValue>();
const startDateTo = ref<DateValue>();
const endDateFrom = ref<DateValue>();
const endDateTo = ref<DateValue>();

watch(searchValue, (value) => {
    props.table.setGlobalFilter(value);
});

watch(
    selectedMoocs,
    (value) => {
        props.table.getColumn('courseNumber')?.setFilterValue(value.size > 0 ? Array.from(value) : undefined);
    },
    { deep: true },
);

watch(
    selectedStatus,
    (value) => {
        props.table.getColumn('status')?.setFilterValue(value.size > 0 ? Array.from(value) : undefined);
    },
    { deep: true },
);

watch([startDateFrom, startDateTo], ([from, to]) => {
    if (from || to) {
        const filterValue = {
            from: from ? new Date(from.year, from.month - 1, from.day) : undefined,
            to: to ? new Date(to.year, to.month - 1, to.day) : undefined,
        };
        props.table.getColumn('startDate')?.setFilterValue(filterValue);
    } else {
        props.table.getColumn('startDate')?.setFilterValue(undefined);
    }
});

watch([endDateFrom, endDateTo], ([from, to]) => {
    if (from || to) {
        const filterValue = {
            from: from ? new Date(from.year, from.month - 1, from.day) : undefined,
            to: to ? new Date(to.year, to.month - 1, to.day) : undefined,
        };
        props.table.getColumn('endDate')?.setFilterValue(filterValue);
    } else {
        props.table.getColumn('endDate')?.setFilterValue(undefined);
    }
});

const hasActiveFilters = computed(() => {
    return (
        searchValue.value ||
        selectedMoocs.value.size > 0 ||
        selectedStatus.value.size > 0 ||
        startDateFrom.value ||
        startDateTo.value ||
        endDateFrom.value ||
        endDateTo.value
    );
});

function resetFilters() {
    searchValue.value = '';
    selectedMoocs.value.clear();
    selectedStatus.value.clear();
    startDateFrom.value = undefined;
    startDateTo.value = undefined;
    endDateFrom.value = undefined;
    endDateTo.value = undefined;
    props.table.resetColumnFilters();
}
</script>

<template>
    <div class="flex gap-2">
        <div class="relative w-full max-w-sm items-center">
            <Input id="search" v-model="searchValue" placeholder="Chercher par nom" class="pl-8" />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                <Search class="size-5 text-muted-foreground" />
            </span>
        </div>

        <MoocFilterInput label="MOOC" :options="moocs" v-model="selectedMoocs" />

        <MoocFilterInput :is-status="true" label="Status" :options="sessionStatus" v-model="selectedStatus" />

        <MoocFilterDate label="Date ouverture" v-model:from="startDateFrom" v-model:to="startDateTo" />

        <MoocFilterDate label="Date fermeture" v-model:from="endDateFrom" v-model:to="endDateTo" />

        <Button v-if="hasActiveFilters" @click="resetFilters()" variant="ghost">
            Reset <X class="size-5 ml-2" />
        </Button>
    </div>
</template>
