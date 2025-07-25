import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-vue-next';
export { default as DataTable } from './DataTable.vue';

export function getSortIcon(sort: 'asc' | 'desc' | false) {
    return sort === 'asc' ? ArrowUp : sort === 'desc' ? ArrowDown : ArrowUpDown;
}
