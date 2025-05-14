<script setup lang="ts">
import { LineChart } from '~/components/ui/chart-line';
import { type DateValue, getLocalTimeZone, parseDate, today } from '@internationalized/date';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { formatDate, getParsedDate } from '~/utils/date.utils';
import { Camera, Crosshair } from 'lucide-vue-next';
import { saveChartAsPNG } from '~/utils';

const props = defineProps<{
    details?: {
        date: string;
        enrollments: number;
    }[];
    startDate?: string;
    endDate?: string;
    loading: boolean;
    hideChip?: boolean;
}>();

const dates = ref({
    start: props.startDate ? parseDate(props.startDate) : today(getLocalTimeZone()),
    end: props.endDate
        ? props.details
            ? parseDate(props.details[props.details.length - 1].date)
            : parseDate(props.endDate)
        : today(getLocalTimeZone()),
});

watch(
    () => props.details,
    (newDetails) => {
        if (newDetails && newDetails.length > 0) {
            dates.value.end = parseDate(newDetails[newDetails.length - 1].date);
        }
    },
);

interface EnrollmentData {
    Date: string;
    Inscriptions: number;
}

const periodEnrollments = ref(0);

function getFilteredData(mode: 'day' | 'total') {
    const data: EnrollmentData[] = [];
    if (!props.details) return [];

    let enrollments = 0;
    let tmpPeriod = 0;

    props.details.forEach((enrollment) => {
        if (!dates.value.start) return;
        const enrollmentDate = getParsedDate(enrollment.date);
        const startDate = dates.value.start.toDate(getLocalTimeZone());
        const endDate = dates.value.end.toDate(getLocalTimeZone());

        if (enrollmentDate > endDate) return;

        if (mode === 'day') {
            if (enrollmentDate < startDate) return;
            tmpPeriod += enrollment.enrollments;

            data.push({
                Date: formatDate(enrollmentDate),
                Inscriptions: enrollment.enrollments,
            });
        } else if (mode === 'total') {
            enrollments += enrollment.enrollments;

            if (enrollmentDate < startDate) {
                return;
            }

            tmpPeriod += enrollment.enrollments;

            data.push({
                Date: formatDate(enrollmentDate),
                Inscriptions: enrollments,
            });
        }
    });

    periodEnrollments.value = tmpPeriod;

    return data;
}

const presets = [
    {
        value: props.startDate!,
        label: 'Toute la session',
    },
];

const chartId = 'enrollment-chart';

const sessionStore = useSession();

const title = 'Inscriptions';
const description = computed(
    () => `
        ${props.details?.reduce((acc, curr) => acc + curr.enrollments, 0).toLocaleString('fr-FR')} inscriptions au total.
        <br />
        ${periodEnrollments.value.toLocaleString('fr-FR')} inscriptions sur la période sélectionnée.
    `,
);

const brush = ref(false);

async function onBrushEnd(start: number, end: number) {
    if (!brush.value) return;

    const startDate = dates.value.start.toDate(getLocalTimeZone());

    const newStartDate = new Date(startDate);
    const newEndDate = new Date(startDate);

    newStartDate.setDate(startDate.getDate() + Math.round(start));
    newEndDate.setDate(startDate.getDate() + Math.round(end));

    dates.value.start = parseDate(newStartDate.toISOString().split('T')[0]);
    dates.value.end = parseDate(newEndDate.toISOString().split('T')[0]);
    brush.value = false;
}
</script>

<template>
    <div class="flex flex-col gap-2">
        <MetricsCard :title="title" :loading="loading" :empty="!details" :report="hideChip ? undefined : 'enrollment'">
            <template #description><div v-html="description" /></template>

            <template #legend>
                <Button
                    size="icon"
                    @click="
                        saveChartAsPNG(
                            chartId,
                            sessionStore.session!.data!.mooc.title,
                            sessionStore.session!.data!.sessionName,
                            sessionStore.enrollmentsReportDate!,
                            title,
                            description,
                        )
                    "
                >
                    <Camera />
                </Button>
            </template>

            <div class="flex justify-between">
                <!-- @vue-expect-error  -->
                <UtilsDateRangePicker
                    v-if="details"
                    v-model="dates"
                    :max-date="parseDate(details[details.length - 1].date)"
                    :min-date="parseDate(details[0].date)"
                    :presets="presets"
                />

                <Toggle
                    variant="outline"
                    aria-label="Activer le pinceau de selection"
                    v-model:pressed="brush"
                    class="border-2 border-dashed"
                >
                    <Crosshair class="mr-2" />
                    Selectionner une plage de dates
                </Toggle>
            </div>

            <Tabs default-value="day">
                <TabsList class="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="day">Par jour</TabsTrigger>
                    <TabsTrigger value="total">Cumul</TabsTrigger>
                </TabsList>
                <TabsContent value="day">
                    <LineChart
                        :show-legend="false"
                        :data="getFilteredData('day')"
                        x-label="Date"
                        y-label="Nombre d'inscrits"
                        index="Date"
                        :categories="['Inscriptions']"
                        :show-x-tickline="true"
                        :id="chartId"
                        :brush="brush"
                        @brush-end="onBrushEnd"
                    />
                </TabsContent>
                <TabsContent value="total">
                    <AreaChart
                        :show-legend="false"
                        :data="getFilteredData('total')"
                        y-label="Nombre d'inscrits"
                        x-label="Date"
                        index="Date"
                        :categories="['Inscriptions']"
                        :show-x-tickline="true"
                        :id="chartId"
                        :brush="brush"
                        @brush-end="onBrushEnd"
                    />
                </TabsContent>
            </Tabs>
        </MetricsCard>
    </div>
</template>
