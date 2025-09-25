<script setup lang="ts">
import { Button, Text, Preview, Container, Section, Img, Link, Tailwind, Heading } from '@vue-email/components';

defineProps<{
    invitedByUsername: string;
    invitedByEmail: string;
    inviteLink: string;
}>();

const previewText = 'Invitation Stoocs';
</script>

<template>
    <Tailwind
        :config="{
            theme: {
                extend: {
                    colors: {
                        brand: '#007291',
                    },
                },
            },
        }"
    >
        <Preview>{{ previewText }}</Preview>
        <Container class="border border-solid border-[#eaeaea] p-[20px] rounded my-[40px] mx-auto max-w-[465px]">
            <Section class="mt-[32px]">
                <Img src="https://mooc-stats.inria.fr/logo.png" width="80" alt="Stoocs" class="my-0 mx-auto rounded" />
            </Section>

            <Heading as="h2" class="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Vous avez été invité à rejoindre <strong>Stoocs</strong>
            </Heading>

            <Text class="text-black text-[14px] leading-[24px]">
                <strong>{{ invitedByUsername }}</strong>
                (<Link :href="`mailto:${invitedByEmail}`" class="text-blue-600 no-underline">
                    {{ invitedByEmail }} </Link
                >) vous a invité à rejoindre <strong>Stoocs</strong>.
            </Text>

            <Section class="text-center mb-[24px]">
                <Button
                    px="20"
                    py="12"
                    class="bg-blue-600 rounded text-white text-[12px] font-semibold no-underline text-center p-2"
                    :href="inviteLink"
                >
                    Créer un compte
                </Button>
            </Section>
            <Text class="text-black text-[14px] leading-[24px]">
                ou ouvrez ce lien dans votre navigateur
                <Link :href="inviteLink" class="text-blue-600 no-underline">
                    {{ inviteLink }}
                </Link>
            </Text>
        </Container>
    </Tailwind>
</template>
