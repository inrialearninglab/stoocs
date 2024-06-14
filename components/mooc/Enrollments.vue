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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { formatDate, getParsedDate } from '~/utils/date.utils';

const props = defineProps<{
    details?: {
        date: string,
        enrollments: number
    }[];
    startDate?: Date;
    loading: boolean;
}>();

const startDate = ref<DateValue>(new CalendarDate(2024, 4, 1));
//
interface EnrollmentData {
    'Date': string;
    'Inscriptions': number;
}

function getFilteredData(mode: 'day' | 'total') {
    const data: EnrollmentData[] = [];
    if (!props.details) return [];

    let enrollments = 0;


    props.details.forEach((enrollment) => {
        const enrollmentDate = getParsedDate(enrollment.date);
        const startDateDate = startDate.value.toDate(getLocalTimeZone());

        if (mode === 'day') {
            if (enrollmentDate < startDateDate) return;

            data.push({
                'Date': formatDate(enrollmentDate),
                'Inscriptions': enrollment.enrollments
            });
        } else if (mode === 'total') {
            if (enrollmentDate < startDateDate) {
                return enrollments += enrollment.enrollments;
            }

            enrollments += enrollment.enrollments;
            data.push({
                'Date': formatDate(enrollmentDate),
                'Inscriptions': enrollments
            });
        }
    });

    return data;
}


</script>

<template>
    <Tabs default-value="day">
       <TabsList class="grid w-full grid-cols-2">
           <TabsTrigger value="day">Par jour</TabsTrigger>
           <TabsTrigger value="total">Total</TabsTrigger>
       </TabsList>

        <TabsContent value="day">
            <Card>
                <CardHeader class="pb-3">
                    <CardTitle>Inscriptions</CardTitle>
                    <CardDescription>Nombre de nouvelle inscription par jour</CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="flex gap-2 items-center mt-2">
                        <Label>A partir du</Label>
                        <DatePicker size="sm" v-model="startDate" />
                    </div>

                    <div v-if="!loading && !details" class="w-full h-[400px] items-center justify-center flex">
                        <h2>Aucune donnée</h2>
                    </div>
                    <LineChart
                        v-else
                        :data="getFilteredData('day')"
                        index="Date"
                        :categories="['Inscriptions']"
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="total">
            <Card>
                <CardHeader  class="pb-3">
                    <CardTitle>Inscriptions</CardTitle>
                    <CardDescription>Nombre total d'inscription</CardDescription>
                </CardHeader>

                <CardContent>
                    <div class="flex gap-2 items-center mt-2">
                        <Label>A partir du</Label>
                        <DatePicker size="sm" v-model="startDate" />
                    </div>

                    <div v-if="!loading && !details" class="w-full h-[400px] p-5 items-center justify-center flex">
                        <h2>Aucune donnée</h2>
                    </div>
                    <AreaChart
                        v-else
                        :data="getFilteredData('total')"
                        index="Date"
                        :categories="['Inscriptions']"
                    />
                </CardContent>
            </Card>
        </TabsContent>
    </Tabs>
</template>
