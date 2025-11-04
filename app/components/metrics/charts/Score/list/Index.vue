<script setup lang="ts">
import { ChevronDown, Download, List } from 'lucide-vue-next';
import { columns, type Question } from './columns';

const props = defineProps<{
    questions: Question[];
}>();

const open = ref(false);

function exportToCSV() {
    const csvContent = 'data:text/csv;charset=utf-8,';
    const headers = 'Question;Utilisateurs;Moyenne\n';
    const rows = props.questions
        .map((question) => `${question.name};${question.Utilisateurs};${question.Moyenne}\n`)
        .join('');
    const csvData = headers + rows;
    const encodedUri = encodeURI(csvContent + csvData);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'questions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>

<template>
    <Card class="overflow-hidden">
        <Collapsible v-model:open="open">
            <CollapsibleTrigger as-child>
                <CardHeader
                    :class="{ 'border-b': open, 'rounded-b': !open }"
                    class="cursor-pointer hover:bg-muted hover:rounded-t p-4 transition"
                >
                    <div class="flex gap-3 justify-between items-center">
                        <CardTitle class="flex-1 text-lg flex gap-2 items-center">
                            <List class="size-5" />
                            Liste des questions ({{ questions.length }} questions)
                        </CardTitle>
                        <Button size="icon" variant="ghost" class="relative">
                            <ChevronDown
                                class="transition-all absolute duration-200"
                                :class="open ? 'rotate-180' : 'rotate-0'"
                            />
                        </Button>
                    </div>
                </CardHeader>
            </CollapsibleTrigger>

            <CollapsibleContent>
                <CardContent class="p-0">
                    <DataTable :columns="columns" :data="questions">
                        <template #footer>
                            <TableFooter>
                                <TableCell>
                                    <Button variant="secondary" @click="exportToCSV">
                                        <Download class="mr-2 size-5" /> Exporter en CSV
                                    </Button>
                                </TableCell>
                                <TableCell />
                                <TableCell />
                            </TableFooter>
                        </template>
                    </DataTable>
                </CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>
