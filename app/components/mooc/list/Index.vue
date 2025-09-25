<script setup lang="ts">
import { columns } from './columns';
import { useClipboard } from '@vueuse/core';
import { Copy, CopyCheck, Download } from 'lucide-vue-next';
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

function exportTableAsCSV(table) {
    const firstRow = table.getFilteredRowModel().rows[0].original;
    console.log('first row', firstRow);
    const csvContent = 'data:text/csv;charset=utf-8,';
    const headers =
        "ID;Nom;Session;Nb inscrits;Date ouverture;Date fermeture;Pourcentage d'éligibles;Status;Mise à jour\n";
    const rows = table
        .getFilteredRowModel()
        .rows.map(
            (row) =>
                `${row.original.courseNumber};${row.original.title};${row.original.sessionName};${row.original.totalEnrollments};${row.original.startDate};${row.original.endDate};${row.original.gradeReport ? row.original.gradeReport.totalEligible / row.original.gradeReport.totalUsers : undefined};${row.original.status};${row.original.updateDate}\n`,
        )
        .join('');
    const csvData = headers + rows;
    const encodedUri = encodeURI(csvContent + csvData);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'questions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

        <template #actions="{ table }">
            <Button @click="exportTableAsCSV(table)"> <Download class="mr-2 size-5" /> Exporter en CSV </Button>
        </template>
    </DataTable>
</template>
