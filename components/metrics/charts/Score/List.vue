<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { ChevronDown, List } from 'lucide-vue-next';

defineProps<{
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
                    </Table>
                </CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>
