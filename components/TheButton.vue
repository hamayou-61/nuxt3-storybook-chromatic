<template>
  <v-btn
    :label="label"
    :color="color"
    :variant="variant"
    :flat="flat"
    :exact="exact"
    :elevation="elevation"
    :disabled="disabled"
    size="medium"
    @click="() => emits('click', 'Event')"
  >
    {{ label }}
  </v-btn>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * ボタンに表示するテキスト
   */
  label: string
  variant?: 'plain' | 'outlined' | 'tonal' | 'text'
  color: 'primary' | 'success' | 'error' | 'info'
  flat?: boolean
  exact?: boolean
  elevation?: string | number
  disabled?: boolean
  height?: string | number
  href?: string
  loading?: string | boolean
}>()
const emits = defineEmits<{
  /**
   * @param label The label of the button
   */
  click: [label: string];
}>()
</script>
