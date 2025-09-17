<script setup lang="ts">
import { Camera } from 'lucide-vue-next';
import { type DateValue, getLocalTimeZone, parseDate, today } from '@internationalized/date';

const props = defineProps<{
    id: string;
    title: string;
    descriptionLabel: string;
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

const sessionStore = useSession();

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

const periodValue = ref(0);

function getFilteredData(mode: 'day' | 'total') {
    const data: GraphData[] = [];
    if (!props.details) return [];

    let total = 0;
    let tmpPeriod = 0;

    props.details.forEach((item) => {
        if (!dates.value.start) return;

        const signupDate = getParsedDate(item.date);
        const enrollmentDate = getParsedDate(item.date);
        const startDate = dates.value.start.toDate(getLocalTimeZone());
        const endDate = dates.value.end.toDate(getLocalTimeZone());

        if (enrollmentDate > endDate) return;
        if (mode === 'day') {
            if (enrollmentDate < startDate) return;
            tmpPeriod += item.value;

            data.push({
                Date: formatDate(signupDate),
                [props.label]: item.value,
            });
        } else if (mode === 'total') {
            total += item.value;
            if (enrollmentDate < startDate) return;
            tmpPeriod += item.value;

            data.push({
                Date: formatDate(signupDate),
                [props.label]: total,
            });
        }
    });
    periodValue.value = tmpPeriod;

    return data;
}

const dayChartId = `forum-${props.id}-day-chart`;
const totalChartId = `forum-${props.id}-total-chart`;
const description = computed(() => `${periodValue.value.toLocaleString('fr-FR')} ${props.descriptionLabel}`);

const presets = [
    {
        value: props.startDate!,
        label: 'Toute la session',
    },
];
</script>

<template>
    <div class="flex flex-col gap-2">
        <ClientOnly>
            <Tabs default-value="day">
                <TabsList class="grid w-full max-w-7xl grid-cols-2 mx-auto">
                    <TabsTrigger value="day">Par jour</TabsTrigger>
                    <TabsTrigger value="total">Cumul</TabsTrigger>
                </TabsList>
                <TabsContent value="day">
                    <MetricsCard :title="title" :loading="loading" :empty="!details">
                        <template #description>{{ description }}</template>
                        <template #legend>
                            <Button
                                size="icon"
                                @click="
                                    saveChartAsPNG(
                                        dayChartId,
                                        sessionStore.session!.data!.mooc.title,
                                        sessionStore.session!.data!.sessionName,
                                        new Date().toISOString().slice(0, 10),
                                        title,
                                        description,
                                    )
                                "
                            >
                                <Camera />
                            </Button>
                        </template>

                        <!-- @vue-expect-error -->
                        <UtilsDateRangePicker
                            v-if="details"
                            v-model="dates"
                            :presets="presets"
                            :max-date="parseDate(details[details.length - 1].date)"
                            :min-date="parseDate(details[0].date)"
                        />

                        <ClientOnly>
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
                        </ClientOnly>
                    </MetricsCard>
                </TabsContent>

                <TabsContent value="total">
                    <MetricsCard :title="title" :loading="loading" :empty="!details">
                        <template #description>{{ description }}</template>
                        <template #legend>
                            <Button
                                size="icon"
                                @click="
                                    saveChartAsPNG(
                                        totalChartId,
                                        sessionStore.session!.data!.mooc.title,
                                        sessionStore.session!.data!.sessionName,
                                        new Date().toISOString().slice(0, 10),
                                        title,
                                        description,
                                    )
                                "
                            >
                                <Camera />
                            </Button>
                        </template>

                        <!-- @vue-expect-error -->
                        <UtilsDateRangePicker
                            v-if="details"
                            v-model="dates"
                            :presets="presets"
                            :max-date="parseDate(details[details.length - 1].date)"
                            :min-date="parseDate(details[0].date)"
                        />

                        <ClientOnly>
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
                        </ClientOnly>
                    </MetricsCard>
                </TabsContent>
            </Tabs>
        </ClientOnly>
    </div>
</template>
