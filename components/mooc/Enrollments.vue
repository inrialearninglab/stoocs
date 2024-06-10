<script setup lang="ts">
import { LineChart } from '@/components/ui/chart-line'
import { useMooc } from '~/stores/mooc.store';
import { CalendarDate, type DateValue, getLocalTimeZone, parseDate, today } from '@internationalized/date';

const moocStore = useMooc();
moocStore.fetchMooc();

const startDate = ref<DateValue>(new CalendarDate(2024, 4, 1));

const filteredData = computed(() => {
    if (!moocStore.mooc) return [];

    return moocStore.mooc.enrollments.filter((enrollment) => {
        const correctedDate = enrollment.date.replace(/\//g, '-');
        const enrollmentDate = parseDate(correctedDate).toDate(getLocalTimeZone());
        const startDateDate = startDate.value.toDate(getLocalTimeZone());
        return enrollmentDate >= startDateDate;
    });
});

</script>

<template>
    <div class="flex flex-col gap-2">
        <DatePicker v-model="startDate" />

        <LineChart
            v-if="moocStore.mooc"
            :data="filteredData"
            index="date"
            :categories="['enrollments']"
        />
    </div>
</template>
