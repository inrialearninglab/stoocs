<script setup lang="ts">
import { ArrowDownUp, ArrowDown } from 'lucide-vue-next';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from '~/components/ui/table';

const moocsStore = useMoocs();
</script>

<template>
    <div class="space-y-3">
        <MoocFilter />
        <div class="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead class="w-[6rem]">ID MOOC</TableHead>
                        <TableHead>
                            <Button variant="ghost" @click="moocsStore.filters.sortBy = 'name'">
                                Nom MOOC
                                <ArrowDownUp v-if="moocsStore.filters.sortBy !== 'name'" class="size-5 ml-2" />
                                <ArrowDown v-else class="size-5 ml-2" />
                            </Button>
                        </TableHead>
                        <TableHead>Nom session</TableHead>
                        <TableHead>
                            <Button variant="ghost" @click="moocsStore.filters.sortBy = 'enrollments'">
                                Apprenants
                                <ArrowDownUp v-if="moocsStore.filters.sortBy !== 'enrollments'" class="size-5 ml-2" />
                                <ArrowDown v-else class="size-5 ml-2" />
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button variant="ghost" @click="moocsStore.filters.sortBy = 'start'">
                                Date début
                                <ArrowDownUp v-if="moocsStore.filters.sortBy !== 'start'" class="size-5 ml-2" />
                                <ArrowDown v-else class="size-5 ml-2" />
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button variant="ghost" @click="moocsStore.filters.sortBy = 'end'">
                                Date fin
                                <ArrowDownUp v-if="moocsStore.filters.sortBy !== 'end'" class="size-5 ml-2" />
                                <ArrowDown v-else class="size-5 ml-2" />
                            </Button>
                        </TableHead>
                        <TableHead class="w-[10rem]" @click="moocsStore.filters.sortBy = 'status'">
                            <Button variant="ghost">
                                Status
                                <ArrowDownUp v-if="moocsStore.filters.sortBy !== 'status'" class="size-5 ml-2" />
                                <ArrowDown v-else class="size-5 ml-2" />
                            </Button>
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
                                    : ''
                            }}
                        </TableCell>
                        <TableCell>
                            {{ session.startDate ? formatDate(new Date(session.startDate)) : '' }}
                        </TableCell>
                        <TableCell>
                            {{ session.endDate ? formatDate(new Date(session.endDate)) : '' }}
                        </TableCell>
                        <TableCell class="w-min">
                            <MoocStatusBadge :status="moocsStore.getSessionStatus(session)" />
                            <!-- <Badge variant="outline" :class="getClass(moocsStore.getSessionStatus(session))">{{
                            moocsStore.getSessionStatus(session)
                        }}</Badge> -->
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{{ moocsStore.filteredSessions.length }} Sessions</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{{
                            moocsStore.filteredSessions
                                .reduce((acc, session) => acc + (session?.totalEnrollments ?? 0), 0)
                                .toLocaleString('fr-FR')
                        }}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    </div>
</template>
