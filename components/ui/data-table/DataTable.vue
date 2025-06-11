<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef, SortingState, ColumnFiltersState } from '@tanstack/vue-table';
import { FlexRender, getCoreRowModel, useVueTable, getSortedRowModel, getFilteredRowModel } from '@tanstack/vue-table';
import { valueUpdater } from '~/lib/utils';

const props = defineProps<{
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    enableFiltering?: boolean;
    border?: boolean;
}>();

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);

const table = useVueTable({
    get data() {
        return props.data;
    },
    get columns() {
        return props.columns;
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: props.enableFiltering ? getFilteredRowModel() : undefined,
    onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: props.enableFiltering
        ? (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters)
        : undefined,
    state: {
        get sorting() {
            return sorting.value;
        },
        get columnFilters() {
            return props.enableFiltering ? columnFilters.value : [];
        },
    },
});

function getRowClass(row: any) {
    return (row.original as any)._rowClass || '';
}

defineExpose({
    table,
    columnFilters,
});
</script>

<template>
    <div class="space-y-3">
        <slot name="filters" :table="table" :columnFilters="columnFilters" />

        <div :class="{ 'border rounded-md': border }">
            <Table>
                <TableHeader>
                    <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                        <TableHead v-for="header in headerGroup.headers" :key="header.id">
                            <FlexRender
                                v-if="!header.isPlaceholder"
                                :render="header.column.columnDef.header"
                                :props="header.getContext()"
                            />
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <template v-if="table.getRowModel().rows?.length">
                        <TableRow
                            v-for="row in table.getRowModel().rows"
                            :key="row.id"
                            :data-state="row.getIsSelected() ? 'selected' : undefined"
                            :class="getRowClass(row)"
                        >
                            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                            </TableCell>
                        </TableRow>
                    </template>

                    <template v-else>
                        <TableRow>
                            <TableCell :colspan="columns.length" class="h-24 text-center"> No results. </TableCell>
                        </TableRow>
                    </template>
                </TableBody>

                <slot name="footer" />
            </Table>
        </div>
    </div>
</template>
