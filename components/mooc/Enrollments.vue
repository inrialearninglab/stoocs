<script setup lang="ts">
import { LineChart } from '@/components/ui/chart-line'
import { useMooc } from '~/stores/mooc.store';
import {
    CalendarDate,
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
    parseDate,
    today
} from '@internationalized/date';

const moocStore = useMooc();
moocStore.fetchMooc();

const startDate = ref<DateValue>(new CalendarDate(2024, 4, 1));

interface EnrollmentData {
    'Date': string;
    'Inscriptions': number;
}

const filteredData = computed(() => {
    const data: EnrollmentData[] = [];
    if (!moocStore.mooc) return [];

    moocStore.mooc.enrollments.forEach((enrollment) => {
        const enrollmentDate = parseDate(enrollment.date).toDate(getLocalTimeZone());
        const startDateDate = startDate.value.toDate(getLocalTimeZone());

        const df = new DateFormatter('fr-FR', {
            dateStyle: 'long',
        });
        const formattedDate = df.format(enrollmentDate);

        if (enrollmentDate >= startDateDate) {
            data.push({
                'Date': formattedDate,
                'Inscriptions': enrollment.enrollments
            });
        }
    });

    return data;
});


</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
            <Label>A partir du</Label>
            <DatePicker size="sm" v-model="startDate" />
        </div>

        <LineChart
            v-if="moocStore.mooc"
            :data="filteredData"
            index="Date"
            :categories="['Inscriptions']"
        />
    </div>
</template>
