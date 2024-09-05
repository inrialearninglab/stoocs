<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import { DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '~/components/ui/dialog';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { requiredMessage, emailMessage } from '~/schema/users.schema';
import { useUsers } from '~/stores/users.store';
import { Switch } from '~/components/ui/switch';

const usersStore = useUsers();

const formSchema = toTypedSchema(z.object({
    email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
    isGuest: z.boolean().default(false)
}));

const { handleSubmit } = useForm({
    validationSchema: formSchema
})

const onSubmit = handleSubmit(async (values) => {
    await usersStore.createInvitation(values.email, values.isGuest);
    open.value = false;
})

const open = ref(false);

</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child>
            <Button class="flex items-center gap-2">
                <CirclePlus class="size-4"/>
                Ajouter un membre
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Ajouter un membre</DialogTitle>
                <DialogDescription>Inviter un nouveau membre</DialogDescription>
            </DialogHeader>

            <form @submit="onSubmit" class="space-y-3">
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

                <FormField v-slot="{ value, handleChange }" name="isGuest">
                    <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div class="space-y-0 5">
                            <FormLabel>Invité</FormLabel>
                            <FormDescription>
                                Ce membre est un invité
                            </FormDescription>
                        </div>

                        <FormControl>
                            <Switch
                                :checked="value"
                                @update:checked="handleChange"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </form>

            <DialogFooter>
                <Button type="submit" @click="onSubmit">Inviter</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
