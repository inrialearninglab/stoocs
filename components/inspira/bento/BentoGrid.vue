<template>
  <div
    :class="
      cn(
        'grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto ',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>
