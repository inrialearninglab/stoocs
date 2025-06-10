import type { ColumnDef } from '@tanstack/vue-table';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';

export interface Question {
    name: string;
    Moyenne: number;
    Utilisateurs: number;
    _rowClass?: string;
}

export const columns: ColumnDef<Question>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            const Icon =
                column.getIsSorted() === 'asc' ? ArrowUp : column.getIsSorted() === 'desc' ? ArrowDown : ArrowUpDown;

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Nom', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
    },
    {
        accessorKey: 'Utilisateurs',
        header: ({ column }) => {
            const Icon =
                column.getIsSorted() === 'asc' ? ArrowUp : column.getIsSorted() === 'desc' ? ArrowDown : ArrowUpDown;

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Inscrits', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
    },
    {
        accessorKey: 'Moyenne',
        header: ({ column }) => {
            const Icon =
                column.getIsSorted() === 'asc' ? ArrowUp : column.getIsSorted() === 'desc' ? ArrowDown : ArrowUpDown;

            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => ['Moyenne', h(Icon, { class: 'ml-2 size-4' })],
            );
        },
        cell: ({ row }) => {
            const average = Number(row.getValue('Moyenne'));

            row.original._rowClass = getQuestionClass(average);

            return h('div', {}, `${average} %`);
        },
    },
];

function getQuestionClass(score: number) {
    if (score > 60) {
        return 'bg-success-bg text-success-text';
    } else if (score < 50) {
        return 'bg-error-bg text-error-text';
    } else {
        return 'bg-warning-bg text-warning-text';
    }
}
