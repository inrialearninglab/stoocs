<script setup lang="ts">
import { columns } from './columns';

const moocsStore = useMoocs();
</script>

<template>
    <DataTable :columns="columns" :data="moocsStore.sessions" enable-filtering border>
        <template #filters="{ table }">
            <MoocFilter :table="table" />
        </template>

        <template #footer>
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
        </template>
    </DataTable>
</template>
