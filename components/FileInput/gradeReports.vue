<script setup lang="ts">

const files: Ref<File[]> = ref([]);
</script>

<template>
    <Dialog>
        <DialogTrigger as-child class>
            <Button variant="outline">Ajouter des rapports</Button>
        </DialogTrigger>

        <DialogContent class="max-w-2xl">
            <DialogHeader>
                <DialogTitle>Ajouter des rapports de notations</DialogTitle>
                <DialogDescription>Ajouter le "Grade Report" et la "Problem Grade Report" ici</DialogDescription>
            </DialogHeader>
            <FileUploader :model-value="files" :multiple="true" :max-files="2" />
            <DialogFooter>
                <Button class="w-full" type="submit">Valider</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>