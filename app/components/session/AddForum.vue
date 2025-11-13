<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { requiredMessage } from '#shared/schema/users.schema';
import { useSession } from '~/stores/session.store';

const sessionStore = useSession();

const formSchema = toTypedSchema(
    z.object({
        instanceName: z.string({ message: requiredMessage }),
        forumUrl: z.string({ message: requiredMessage }),
        apiKey: z.string({ message: requiredMessage }),
    }),
);

const form = useForm({
    validationSchema: formSchema,
    initialValues: {
        forumUrl: 'https://mooc-forums.inria.fr',
    },
});

const open = ref(false);
const onSubmit = form.handleSubmit(async (values) => {
    await sessionStore.linkForum(values.instanceName, values.forumUrl,values.apiKey);
    open.value = false;
});
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child>
            <Button class="flex items-center gap-2">
                <CirclePlus class="size-5" />
                Ajouter un forum
            </Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Lier un forum</DialogTitle>
                <DialogDescription>Ajouter un forum</DialogDescription>
            </DialogHeader>

            <form @submit="onSubmit" class="space-y-3">
                <FormField v-slot="{ componentField }" name="instanceName">
                    <FormItem>
                        <FormLabel>Nom de l'instance</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="moocin" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="forumUrl">
                    <FormItem>
                        <FormLabel>URL du forum</FormLabel>
                        <FormControl>
                            <Select v-bind="componentField">
                                <SelectTrigger class="w-full">
                                    <SelectValue placeholder="Sélectionner une URL de forum" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="https://mooc-forums.inria.fr">https://mooc-forums.inria.fr</SelectItem>
                                    <SelectItem value="https://app-learninglab.inria.fr/forums">https://app-learninglab.inria.fr/forums</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="apiKey">
                    <FormItem>
                        <FormLabel>Clé d'API</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="dj8ar49ndfsad48tf6pdqfdd4q2nnb9ktv8ms62du26juhp2gd43e86zxvgjse43"
                                v-bind="componentField"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <Button
                    :disabled="!form.meta.value.valid || form.isSubmitting.value"
                    type="submit"
                    class="w-full mt-5!"
                >
                    <Loader2 v-if="form.isSubmitting.value" class="size-4 mr-2 animate-spin" />
                    Ajouter
                </Button>
            </form>
        </DialogContent>
    </Dialog>
</template>
