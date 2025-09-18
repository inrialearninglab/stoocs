<script setup lang="ts">
import { Search, X } from 'lucide-vue-next';
import { type DateValue, parseDate } from '@internationalized/date';
import type { Table } from '@tanstack/vue-table';
import type { MoocSession } from '@prisma/client';
import { useUrlSearchParams } from '@vueuse/core';

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

const params = useUrlSearchParams('history');
const search = computed({
    get: () => params.search || '',
    set: (value) => (params.search = value || undefined),
});

const selectedMoocs = ref<Set<string>>(new Set(params.moocs ? params.moocs.split(',') : undefined));
const selectedStatus = ref<Set<string>>(new Set(params.status ? params.status.split(',') : undefined));

const startDateFrom = ref<DateValue | undefined>(params.startFrom ? parseDate(params.startFrom) : undefined);
const startDateTo = ref<DateValue | undefined>(params.startTo ? parseDate(params.startTo) : undefined);
const endDateFrom = ref<DateValue | undefined>(params.endFrom ? parseDate(params.endFrom) : undefined);
const endDateTo = ref<DateValue | undefined>(params.endTo ? parseDate(params.endTo) : undefined);

watch(search, (value) => {
    props.table.setGlobalFilter(value);
});

watch(
    selectedMoocs,
    (value) => {
        props.table.getColumn('courseNumber')?.setFilterValue(value.size > 0 ? Array.from(value) : undefined);
        params.moocs = value.size > 0 ? Array.from(value).join(',') : undefined;
    },
    { deep: true },
);

watch(
    selectedStatus,
    (value) => {
        props.table.getColumn('status')?.setFilterValue(value.size > 0 ? Array.from(value) : undefined);
        params.status = value.size > 0 ? Array.from(value).join(',') : undefined;
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
        params.startFrom = from ? new Date(from).toISOString().split('T')[0] : undefined;
        params.startTo = to ? new Date(to).toISOString().split('T')[0] : undefined;
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
        params.endFrom = from ? new Date(from).toISOString().split('T')[0] : undefined;
        params.endTo = to ? new Date(to).toISOString().split('T')[0] : undefined;
    } else {
        props.table.getColumn('endDate')?.setFilterValue(undefined);
    }
});

const hasActiveFilters = computed(() => {
    return (
        search.value ||
        selectedMoocs.value.size > 0 ||
        selectedStatus.value.size > 0 ||
        startDateFrom.value ||
        startDateTo.value ||
        endDateFrom.value ||
        endDateTo.value
    );
});

function resetFilters() {
    search.value = '';
    selectedMoocs.value.clear();
    selectedStatus.value.clear();
    startDateFrom.value = undefined;
    startDateTo.value = undefined;
    endDateFrom.value = undefined;
    endDateTo.value = undefined;
    props.table.resetColumnFilters();
}

onMounted(() => {
    if (search.value) {
        props.table.setGlobalFilter(search.value);
    }

    if (selectedMoocs.value.size > 0) {
        props.table.getColumn('courseNumber')?.setFilterValue(Array.from(selectedMoocs.value));
    }

    if (selectedStatus.value.size > 0) {
        props.table.getColumn('status')?.setFilterValue(Array.from(selectedStatus.value));
    }

    if (startDateFrom.value || startDateTo.value) {
        const filterValue = {
            from: startDateFrom.value
                ? new Date(startDateFrom.value.year, startDateFrom.value.month - 1, startDateFrom.value.day)
                : undefined,
            to: startDateTo.value
                ? new Date(startDateTo.value.year, startDateTo.value.month - 1, startDateTo.value.day)
                : undefined,
        };
        props.table.getColumn('startDate')?.setFilterValue(filterValue);
    }

    if (endDateFrom.value || endDateTo.value) {
        const filterValue = {
            from: endDateFrom.value
                ? new Date(endDateFrom.value.year, endDateFrom.value.month - 1, endDateFrom.value.day)
                : undefined,
            to: endDateTo.value
                ? new Date(endDateTo.value.year, endDateTo.value.month - 1, endDateTo.value.day)
                : undefined,
        };
        props.table.getColumn('endDate')?.setFilterValue(filterValue);
    }
});
</script>

<template>
    <div class="flex gap-2">
        <div class="relative w-full max-w-sm items-center">
            <Input id="search" v-model="search" placeholder="Chercher par nom" class="pl-8" />
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
