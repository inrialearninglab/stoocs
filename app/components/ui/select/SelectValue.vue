<script setup lang="ts">
import { SelectValue, type SelectValueProps } from 'radix-vue';

const props = defineProps<SelectValueProps>();
</script>

<template>
    <div class="select-value">
        <SelectValue v-bind="props">
            <slot />
        </SelectValue>
    </div>
</template>

<style>
.select-value .hide-class {
    display: none;
}
</style>
