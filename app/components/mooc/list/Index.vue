<script setup lang="ts">
import { columns } from './columns';
import { useClipboard } from '@vueuse/core';
import { Copy, CopyCheck } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

const moocsStore = useMoocs();

function getUniqueMoocsCount(rows: any) {
    const uniqueMoocs = new Set();
    rows.forEach((row: any) => {
        if (row.original?.courseNumber) {
            uniqueMoocs.add(row.original.courseNumber);
        }
    });
    return uniqueMoocs.size;
}

const { copy, copied } = useClipboard();
function copyUrl() {
    copy(window.location.href);
    toast.success('Link copied to clipboard');
}
</script>

<template>
    <DataTable :columns="columns" :data="moocsStore.sessions" enable-filtering border>
        <template #filters="{ table }">
            <div class="flex justify-between">
                <MoocFilter :table="table" />

                <Button class="flex items-center gap-2" @click="copyUrl">
                    <p>Copy link</p>
                    <Copy v-if="!copied" class="size-5" />
                    <CopyCheck v-else class="size-5" />
                </Button>
            </div>
        </template>

        <template #footer="{ table }">
            <TableFooter>
                <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>{{ getUniqueMoocsCount(table.getFilteredRowModel().rows) }} MOOC</TableCell>
                    <TableCell>{{ table.getFilteredRowModel().rows.length }} Sessions</TableCell>
                    <TableCell>
                        {{
                            table
                                .getFilteredRowModel()
                                .rows.reduce((acc, row) => acc + (row.original?.totalEnrollments ?? 0), 0)
                                .toLocaleString('fr-FR')
                        }}
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableFooter>
        </template>
    </DataTable>
</template>
