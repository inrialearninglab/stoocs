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
                <DialogDescription>Ajouter les fichier "<code>Grade Report</code>" et "<code>Problem Grade Report</code>" ici</DialogDescription>
            </DialogHeader>
            <FileUploader v-model="files" :multiple="true" :max-files="2" />
            <DialogFooter>
                <Button class="w-full" type="submit">Valider</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>