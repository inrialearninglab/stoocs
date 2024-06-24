<script setup lang="ts">
const files = ref<File[]>([]);
</script>

<template>
    <Dialog>
        <DialogTrigger as-child class>
            <Button variant="outline">Ajouter un rapport</Button>
        </DialogTrigger>

        <DialogContent class="max-w-2xl">
            <DialogHeader>
                <DialogTitle>Ajouter un rapport d'inscription</DialogTitle>
                <DialogDescription>Ajouter le rapport du "Course dashboard" de FUN ici</DialogDescription>
            </DialogHeader>
            <FileUploader :model-value="files" />
            <DialogFooter>
                <Button class="w-full" type="submit">Valider</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>