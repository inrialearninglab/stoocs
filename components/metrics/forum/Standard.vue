<script setup lang="ts">
import { formatDate, getParsedDate } from '~/utils/date.utils';
import { type DateValue, getLocalTimeZone, parseDate, today } from '@internationalized/date';

const props = defineProps<{
    title: string;
    description: string;
    label: string;
    yLabel: string;
    startDate?: string;
    endDate?: string;
    loading: boolean;
    details?: {
        date: string;
        value: number;
    }[];
}>();

const dates = ref({
    start: props.startDate ? parseDate(props.startDate) : today(getLocalTimeZone()),
    end: props.endDate
        ? props.details
            ? parseDate(props.details[props.details.length - 1].date)
            : parseDate(props.endDate)
        : today(getLocalTimeZone()),
});

interface GraphData {
    Date: string;
    [key: string]: number | string;
}

function getFilteredData(mode: 'day' | 'total') {
    const data: GraphData[] = [];
    if (!props.details) return [];

    let total = 0;

    props.details.forEach((item) => {
        if (!dates.value.start) return;

        const signupDate = getParsedDate(item.date);
        const enrollmentDate = getParsedDate(item.date);
        const startDate = dates.value.start.toDate(getLocalTimeZone());
        const endDate = dates.value.end.toDate(getLocalTimeZone());

        if (enrollmentDate > endDate) return;
        if (mode === 'day') {
            if (enrollmentDate < startDate) return;

            data.push({
                Date: formatDate(signupDate),
                [props.label]: item.value,
            });
        } else if (mode === 'total') {
            total += item.value;
            if (enrollmentDate < startDate) return;

            data.push({
                Date: formatDate(signupDate),
                [props.label]: total,
            });
        }
    });

    return data;
}

const dayChartId = 'signups-day-chart';
const totalChartId = 'signups-total-chart';

const presets = [
    {
        value: props.startDate!,
        label: 'Toute la session',
    },
];
</script>

<template>
    <div class="flex flex-col gap-2">
        <Tabs default-value="day">
            <TabsList class="grid w-full max-w-7xl grid-cols-2 mx-auto">
                <TabsTrigger value="day">Par jour</TabsTrigger>
                <TabsTrigger value="total">Cumul</TabsTrigger>
            </TabsList>
            <TabsContent value="day">
                <MetricsCard :title="title" :loading="loading" :empty="!details">
                    <template #description>{{ description }}</template>
                    <UtilsDateRangePicker
                        v-if="details"
                        v-model="dates"
                        :presets="presets"
                        :max-date="parseDate(details[details.length - 1].date)"
                        :min-date="parseDate(details[0].date)"
                    />

                    <LineChart
                        :show-legend="false"
                        :data="getFilteredData('day')"
                        :y-label="yLabel"
                        x-label="Date"
                        index="Date"
                        :categories="[label]"
                        :show-x-tickline="true"
                        :id="dayChartId"
                    />
                </MetricsCard>
            </TabsContent>

            <TabsContent value="total">
                <MetricsCard :title="title" :loading="loading" :empty="!details">
                    <template #description>{{ description }}</template>
                    <UtilsDateRangePicker
                        v-if="details"
                        v-model="dates"
                        :presets="presets"
                        :max-date="parseDate(details[details.length - 1].date)"
                        :min-date="parseDate(details[0].date)"
                    />

                    <AreaChart
                        :show-legend="false"
                        :data="getFilteredData('total')"
                        :y-label="yLabel"
                        x-label="Date"
                        index="Date"
                        :categories="[label]"
                        :show-x-tickline="true"
                        :id="totalChartId"
                    />
                </MetricsCard>
            </TabsContent>
        </Tabs>
    </div>
</template>
