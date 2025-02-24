<script setup lang="ts">
import type { SessionsChanges, CoursesChanges } from '~/types/changes.type';
import { ArrowRight } from 'lucide-vue-next';

defineProps<{
    courses: CoursesChanges;
    sessions: SessionsChanges;
}>();
</script>

<template>
    <div class="space-y-5">
        <template v-if="courses.deletions.length || sessions.deletions.length">
            <h2>Suppression</h2>

            <h3>MOOCs ({{ courses.deletions.length }})</h3>
            <div class="space-y-3">
                <Card
                    v-for="deletion of courses.deletions"
                    class="px-3 py-2 flex flex-col border-error-border bg-error-bg text-error-text"
                >
                    <p class="flex">
                        <span class="font-bold">Numéro du MOOC :&nbsp</span>
                        <span>{{ deletion.courseNumber }}</span>
                    </p>
                    <p class="flex">
                        <span class="font-bold">Titre du MOOC :&nbsp</span>
                        <span>{{ deletion.title }}</span>
                    </p>
                </Card>
            </div>

            <h3>Sessions ({{ sessions.deletions.length }})</h3>
            <div class="space-y-3">
                <Card
                    v-for="deletion of sessions.deletions"
                    class="px-3 py-2 flex flex-col border-error-border bg-error-bg text-error-text"
                >
                    <p class="flex">
                        <span class="font-bold">Numéro du MOOC :&nbsp</span>
                        <span>{{ deletion.mooc.courseNumber }}</span>
                    </p>
                    <p class="flex">
                        <span class="font-bold">Titre du MOOC :&nbsp</span>
                        <span>{{ deletion.mooc.title }}</span>
                    </p>
                    <p class="flex">
                        <span class="font-bold">Nom de la session :&nbsp</span>
                        <span>{{ deletion.sessionName }}</span>
                    </p>
                </Card>
            </div>
        </template>

        <template v-if="courses.updates.length || sessions.updates.length">
            <h2>Mise à jour</h2>

            <h3>MOOCs ({{ courses.updates.length }})</h3>
            <div class="space-y-3">
                <Card
                    v-for="update of courses.updates"
                    class="px-3 py-2 flex flex-col border-warning-border bg-warning-bg text-warning-text"
                >
                    <p class="flex mb-3">
                        <span class="font-bold">Numéro du MOOC :&nbsp</span>
                        <span>{{ update.courseNumber }}</span>
                    </p>

                    <p v-if="update.title" class="flex">
                        <span class="font-bold">Titre du MOOC :&nbsp</span>
                        <span class="flex gap-2 items-center">
                            {{ update.title.old }} <ArrowRight class="size-5" /> {{ update.title.new }}
                        </span>
                    </p>
                    <p v-if="update.organization" class="flex">
                        <span class="font-bold">Organisation :&nbsp</span>
                        <span class="flex gap-2 items-center">
                            {{ update.organization.old }} <ArrowRight class="size-5" /> {{ update.organization.new }}
                        </span>
                    </p>
                </Card>
            </div>

            <h3>Session ({{ sessions.updates.length }})</h3>
            <div class="space-y-3">
                <Card
                    v-for="update of sessions.updates"
                    class="px-3 py-2 flex flex-col border-warning-border bg-warning-bg text-warning-text"
                >
                    <p class="flex">
                        <span class="font-bold">Numéro du MOOC :&nbsp</span>
                        <span>{{ update.courseNumber }}</span>
                    </p>
                    <p class="flex mb-3">
                        <span class="font-bold">Nom de la session :&nbsp</span>
                        <span>{{ update.sessionName }}</span>
                    </p>

                    <p class="flex" v-if="update.startDate">
                        <span class="font-bold">Date de début :&nbsp</span>
                        <span class="flex gap-2 items-center">
                            {{ update.startDate.old }} <ArrowRight class="size-5" /> {{ update.startDate.new }}
                        </span>
                    </p>
                    <p class="flex" v-if="update.endDate">
                        <span class="font-bold">Date de fin :&nbsp</span>
                        <span class="flex gap-2 items-center">
                            {{ update.endDate.old }} <ArrowRight class="size-5" /> {{ update.endDate.new }}
                        </span>
                    </p>
                    <p class="flex" v-if="update.cutoffs">
                        <span class="font-bold">Seuil de réussite :&nbsp</span>
                        <span class="flex gap-2 items-center">
                            {{ update.cutoffs.old }} <ArrowRight class="size-5" /> {{ update.cutoffs.new }}
                        </span>
                    </p>
                    <p class="flex" v-if="update.url">
                        <span class="font-bold">URL :&nbsp</span>
                        <span class="flex gap-2 items-center">
                            {{ update.url.old }} <ArrowRight class="size-5" /> {{ update.url.new }}
                        </span>
                    </p>
                </Card>
            </div>
        </template>

        <template v-if="courses.insertions.length || sessions.insertions.length">
            <h2>Insertion</h2>

            <h3>MOOCs ({{ courses.insertions.length }})</h3>
            <div class="space-y-3">
                <Card
                    v-for="insert of courses.insertions"
                    class="px-3 py-2 flex flex-col border-success-border bg-success-bg text-success-text"
                >
                    <p class="flex mb-3">
                        <span class="font-bold">Numéro du MOOC :&nbsp</span>
                        <span>{{ insert.courseNumber }}</span>
                    </p>

                    <p class="flex">
                        <span class="font-bold">Titre du MOOC :&nbsp</span>
                        <span>{{ insert.title }}</span>
                    </p>
                    <p class="flex">
                        <span class="font-bold">Organisation :&nbsp</span>
                        <span>{{ insert.organization }}</span>
                    </p>
                </Card>
            </div>

            <h3>Sessions ({{ sessions.insertions.length }})</h3>
            <div class="space-y-3">
                <Card
                    v-for="insert of sessions.insertions"
                    class="px-3 py-2 flex flex-col border-success-border bg-success-bg text-success-text"
                >
                    <p class="flex">
                        <span class="font-bold">Numéro du MOOC :&nbsp</span>
                        <span>{{ insert.courseNumber }}</span>
                    </p>
                    <p class="flex mb-3">
                        <span class="font-bold">Nom de la session :&nbsp</span>
                        <span>{{ insert.sessionName }}</span>
                    </p>

                    <p class="flex">
                        <span class="font-bold">Date de début :&nbsp</span>
                        <span>{{ insert.startDate }} </span>
                    </p>
                    <p class="flex">
                        <span class="font-bold">Date de fin :&nbsp</span>
                        <span>{{ insert.endDate }} </span>
                    </p>
                    <p class="flex">
                        <span class="font-bold">Seuil de réussite :&nbsp</span>
                        <span>{{ insert.cutoffs }} </span>
                    </p>
                    <p class="flex">
                        <span class="font-bold">URL :&nbsp</span>
                        <span>{{ insert.url }} </span>
                    </p>
                </Card>
            </div>
        </template>
    </div>
</template>
