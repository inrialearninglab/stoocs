<script setup lang="ts">
import { columns } from './columns';

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
</script>

<template>
    <DataTable :columns="columns" :data="moocsStore.sessions" enable-filtering border>
        <template #filters="{ table }">
            <MoocFilter :table="table" />
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
