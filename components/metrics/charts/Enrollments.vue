<script setup lang="ts">
import { LineChart } from '~/components/ui/chart-line';
import { type DateValue, getLocalTimeZone, parseDate, today } from '@internationalized/date';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { formatDate, getParsedDate } from '~/utils/date.utils';

const props = defineProps<{
    details?: {
        date: string;
        enrollments: number;
    }[];
    startDate?: string;
    endDate?: string;
    loading: boolean;
}>();

const startDateValue = ref<DateValue>(props.startDate ? parseDate(props.startDate) : today(getLocalTimeZone()));
const endDateValue = ref<DateValue>(
    props.endDate
        ? parseDate(props.endDate) > today(getLocalTimeZone())
            ? today(getLocalTimeZone())
            : parseDate(props.endDate)
        : today(getLocalTimeZone()),
);

interface EnrollmentData {
    Date: string;
    Inscriptions: number;
}

function getFilteredData(mode: 'day' | 'total') {
    const data: EnrollmentData[] = [];
    if (!props.details) return [];

    let enrollments = 0;

    props.details.forEach((enrollment) => {
        const enrollmentDate = getParsedDate(enrollment.date);
        const startDate = startDateValue.value.toDate(getLocalTimeZone());
        const endDate = endDateValue.value.toDate(getLocalTimeZone());

        if (enrollmentDate > endDate) return;

        if (mode === 'day') {
            if (enrollmentDate < startDate) return;

            data.push({
                Date: formatDate(enrollmentDate),
                Inscriptions: enrollment.enrollments,
            });
        } else if (mode === 'total') {
            if (enrollmentDate < startDate) {
                return (enrollments += enrollment.enrollments);
            }

            enrollments += enrollment.enrollments;
            data.push({
                Date: formatDate(enrollmentDate),
                Inscriptions: enrollments,
            });
        }
    });

    return data;
}

const presetsStart = [{ value: props.startDate!, label: 'Début de la session' }];

const presetsEnd = [{ value: props.endDate!, label: 'Fin de la session' }];
</script>

<template>
    <div class="flex flex-col gap-2">
        <Tabs default-value="day">
            <TabsList class="grid w-full grid-cols-2">
                <TabsTrigger value="day">Par jour</TabsTrigger>
                <TabsTrigger value="total">Cumul</TabsTrigger>
            </TabsList>
            <TabsContent value="day">
                <MetricsCard title="Inscriptions" :loading="loading" :empty="!details" report="enrollment">
                    <template #description> Nombre de nouvelles inscriptions par jour </template>

                    <div class="flex gap-5 items-center">
                        <div class="flex gap-2 items-center mt-2">
                            <Label>À partir du</Label>
                            <UtilsDatePicker size="sm" v-model="startDateValue as DateValue" :presets="presetsStart" />
                        </div>
                        <div class="flex gap-2 items-center mt-2">
                            <Label>Jusqu'au</Label>
                            <UtilsDatePicker size="sm" v-model="endDateValue as DateValue" :presets="presetsEnd" />
                        </div>
                    </div>

                    <LineChart
                        :show-legend="false"
                        :data="getFilteredData('day')"
                        x-label="Date"
                        y-label="Nombre d'inscrits"
                        index="Date"
                        :categories="['Inscriptions']"
                    />
                </MetricsCard>
            </TabsContent>

            <TabsContent value="total">
                <MetricsCard title="Inscriptions" :loading="loading" :empty="!details" report="enrollment">
                    <template #description> Nombre total d'inscriptions </template>

                    <div class="flex gap-5 items-center">
                        <div class="flex gap-2 items-center mt-2">
                            <Label>À partir du</Label>
                            <UtilsDatePicker size="sm" v-model="startDateValue as DateValue" :presets="presetsStart" />
                        </div>
                        <div class="flex gap-2 items-center mt-2">
                            <Label>Jusqu'au</Label>
                            <UtilsDatePicker size="sm" v-model="endDateValue as DateValue" :presets="presetsEnd" />
                        </div>
                    </div>
                    <AreaChart
                        :show-legend="false"
                        :data="getFilteredData('total')"
                        y-label="Nombre d'inscrits"
                        x-label="Date"
                        index="Date"
                        :categories="['Inscriptions']"
                    />
                </MetricsCard>
            </TabsContent>
        </Tabs>
    </div>
</template>
