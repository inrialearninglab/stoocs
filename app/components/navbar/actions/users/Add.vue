<script setup lang="ts">
import { CirclePlus, Loader2 } from 'lucide-vue-next';
import { DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '~/components/ui/dialog';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { requiredMessage, emailMessage } from '#shared/schema/users.schema';
import { useUsers } from '~/stores/users.store';

const usersStore = useUsers();

const formSchema = toTypedSchema(
    z.object({
        email: z.string({ message: requiredMessage }).email({ message: emailMessage }),
        role: z.enum(['ILL', 'guest'], { message: requiredMessage }),
    }),
);

const { handleSubmit, isSubmitting, meta } = useForm({
    validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
    await usersStore.createInvitation(values.email, values.role === 'guest');
    open.value = false;
});

const open = ref(false);
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child>
            <Button class="flex items-center gap-2">
                <CirclePlus class="size-4" />
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
                        <FormDescription> Ce sera l'email du nouvel utilisateur </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="role">
                    <FormItem>
                        <div class="space-y-0 5">
                            <FormLabel>Rôle</FormLabel>
                        </div>

                        <FormControl>
                            <Select v-bind="componentField">
                                <SelectTrigger>
                                    <SelectValue placholder="Choisir un rôle" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Rôle</SelectLabel>
                                        <SelectItem value="ILL">
                                            <div class="flex flex-col">
                                                <span class="font-medium text-sm">ILL</span>
                                                <span class="text-gray-400 text-xs hide-class">
                                                    Peut voir tous les cours et ajouter des données
                                                </span>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="guest">
                                            <div class="flex flex-col select-item">
                                                <span class="font-medium text-sm">Invité</span>
                                                <span class="text-gray-400 text-xs hide-class">
                                                    Peut voir les cours auxquels il a été invité.
                                                </span>
                                            </div>
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <Button type="submit" class="w-full !mt-5" :disabled="isSubmitting || !meta.valid">
                    <Loader2 v-if="isSubmitting" class="animate-spin mr-2" />
                    Inviter
                </Button>
            </form>
        </DialogContent>
    </Dialog>
</template>

<style scoped></style>
