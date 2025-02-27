<script setup lang="ts">
import { ArrowDownUp, ArrowDown, ArrowUp } from 'lucide-vue-next';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from '~/components/ui/table';
import type { MoocFilter } from '~/types';

const moocsStore = useMoocs();

const heads: { label: string; sort?: MoocFilter['sortBy']['value'] }[] = [
    {
        label: 'ID MOOC',
    },
    {
        label: 'Nom MOOC',
        sort: 'name',
    },
    {
        label: 'Nom session',
    },
    {
        label: 'Apprenants',
        sort: 'enrollments',
    },
    {
        label: 'Date début',
        sort: 'start',
    },
    {
        label: 'Date fin',
        sort: 'end',
    },
    {
        label: 'Eligible',
        sort: 'eligible',
    },
    {
        label: 'Status',
        sort: 'status',
    },
    {
        label: 'Mise à jour',
        sort: 'updateDate',
    },
];

function sortBy(value: MoocFilter['sortBy']['value']) {
    if (moocsStore.filters.sortBy.value === value) {
        moocsStore.filters.sortBy.order = moocsStore.filters.sortBy.order === 'asc' ? 'desc' : 'asc';
    } else {
        moocsStore.filters.sortBy.value = value;
        moocsStore.filters.sortBy.order = 'asc';
    }
}
</script>

<template>
    <div class="space-y-3">
        <MoocFilter />
        <div class="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead v-for="head of heads">
                            <Button v-if="head.sort" @click="sortBy(head.sort)" variant="ghost">
                                {{ head.label }}
                                <ArrowDownUp v-if="moocsStore.filters.sortBy.value !== head.sort" class="size-5 ml-2" />
                                <ArrowUp v-else-if="moocsStore.filters.sortBy.order === 'asc'" class="size-5 ml-2" />
                                <ArrowDown v-else class="size-5 ml-2" />
                            </Button>
                            <template v-else>
                                {{ head.label }}
                            </template>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="session of moocsStore.filteredSessions">
                        <TableCell>{{ session.courseNumber }}</TableCell>
                        <TableCell class="font-semibold">
                            <NuxtLink :to="`/sessions/${session.id}`">{{ session.title }}</NuxtLink>
                        </TableCell>
                        <TableCell>{{ session.sessionName }}</TableCell>
                        <TableCell>
                            {{
                                session.totalEnrollments
                                    ? Number(session?.totalEnrollments).toLocaleString('fr-FR')
                                    : '-'
                            }}
                        </TableCell>
                        <TableCell>
                            {{ session.startDate ? formatDate(new Date(session.startDate)) : '-' }}
                        </TableCell>
                        <TableCell>
                            {{ session.endDate ? formatDate(new Date(session.endDate)) : '-' }}
                        </TableCell>
                        <TableCell>
                            {{
                                session.gradeReports[0]
                                    ? (
                                          (session.gradeReports[0].totalEligible / session.gradeReports[0].totalUsers) *
                                          100
                                      ).toFixed(1) + ' %'
                                    : '-'
                            }}
                        </TableCell>
                        <TableCell class="w-min">
                            <MoocStatusBadge :status="moocsStore.getSessionStatus(session)" />
                        </TableCell>
                        <TableCell>
                            {{ session.updateDate ? formatDate(new Date(session.updateDate)) : '-' }}
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{{ moocsStore.filteredMoocsCount }} MOOC</TableCell>
                        <TableCell>{{ moocsStore.filteredSessions.length }} Sessions</TableCell>
                        <TableCell>
                            {{
                                moocsStore.filteredSessions
                                    .reduce((acc, session) => acc + (session?.totalEnrollments ?? 0), 0)
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
            </Table>
        </div>
    </div>
</template>
