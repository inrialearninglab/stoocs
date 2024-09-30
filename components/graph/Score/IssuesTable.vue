<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { ChevronDown, CircleAlert } from 'lucide-vue-next';
import { toast } from 'vue-sonner';


const props = defineProps<{
    problems: {
        name: string;
        Moyenne: number;
    }[];
}>();

const isTableOpen = ref(false);

const copied = ref(false);

async function toClipboard() {
    try {
        let markdown = '| Question | Moyenne |\n| --- | --- |\n';

        props.problems.forEach(problem => {
            markdown += `| ${problem.name} | ${problem['Moyenne']}% |\n`;
        });

        await navigator.clipboard.writeText(markdown);

        copied.value = true;
        setTimeout(() => copied.value = false, 2000);
        toast.success('Tableau copié dans le presse-papier');
    } catch (error) {
        console.error('Failed to copy to clipboard', error);
        toast.error('Impossible de copier le tableau');
    }
}

</script>

<template>
    <Card class="select-none">
        <Collapsible v-model:open="isTableOpen">
            <CollapsibleTrigger as-child>
                <CardHeader
                    :class="{ 'border-b': isTableOpen, 'rounded-b': !isTableOpen }"
                    class="cursor-pointer hover:bg-muted hover:rounded-t p-4 transition"
                >
                    <div class="flex gap-3 justify-between items-center">
                        <CardTitle class="flex-1 text-lg flex gap-2 items-center">
                            <CircleAlert class="size-5" />
                            {{ problems.length }} questions à revoir (inférieur à 50%)
                        </CardTitle>
                        <Button size="icon" variant="ghost" class="relative">
                            <ChevronDown class="transition-all absolute duration-200" :class="isTableOpen ? 'rotate-180' : '-rotate-0'" />
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
                            <TableRow v-for="problem of problems">
                                <TableCell>{{ problem.name }}</TableCell>
                                <TableCell>{{ problem['Moyenne'] }}%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter class="border-t p-4">
                    <UtilsClipboard @copied="toClipboard" />
                </CardFooter>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>
