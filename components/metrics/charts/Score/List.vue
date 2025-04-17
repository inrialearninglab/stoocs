<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Ban, ChevronDown, Download, List } from 'lucide-vue-next';

const props = defineProps<{
    questions: {
        name: string;
        Moyenne: number;
    }[];
}>();

const open = ref(false);

function getQuestionClass(score: number) {
    if (score > 60) {
        return 'bg-success-bg text-success-text';
    } else if (score < 50) {
        return 'bg-error-bg text-error-text';
    } else {
        return 'bg-warning-bg text-warning-text';
    }
}

function exportToCSV() {
    const csvContent = 'data:text/csv;charset=utf-8,';
    const headers = 'Question;Moyenne\n';
    const rows = props.questions.map((question) => `${question.name};${question.Moyenne}\n`).join('');
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
                                :class="open ? 'rotate-180' : '-rotate-0'"
                            />
                        </Button>
                    </div>
                </CardHeader>
            </CollapsibleTrigger>

            <CollapsibleContent>
                <CardContent class="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Question</TableHead>
                                <TableHead>Moyenne</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="question of questions" :class="getQuestionClass(question['Moyenne'])">
                                <TableCell>{{ question.name }}</TableCell>
                                <TableCell>{{ question['Moyenne'] }} %</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableCell>
                                <Button variant="secondary" @click="exportToCSV">
                                    <Download class="mr-2 size-5" /> Exporter en CSV
                                </Button>
                            </TableCell>
                        </TableFooter>
                    </Table>
                </CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>
