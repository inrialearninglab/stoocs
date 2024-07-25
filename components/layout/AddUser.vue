<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import { DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '~/components/ui/dialog';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { requiredMessage, emailMessage } from '~/schema/users.schema';
import { useUsers } from '~/stores/users.store';

const usersStore = useUsers();

const formSchema = toTypedSchema(z.object({
    email: z.string({ message: requiredMessage }).email({ message: emailMessage })
}));

const { handleSubmit } = useForm({
    validationSchema: formSchema
})

const onSubmit = handleSubmit(async (values) => {
    await usersStore.createInvitation(values.email);
})

</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button class="flex items-center gap-2">
                <CirclePlus class="size-4"/>
                Ajouter un membre
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Ajouter un membre</DialogTitle>
                <DialogDescription>Invitez un nouveau membre</DialogDescription>
            </DialogHeader>

            <form @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="Email" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            Ce sera l'email du nouvel utilisateur
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </form>

            <DialogFooter>
                <DialogClose as-child>
                    <Button type="submit" @click="onSubmit">Inviter</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>