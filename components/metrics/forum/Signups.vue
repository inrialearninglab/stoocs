<script setup lang="ts">
import { formatDate, getParsedDate } from '~/utils/date.utils';
import { type DateValue, getLocalTimeZone, parseDate, today } from '@internationalized/date';

const props = defineProps<{
    startDate?: string;
    endDate?: string;
    loading: boolean;
}>();

const sessionStore = useSession();

const { data: details } = await useFetch('/api/forum/signups', {
    method: 'POST',
    body: {
        instanceName: sessionStore?.forum?.data?.instance,
        startDate: props.startDate,
        endDate: props.endDate,
    },
});

const dates = ref({
    start: props.startDate ? parseDate(props.startDate) : today(getLocalTimeZone()),
    end: props.endDate
        ? details
            ? parseDate(details.value[details.value.length - 1].date)
            : parseDate(props.endDate)
        : today(getLocalTimeZone()),
});

interface SignupsData {
    Date: string;
    Inscriptions: number;
}

function getFilteredData(mode: 'day' | 'total') {
    const data: SignupsData[] = [];
    if (!details.value) return [];

    let signups = 0;

    details.value.forEach((item) => {
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
                Inscriptions: item.signups,
            });
        } else if (mode === 'total') {
            signups += item.signups;
            if (enrollmentDate < startDate) return;

            data.push({
                Date: formatDate(signupDate),
                Inscriptions: signups,
            });
        }
    });

    return data;
}

const dayChartId = 'signups-day-chart';
const totalChartId = 'signups-total-chart';
const title = 'Inscriptions sur le forum';
const description = "Nombre d'inscription sur le forum par jour";

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
                        y-label="Nombre d'inscrits"
                        x-label="Date"
                        index="Date"
                        :categories="['Inscriptions']"
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
                        y-label="Nombre d'inscrits"
                        x-label="Date"
                        index="Date"
                        :categories="['Inscriptions']"
                        :show-x-tickline="true"
                        :id="totalChartId"
                    />
                </MetricsCard>
            </TabsContent>
        </Tabs>
    </div>
</template>
