import type { ColumnDef } from '@tanstack/vue-table';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';
import type { MoocSession } from '@prisma/client';
import StatusBadge from '../StatusBadge.vue';
import { getSortIcon } from '~/components/ui/data-table';

const multiSelectFilter = (row: any, columnId: string, value: string[]) => {
    if (!value || value.length === 0) return true;
    const cellValue = row.getValue(columnId);
    return value.includes(cellValue);
};

const globalFilterFn = (row: any, columnId: string, value: string) => {
    if (!value) return true;

    const searchValue = value.toLowerCase();

    const title = row.getValue('title')?.toString()?.toLowerCase() || '';
    const courseNumber = row.getValue('courseNumber')?.toString()?.toLowerCase() || '';
    const sessionName = row.getValue('sessionName')?.toString()?.toLowerCase() || '';

    return title.includes(searchValue) || courseNumber.includes(searchValue) || sessionName.includes(searchValue);
};

const dateRangeFilter = (row: any, columnId: string, value: { from?: Date; to?: Date }) => {
    if (!value || (!value.from && !value.to)) return true;

    const cellValue = row.getValue(columnId);
    if (!cellValue) return true;

    const cellDate = new Date(cellValue);

    const cellDateOnly = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate());

    if (value.from) {
        const fromDateOnly = new Date(value.from.getFullYear(), value.from.getMonth(), value.from.getDate());
        if (cellDateOnly < fromDateOnly) return false;
    }

    if (value.to) {
        const toDateOnly = new Date(value.to.getFullYear(), value.to.getMonth(), value.to.getDate());
        if (cellDateOnly > toDateOnly) return false;
    }

    return true;
};

export const columns: ColumnDef<MoocSession>[] = [
    // {
    //     accessorKey: 'id',
    // },
    {
        accessorKey: 'courseNumber',
        header: () => h('div', {}, 'ID MOOC'),
        filterFn: multiSelectFilter,
    },
    {
        accessorKey: 'title',
        header: ({ column }) => {
            const Icon = getSortIcon(column.getIsSorted());

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Nom MOOC', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
        cell: ({ row }) =>
            h('a', { class: 'font-semibold', href: `/sessions/${row.original.id}` }, row.getValue('title')),
    },
    {
        accessorKey: 'sessionName',
        header: () => h('div', {}, 'Nom Session'),
    },
    {
        accessorKey: 'totalEnrollments',
        header: ({ column }) => {
            const Icon = getSortIcon(column.getIsSorted());

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Nb inscrits', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
    },
    {
        accessorKey: 'startDate',
        header: ({ column }) => {
            const Icon = getSortIcon(column.getIsSorted());

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Date ouverture', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
        cell: ({ row }) =>
            h('div', {}, row.getValue('startDate') ? formatDate(new Date(row.getValue('startDate'))) : '-'),
        filterFn: dateRangeFilter,
    },
    {
        accessorKey: 'endDate',
        header: ({ column }) => {
            const Icon = getSortIcon(column.getIsSorted());

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Date fermeture', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
        cell: ({ row }) => h('div', {}, row.getValue('endDate') ? formatDate(new Date(row.getValue('endDate'))) : '-'),
        filterFn: dateRangeFilter,
    },
    {
        id: 'gradeReport',
        accessorFn: (row) => row.gradeReports[0],
        header: ({ column }) => {
            const Icon = getSortIcon(column.getIsSorted());

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['% éligibles', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
        cell: ({ row }) => {
            const gradeReport = row.getValue('gradeReport');
            if (!gradeReport) return '-';

            return ((gradeReport.totalEligible / gradeReport.totalUsers) * 100).toFixed(2) + ' %';
        },
    },
    {
        id: 'status',
        accessorFn: (row) => getSessionStatus(row),
        header: ({ column }) => {
            const Icon = getSortIcon(column.getIsSorted());

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Status', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
        cell: ({ row }) => h(StatusBadge, { status: row.getValue('status') }),
        filterFn: multiSelectFilter,
    },
    {
        accessorKey: 'updateDate',
        header: ({ column }) => {
            const Icon = getSortIcon(column.getIsSorted());

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Mise à jour', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
        cell: ({ row }) =>
            h('div', {}, row.getValue('updateDate') ? formatDate(new Date(row.getValue('updateDate'))) : '-'),
    },
];
