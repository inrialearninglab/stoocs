<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    invitedByUsername: string;
    invitedByEmail: string;
    inviteLink: string;
}>();

const previewText = 'Invitation Stoocs';
</script>

<template>
    <ETailwind>
        <EHtml>
            <EHead />
            <EPreview>{{ previewText }}</EPreview>
            <EBody class="bg-white my-auto mx-auto font-sans">
                <EContainer
                    class="border border-solid border-[#eaeaea] p-[20px] md:p-7 rounded my-[40px] mx-auto max-w-[465px]"
                >
                    <ESection class="mt-[32px]">
                        <EImg
                            src="https://mooc-stats.inria.fr/logo.png"
                            width="80"
                            alt="Stoocs"
                            class="my-0 mx-auto rounded"
                        />
                    </ESection>
                    <EHeading class="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                        Vous avez été invité à rejoindre <strong>Stoocs</strong>
                    </EHeading>
                    <EText class="text-black text-[14px] leading-[24px]">
                        <strong>{{ invitedByUsername }}</strong>
                        (<ELink :href="`mailto:${invitedByEmail}`" class="text-blue-600 no-underline">
                            {{ invitedByEmail }} </ELink
                        >) vous a invité à rejoindre <strong>Stoocs</strong>.
                    </EText>
                    <ESection class="text-center mb-[24px]">
                        <EButton
                            px="20"
                            py="12"
                            class="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                            :href="inviteLink"
                        >
                            Créer un compte
                        </EButton>
                    </ESection>
                    <EText class="text-black text-[14px] leading-[24px]">
                        ou ouvrez ce lien dans votre navigateur
                        <ELink :href="inviteLink" class="text-blue-600 no-underline">
                            {{ inviteLink }}
                        </ELink>
                    </EText>
                </EContainer>
            </EBody>
        </EHtml>
    </ETailwind>
</template>
